//import { globalLocation } from "app";

const userLocation = async () => {
  // The location
  var latit = 32.1432;
  var long = 93.2131;

  try {
    const res = await fetch('/api/coord', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const jsonRes = await res.json();
    const texas = jsonRes;
    //const texas = { lat: 32.1432, lng: 93.2131};
    // The map
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: texas,
    });
    // The marker
    const marker = new google.maps.Marker({
      position: texas,
      map: map,
    });

  } catch (e) {
    console.log(e);
  }


  const texas = globalLocation;
  // The map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: texas,
  });
  // The marker
  const marker = new google.maps.Marker({
    position: texas,
    map: map,
  });
}