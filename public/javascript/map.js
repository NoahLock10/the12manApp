function userLocation() {
    // The location of Uluru
    const texas = { lat: 30.6187, lng: -96.3365 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: texas,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: texas,
      map: map,
    });
  }