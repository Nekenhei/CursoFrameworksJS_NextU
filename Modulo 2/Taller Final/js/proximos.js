var eventosFuturos = []

$(function(){

  //Abriendo JSON
    $.ajax({
      url: "info.json"
    }).done(function(respuesta) {

      eventosList = respuesta.eventos
      fechaActual = respuesta.fechaActual

      //filtrado de eventos por fecha
      for (let i = 0; i < eventosList.length; i++) {
        if(eventosList[i].fecha > fechaActual)
          eventosFuturos.push(eventosList[i])
      }

      //ordenado de eventos por fecha
      eventosFuturos = eventosFuturos.sort(function(x,y){
        if(x.fecha < y.fecha){
          return 1
        }else{
          return -1
        }
      })

      imprimirEventos(eventosFuturos)
      
    });

function imprimirEventos(eventos) {
  html=""

  for (let i = 0; i < eventos.length; i++) {
    var nuevaFila = "<tr><th>"+ eventos[i].id +"</th>"+
    "<td>"+ eventos[i].nombre +"</td>"+
    "<td>"+ eventos[i].fecha +"</td>"+
    "<td>"+ eventos[i].descripcion +"</td>"+
    "<td>"+ eventos[i].lugar +"</td>"+
    "<td>"+ eventos[i].invitados +"</td>"+
    "<td>"+ eventos[i].precio +"</td>"+  
    "</tr>"

    html += nuevaFila
    $("#tablaEventos").append(nuevaFila)
    
  }
  
}


})
