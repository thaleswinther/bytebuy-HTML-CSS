function initMap() {
  const departamentoComputacaoUFSCar = { lat: -21.9838, lng: -47.8836 }; 
  
  const map = new google.maps.Map(document.getElementById('map'), {
    center: departamentoComputacaoUFSCar,
    zoom: 15
  });
  
  const marker = new google.maps.Marker({
    position: departamentoComputacaoUFSCar,
    map: map,
    title: 'Departamento de Computação - UFSCar' 
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const circleIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'blue', 
        fillOpacity: 0.6,
        strokeWeight: 0,
        scale: 10 
      };

      const userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Your location',
        icon: circleIcon
      });
    }, function() {
      handleLocationError(true, map.getCenter());
    });
  } else {
    handleLocationError(false, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, pos) {
  alert(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
  