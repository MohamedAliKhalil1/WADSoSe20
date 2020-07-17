

export class mapHandler{
  constructor() {
      // alert( title );
  }

  // let geocoder;
  // let map;
 //   let address = "Wilmersdorfer Str. 123";

   initMap() {
     this.map = new google.maps.Map(document.getElementById('mapContainer'), {
       zoom: 8,
       center: {lat: -34.397, lng: 150.644}
     });
     this.geocoder = new google.maps.Geocoder();

     

    //  codeAddress(geocoder, map, "Wilmersdorfer Str. 123");
    //  codeAddress(geocoder, map, "Kurfürstendamm 123");
    //  this.codeAddress(map, "Wilmersdorfer Str. 123");
    //  this.codeAddress(map, "Kurfürstendamm 123");
     // codeAddress(geocoder, map, "dasdasdasdasdasdasdasdasdasdasdasdasdadasdasdass");
   }

   


   codeAddress(customAddress) {
    let map = this.map; 

     this.geocoder.geocode({'address': customAddress}, function(results, status) {
       if (status === 'OK') {
         map.setCenter(results[0].geometry.location);
         let marker = new google.maps.Marker({
           map: map,
           position: results[0].geometry.location
         });
       } else {
         //Enable to show error
         //alert('Geocode was not successful for the following reason: ' + status);
       }
     });
   }

   checkAddress(customAddress){
    let map = this.map;
    this.geocoder.geocode({'address': customAddress}, function(results, status) {
      if (status === 'OK') {
        // alert("OK");
        return true;
      } else {
        return false; 
      }
    });
    // return false;
   }

}


















































// /**
//  * Adds markers to the map highlighting the locations of the captials of
//  * France, Italy, Germany, Spain and the United Kingdom.
//  *
//  * @param  {H.Map} map      A HERE Map instance within the application
//  */
// function addMarkersToMap(map) {
//     var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
//     map.addObject(parisMarker);

//     var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
//     map.addObject(romeMarker);

//     var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
//     map.addObject(berlinMarker);

//     var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
//     map.addObject(madridMarker);

//     var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
//     map.addObject(londonMarker);
// }

// /**
//  * Boilerplate map initialization code starts below:
//  */

// //Step 1: initialize communication with the platform
// // In your own code, replace variable window.apikey with your own apikey
// var platform = new H.service.Platform({
//   apikey: window.apikey
// });
// var defaultLayers = platform.createDefaultLayers();

// //Step 2: initialize a map - this map is centered over Europe
// var map = new H.Map(document.getElementById('map'),
//   defaultLayers.vector.normal.map,{
//   center: {lat:50, lng:5},
//   zoom: 4,
//   pixelRatio: window.devicePixelRatio || 1
// });
// // add a resize listener to make sure that the map occupies the whole container
// window.addEventListener('resize', () => map.getViewPort().resize());

// //Step 3: make the map interactive
// // MapEvents enables the event system
// // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
// var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// // Create the default UI components
// var ui = H.ui.UI.createDefault(map, defaultLayers);

// // Now use the map as required...
// window.onload = function () {
//   addMarkersToMap(map);
// }
