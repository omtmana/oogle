// Maps will be the main page. This is where it all happens
// in maps you're able to find food and attractions suggestions
// first: you type in the search bar which city you want to go to 
// second: maps will go to that area and already show everything you need to see
   // (if that's how the code works)
// third: There will be a dropdown to be able to filter which one you can see
   // Filter: you can choose between: Food OR Attractions
      // extra would be: filtering based on stats or price

import React from "react";
import { Loader, LoaderOptions } from 'google-maps'

// const options: LoaderOptions = { };
// const loader = new Loader( 'my-api-key' , options)

// const google = await loader.load()
// // const map = new google.maps.Map(document.getElementById('map') , {
// //    center:{lat: -34.397 , lng: 150.644},
// //    zoom: 8,
// // })

let map;



const Maps = () => {
   let map;
   map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
   });
   window.initMap = initMap;
   return(
      <h1>This is the maps page</h1>
   )
}

export default Maps;
