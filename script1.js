function initMap() {
    var map = L.map('map').setView([0, 0], 2);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    var locationInput = document.getElementById('locationInput');
    var searchControl = L.control.geocoder({
      defaultMarkGeocode: false,
      collapsed: false,
      placeholder: 'Search for a location',
      errorMessage: 'Not found',
      showResultIcons: true
    }).on('markgeocode', function(e) {
      map.setView(e.geocode.center, 15);
    }).addTo(map);
  
    searchControl.setInput(locationInput);
  }
  
  // Show the initial map
  initMap();
  