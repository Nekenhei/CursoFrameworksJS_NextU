import React, { Component } from 'react'
import ReactStars from 'react-stars'
import NearbyPlacesComponent from './nearbyPlacesComponent';

export default class Place extends Component {

  constructor(props){
    super(props);
    this.state={
      renderdeldiv: "",
      data: null,
    }
  }

  handleCallbackPlace = (childData) =>{
    //this.setState({data: childData})
    //console.log(childData);
    this.props.parentCallback(childData);
  }

  componentDidMount(){
    const googlePlaceAPILoad = setInterval(() => {
      if (window.google){
        this.google=window.google;
        clearInterval(googlePlaceAPILoad);
        console.log('Load Place API ok');
        const mapCenter = new this.google.maps.LatLng(4.624335,-74.064644);
        this.map = new this.google.maps.Map(document.getElementById('gmapContainer'), {
          center: mapCenter,
          zoom: 15
        });
      };
    },100);
  }

  abrirNearby = (e) => {
    var ubicacion = new this.google.maps.LatLng(this.props.placeData.location.lat,this.props.placeData.location.lng)
    const request = {
      location: ubicacion,
      radius: "500"
    };
    this.service = new this.google.maps.places.PlacesService(this.map);
    this.service.nearbySearch(request, this.lugaresCercanos);
  }

  lugaresCercanos = (places, status) => {
    if (status === 'OK'){
      var nearbyPlaces = [""]

      places.forEach(place => {
        if(place.name){
          nearbyPlaces.push({
            id: place.place_id,
            nombre: place.name,
            ubicacion: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
            calificacion: place.rating,
            fotos: place.photos ? place.photos[0].getUrl() : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
          })
        }
      });
      if(document.getElementById("nearBydiv")){
        document.getElementById("nearBydiv").style.display="block"
      }
      //
      this.setState({renderdeldiv: <NearbyPlacesComponent parentCallback = {this.handleCallbackPlace} data={nearbyPlaces.slice(1,10)}/>})
    }
  }

  render() {
    var cantPhotos = this.props.placeData.photos.length;
    if (cantPhotos > 6)
      cantPhotos = 6;
    else
      cantPhotos = 3;
    const colSize = 4;
    var htmlPhotos=[];
    this.props.placeData.photos.map((photo, index) => {
      htmlPhotos.push(
        <div key={index} className={'col-'+colSize+' text-center'} >
          <img src={photo} alt={this.props.placeData.name} className="imagen"/>
        </div>);
        if (index === (cantPhotos-1)) return
    })
    return (
      <div className="row px-5">
        <div className='row py-2'>
          <div className='col-12 text-center' ><h3>{this.props.placeData.name}</h3></div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className='row py-2'>
              {htmlPhotos.slice(0,3)}
            </div>
            <div className='row py-2'>
              {htmlPhotos.slice(3,6)}
            </div>
          </div>
          <div className="col-4">
            <div className='row' >
              
              <div className='col'>
                <strong>Dirección:</strong> {this.props.placeData.address} <br />
                <strong>Rating</strong>: {this.props.placeData.rating}
                  <ReactStars
                    count={5}
                    value={this.props.placeData.rating}
                    size={24}
                    edit={false}
                    half={true}
                    color2={'#ffd700'} />
                <strong>Horario de atención</strong>: <ul>
                  {this.props.placeData.horas.map(function(dia, id){
                    return (<li key={id}>{dia}</li>)
                  })}
                </ul>
                <strong>Comentarios</strong>: <details>
                  <summary>Ver comentarios</summary>
                  <ul>
                    {this.props.placeData.reviews.map(function(comentario,id){
                      return(<li key={id}>{comentario.author_name}: {comentario.text}</li>)
                    })}
                  </ul>
                </details>
              </div>
              
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col">
            <div className="row">
              <h3>Ubicación</h3>
            </div>
            <div className="row">
              <div className="input-group m-3">
                <label htmlFor="metodo" className="input-group-text">¿Cómo prefieres llegar a tu destino?</label>
                <select className="form-select" aria-label="Default select example" id="metodo">
                  <option value="DRIVING">En Vehiculo</option>
                  <option value="WALKING">Caminando</option>
                  <option value="BICYCLING">Bicicleta</option>
                  <option value="TRANSIT">Transporte publico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-5">
            <div id='map' className='mt-2' ></div>
          </div>
          <div className="row px-5">
            <div className="col-3"></div>
            <div className="col-6 text-center py-2">
              <div className="d-grid gap-2">
                  <div className='btn btn-info  text-center' onClick={this.abrirNearby}>Ver Lugares Cercanos</div>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row px-2">
            {this.state.renderdeldiv}
          </div>
      </div>
    )
  }
}
