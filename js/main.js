var app = new Vue({
  el: '#app',
  data: {
    arrayProducts: [],    
  },
  methods: {
    actionDescription: function(product){
      Swal.fire({
        title: product.nombre,
        text: product.descripcion,
        footer: product.tipo,
        imageUrl: product.imagen,
        imageWidth: '20vw',
      })
    }
  }
})

function getActiveLetter(){
  let letterActive = '';
  if($(".active").text() == 'local_pharmacyPharmacy') letterActive = 'Medicamento';
  if($(".active").text() == 'petsToys') letterActive = 'Juguete';
  return letterActive;
}  

function thenDataStatics(anProducts){
  anProducts.map(product => {
    if(product.tipo == getActiveLetter()) app.arrayProducts.push(product);
  })
}

function main(){
  $(document).ready(function(){
    $('.parallax').parallax();
    $('.datapicker').datepicker();
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({
      hover: true,
      alignment: 'left',
      constrainWidth: false,
      coverTrigger: false,
    });
    $('#submit').click(function(){
      var nameUser = $('#first_name').val();
      var lastNameUser = $('#last_name').val();
      var emailUser = $('#email').val();
      var phone = $('#phone').val();
      var namePet = $('#name_pet').val();
      var agePet = $('#age_pet').val();
      
      if(nameUser == '' || lastNameUser == '' || emailUser == '' || phone == '' || namePet == '' || agePet == ''){
        Swal.fire({
          title: 'WARNING!!!',
          confirmButtonText: 'Confirm',
          timer:10000,
          timerProgressBar: true,
          footer: 'Missing relevant information.',
          imageUrl: 'assets/alertWarning.png',
          imageWidth: '20vw',
          imageAlt: 'alertWarnning',
        })
      }
      else{
        Swal.fire({
          title: 'READY, THANK FOR WRITING TO US!!!',
          confirmButtonText: 'Confirm',
          timer:10000,
          timerProgressBar: true,
          footer: 'Complete, congratulation!!',
          imageUrl: 'assets/alertConfirm.png',
          imageWidth: '20vw',
          imageAlt: 'alertConfirm',
        }).then((result) => {
          if(result.value) {
            location.reload();
          }
        })
      }
    });
    $.ajax({
      url: `https://apipetshop.herokuapp.com/api/articulos`,
      success: function(info){
        thenDataStatics(info.response);
      }
    })
  })
};

main();