//import { globalLocation } from "app";

async function userLocation (){
  // The location
  try {
    const res = await fetch('/api/coord', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const jsonRes = await res.json();
    console.log(jsonRes);
    //const texas = jsonRes;
    //const texas = {lat: 32.1432, lng: 93.2131};
    // The map
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: jsonRes,
    });
    // The marker
    const marker = new google.maps.Marker({
      position: jsonRes,
      map: map,
    });

  } catch (e) {
    console.log(e);
  }
}