//Main Java File
import {PageControl} from './pagecontrol.js';


    document.getElementById("trigram").addEventListener("click", function(){
        let x = document.getElementById("drop_down_click");
        if(x.className === "nav_bar_links"){
            x.className += " responsive";
        } else {
            x.className = "nav_bar_links";
        }
    });

{/* <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Los+Angeles+Hollywood+blvd+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1200" height="600" frameborder="0"></iframe> */}

let street = "Wilmersdorfer Str. 10";
let city = "Berlin";
let zipcode = "10585"; 






// let locationString = "Los+Angeles+Hollywood+blvd";
let locationString = street+"+"+city+"+"+zipcode;
// let locationString = "Los+Angeles+Hollywood+blvd"; 
// document.getElementById("mapContainer").innerHTML = '<iframe class="googleMapIframe" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=480&amp;height=400&amp;hl=en&amp;q=%20' + locationString + '+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1200" height="600" frameborder="0"></iframe>';
document.getElementById("mapContainer").innerHTML = '<iframe class="googleMapIframe" scrolling="no" src="https://maps.google.com/maps?width=480&amp;height=400&amp;hl=en&amp;q=%20' + locationString + '+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0"></iframe>';




let pageControlDebug = new PageControl();
pageControlDebug.showMainContent();

// function showHandler(){
//     document.getElementById('show').style.display = 'block';
//     document.getElementById('addadress-holder').style.display = 'none';
// }

// function addHandler() {
//     document.getElementById('show').style.display = 'none';
//     document.getElementById('addadress-holder').style.display = 'grid';
// }
