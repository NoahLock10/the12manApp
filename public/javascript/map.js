function userLocation() {
  // The location of Uluru
  const texas = { lat: 27.2046, lng: 77.4977 };
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