import React, { Component, unmountComponentAtNode } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Place from './Place';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ubicacionUsuario: null,
      data:null
    };
  }

  map='';

  handleCallback = (childData) =>{
    //this.setState({data: childData})

    console.log(childData.nombre);
    var text = document.getElementById("origen")
    text.value = childData.nombre
    document.getElementById("nearBydiv").style.display="none"
    const request = {
      query: childData.nombre ,
      fields: ['photos', 'formatted_address', 'name','place_id','opening_hours'],
    };
    this.service.findPlaceFromQuery(request, this.findPlaceResult);
  }

  componentDidMount(){
    const googlePlaceAPILoad = setInterval(() => {
      if (window.google){
        this.google=window.google;
        clearInterval(googlePlaceAPILoad);
        console.log('Load Place API');
        const mapCenter = new this.google.maps.LatLng(4.624335,-74.064644);
        this.map = new this.google.maps.Map(document.getElementById('gmapContainer'), {
          center: mapCenter,
          zoom: 15
        });
      };
    },100);

    /* Solicitar ubicacion cliente */
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.locationErrorHandler)
    }else{
      alert("La ubicación en tiempo real no está disponible para este navegador")
    }
  }

  showMap(mapCenter) {
    const directionsService = new this.google.maps.DirectionsService();
    const directionsRenderer = new this.google.maps.DirectionsRenderer();
    const map = new window.google.maps.Map(
        document.getElementById('map'), {
          zoom: 15, 
          center: mapCenter
        });
    var marker = new window.google.maps.Marker({position: mapCenter, map: map});
    directionsRenderer.setMap(map);
      
    /* Ruta de llegada */
    this.calculateAndDisplayRoute(directionsService, directionsRenderer,mapCenter);
    document.getElementById("metodo").addEventListener("change", () => {
      this.calculateAndDisplayRoute(directionsService, directionsRenderer,mapCenter);
    });
  }

  calculateAndDisplayRoute(directionsService, directionsRenderer, mapCenter) {
    const selectedMode = document.getElementById("metodo").value;
    directionsService.route({
      origin: new this.google.maps.LatLng(this.state.ubicacionUsuario.lat,this.state.ubicacionUsuario.lng),
      destination: mapCenter,
      travelMode: this.google.maps.TravelMode[selectedMode]
    }).then((response) => {
      directionsRenderer.setDirections(response);
    }).catch((e) => console.log(e));
  }

  manejoOnClick = (e) => {
    const request = {
      query: document.getElementById('origen').value ,
      fields: ['photos', 'formatted_address', 'name','place_id','opening_hours'],
    };
    this.service = new this.google.maps.places.PlacesService(this.map);
    this.service.findPlaceFromQuery(request, this.findPlaceResult);
  }

  getCoordinates = (position) => {
    this.setState({
      ubicacionUsuario: {lat: position.coords.latitude, lng: position.coords.longitude}
    })
  }

  locationErrorHandler(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("Se requieren permisos para acceder a la ubicacion en tiempo real")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("La información de ubicación en tiempo real no está disponible")
        break;
      case error.TIMEOUT:
        alert("Se expiro el tiempo de espera para confirmar la ubicación en tiempo real")
        break;
      case error.UNKNOWN_ERROR:
        alert("Se presento un error desconocido")
        break;
    }
  }


  findPlaceResult = (results, status) => {
    var placesTemp=[]
    var placeId = ''
    if (status ===  'OK') {
      results.map((place) => {
        var placePhotos=['']
        const placeTemp = {id:place.place_id, name:place.name,
          address:place.formatted_address,photos:placePhotos}
          placeId = place.place_id;
        placesTemp.push(<Place placeData={placeTemp}/>);
      })
    }
    if (placesTemp.length>0)
      this.findPlaceDetail(placeId);
    else{
      const placeTemp = {id:'N/A', name:<div className='mt-5'><strong className='text-center'>
          No hay resultados</strong></div>,
        address:'',photos:['']}
      placesTemp.push(<Place placeData={placeTemp}/>);
      this.setState({places:placesTemp})
    }
  }

  findPlaceDetail = (placeIdFound) => {
    var request = {
      placeId: placeIdFound,
      fields: ['address_component', 'adr_address', 'formatted_address', "geometry",
       'icon', 'id', 'name', 'business_status', 'photo', 'place_id', 
       'type', 'url', 'vicinity', "opening_hours", "rating", "review", "user_ratings_total"]
    };
    this.service.getDetails(request, this.foundPlaceDetail);
  }

  foundPlaceDetail = (place, status) => {
    if (status === 'OK'){
      //llena array de fotos
      var placePhotos=['']
      if (place.photos){
        place.photos.map((placePhoto, index) => {
          placePhotos[index]=placePhoto.getUrl()
        })
      }
      //Array de info de horario
      var placeHoras=['']
      if (place.opening_hours){
        place.opening_hours.weekday_text.map((placeDay, index) => {
          placeHoras[index]=placeDay
        })
      }

      //Array de reviews 
      var placeReviews=['']
      if (place.reviews){
        place.reviews.map((placeReview, index) => {
          placeReviews[index]=placeReview
        })
      }

      //array con ubicacion
      var placeLocation={lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()}
      

      //crea objeto a pasar al componente Place
      const placeTemp = {id:place.place_id, name:place.name,
        address:place.formatted_address,photos:placePhotos, rating: place.rating, horas:placeHoras, reviews: placeReviews, location: placeLocation}
      const placesTemp = <Place placeData={placeTemp} parentCallback = {this.handleCallback}/>;
      this.setState({places:placesTemp})

      //aqui llamo al mapa
      const mapCenter = new this.google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
      this.showMap(mapCenter, "DRIVING");
    }
  }

  render() {
    return (
      <div className="App" >
        <div id='gmapContainer'></div>
        <div className='container border rounded p-3 mt-4'>
          <div className='row'>
            <div className='col-4'></div>
            <div className='col text-center'>
              <h1>Peseando Ando</h1>
            </div>
            <div className='col-4'></div>
          </div>
          <div className='row'>
            <div className='col-4'></div>
            <div className='col'>
            <div className="mb-3">
            <label htmlFor="origen" className="form-label">Ingresa el nombre de tu destino</label>
              <input type="text" className="form-control" id="origen" placeholder="Ej: Plaza de Bolivar"></input>
            </div>
            </div>
            <div className='col-4'></div>
          </div>
          <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 text-center'>
              <div className="d-grid gap-2">
                <div className='btn btn-primary text-center' onClick={this.manejoOnClick}>Buscar Lugar</div>
              </div>
            </div>
            <div className='col-4'></div>
          </div>
          {this.state.places}
        </div>
      </div>
    );
  }
}

export default App;
