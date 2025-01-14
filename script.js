// Inicializar el mapa
function initMap() {
    const center = { lat: 20.2121, lng: -87.4668 }; // Coordenadas aproximadas de Tulum
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: center,
      gestureHandling: "auto", // Manejo de gestos para dispositivos móviles
    });

     // Inicializar el campo de autocompletado
  const autocompleteInput = document.getElementById("autocomplete");
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);

  // Restringir resultados a ubicaciones específicas (opcional)
  autocomplete.setFields(["geometry", "formatted_address"]);

  // Cuando el usuario selecciona una dirección
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      alert("Por favor, selecciona una dirección válida.");
      return;
    }

    // Centrar el mapa en la ubicación seleccionada
    map.setCenter(place.geometry.location);
    map.setZoom(15);

    // Agregar un marcador en la ubicación seleccionada
    new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.formatted_address,
    });

    alert(`Ubicación seleccionada: ${place.formatted_address}`);
  });
  
    // Zona 1
    const zona1Coords = [
      { lat: 20.208, lng: -87.451 }, //arriba derecho
      { lat: 20.220, lng: -87.455 }, //arriba izquierdo
      { lat: 20.209, lng: -87.494 }, //abajo izquierdo
      { lat: 20.199, lng: -87.481 }, //abajo derecho
    ];
  
    const zona1 = new google.maps.Polygon({
      paths: zona1Coords,
      strokeColor: "#FF0000", // Rojo
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
  
    zona1.setMap(map);
  
    zona1.addListener("click", () => {
      alert("Zona 1: Precio $950 / Zone 1: Price $50 USD");
    });
  
    // Zona 2
    const zona2Coords = [
      { lat: 20.201676, lng: -87.448796 }, //arriba derecho
      { lat: 20.207974, lng: -87.451006 }, //arriba izquierdo
      { lat: 20.198976, lng: -87.480989 }, //abajo izquierdo 
      { lat: 20.192380, lng: -87.479276 }, //abajo derecho
    ];
  
    const zona2 = new google.maps.Polygon({
      paths: zona2Coords,
      strokeColor: "#0000FF", // Azul
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0000FF",
      fillOpacity: 0.35,
    });
  
    zona2.setMap(map);
  
    zona2.addListener("click", () => {
      alert("Zona 2: Precio $1,100 / Zone 2: Price $60 USD");
    });
  
    // Zona 3
    const zona3Coords = [
      { lat: 20.177661, lng: -87.456060 }, //arriba derecho
      { lat: 20.196488, lng: -87.465475 }, //arriba izquierdo
      { lat: 20.192365, lng: -87.479270 }, //abajo izquierdo 
      { lat: 20.173033, lng: -87.470361 }, //abajo derecho
    ];
  
    const zona3 = new google.maps.Polygon({
      paths: zona3Coords,
      strokeColor: "#008000", // Verde
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008000",
      fillOpacity: 0.35,
    });
  
    zona3.setMap(map);
  
    zona3.addListener("click", () => {
      alert("Zona 3: Precio $1,300 / Zone 3: Price $70 USD");
    });
  
    // Zona 4
    const zona4Coords = [
      { lat: 20.187088, lng: -87.441839 }, //arriba derecho  
      { lat: 20.188063, lng: -87.443846 }, //arriba izquierdo
      { lat: 20.162805, lng: -87.454819 }, //abajo izquierdo 
      { lat: 20.162631, lng: -87.452927 }, //abajo derecho
      { lat: 20.172948, lng: -87.447962 },
    ];
  
    const zona4 = new google.maps.Polygon({
      paths: zona4Coords,
      strokeColor: "#FFFF00", // Amarillo
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
    });
  
    zona4.setMap(map);
  
    zona4.addListener("click", () => {
      alert("Zona 4: Precio $1,300 / Zone 4: Price $70 USD");
    });

    // Botón de pantalla completa
  document.getElementById("fullscreenBtn").addEventListener("click", () => {
    const mapElement = document.getElementById("map");
    if (mapElement.requestFullscreen) {
      mapElement.requestFullscreen();
    } else if (mapElement.mozRequestFullScreen) {
      mapElement.mozRequestFullScreen();
    } else if (mapElement.webkitRequestFullscreen) {
      mapElement.webkitRequestFullscreen();
    } else if (mapElement.msRequestFullscreen) {
      mapElement.msRequestFullscreen();
    }
  });
  }

  // Registrar el service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        console.log("Service Worker registrado correctamente.");
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  }
  
  
  // Cargar el mapa cuando la página esté lista
  window.onload = initMap;
  