var eventosPasados = []

$(function(){

  //Abriendo JSON
    $.ajax({
      url: "info.json"
    }).done(function(respuesta) {

      eventosList = respuesta.eventos
      fechaActual = respuesta.fechaActual

      //filtrado de eventos por fecha
      for (let i = 0; i < eventosList.length; i++) {
        if(eventosList[i].fecha <= fechaActual)
          eventosPasados.push(eventosList[i])
      }

      //ordenado de eventos por fecha
      eventosPasados = eventosPasados.sort(function(x,y){
        if(x.fecha < y.fecha){
          return 1
        }else{
          return -1
        }
      })

      imprimirEventos(eventosPasados)
      
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
