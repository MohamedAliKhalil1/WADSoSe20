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











// function showHandler(){
//     document.getElementById('show').style.display = 'block';
//     document.getElementById('addadress-holder').style.display = 'none';
// }

// function addHandler() {
//     document.getElementById('show').style.display = 'none';
//     document.getElementById('addadress-holder').style.display = 'grid';
// }
