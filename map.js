function initMap() {
    const departamentoComputacaoUFSCar = { lat: -21.9838, lng: -47.8836 }; 
  
    const map = new google.maps.Map(document.getElementById('map'), {
      center: departamentoComputacaoUFSCar,
      zoom: 17 
    });
  
    const marker = new google.maps.Marker({
      position: departamentoComputacaoUFSCar,
      map: map,
      title: 'Departamento de Computação - UFSCar' 
    });
  }
  