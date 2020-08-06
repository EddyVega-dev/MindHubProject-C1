var app = new Vue({
  el: '#app',
  data: {
    elemento1: 0,
  }
})

$(document).ready(function(){
  $('.parallax').parallax();
  $('.datapicker').datepicker();
  $('.dropdown-trigger').dropdown({
    hover: true,
    alignment: 'left',
    constrainWidth: false,
    coverTrigger: false,
  });
  $('.submit').click(function(){
    Swal({
      title: 'holo',
    })
  });
  $.ajax({
    url: `https://apipetshop.herokuapp.com/api/articulos`,
    success: function(info){
      
    }
  })
})