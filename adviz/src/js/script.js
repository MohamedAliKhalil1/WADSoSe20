//Main Java File
import {PageControl} from './pagecontrol.js';
import {ContactListHandler, Contact} from './contactListHandler.js';


//     document.getElementById("trigram").addEventListener("click", function(){
//         let x = document.getElementById("drop_down_click");
//         if(x.className === "nav_bar_links"){
//             x.className += " responsive";
//         } else {
//             x.className = "nav_bar_links";
//         }
//     });

// {/* <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Los+Angeles+Hollywood+blvd+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1200" height="600" frameborder="0"></iframe> */}

// let street = "Wilmersdorfer Str. 10";
// let city = "Berlin";
// let zipcode = "10585"; 






// // let locationString = "Los+Angeles+Hollywood+blvd";
// let locationString = street+"+"+city+"+"+zipcode;
// // let locationString = "Los+Angeles+Hollywood+blvd"; 
// // document.getElementById("mapContainer").innerHTML = '<iframe class="googleMapIframe" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=480&amp;height=400&amp;hl=en&amp;q=%20' + locationString + '+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1200" height="600" frameborder="0"></iframe>';
// document.getElementById("mapContainer").innerHTML = '<iframe class="googleMapIframe" scrolling="no" src="https://maps.google.com/maps?width=480&amp;height=400&amp;hl=en&amp;q=%20' + locationString + '+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0"></iframe>';




let pageControlDebug = new PageControl();
pageControlDebug.showMainContent();
let jsonObject = [
    {
        "firstname":  "Mohamed",
        "lastname":   "Ali",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar.png"
    },
    {
        "firstname":  "Aiman",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-1.png"
    },
    {
        "firstname":  "Aiman",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-2.png"
    },
    {
        "firstname":  "Aiman",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-3.png"
    },
    {
        "firstname":  "Aiman",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-4.png"
    },
    {
        "firstname":  "Aiman",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-5.png"
    }
];

let jsonArrayObejt = jsonObject[0];
let contactTest = new Contact(jsonArrayObejt.firstname, jsonArrayObejt.lastname, jsonArrayObejt.street, jsonArrayObejt.zipcode, jsonArrayObejt.city, jsonArrayObejt.country, jsonArrayObejt.privateContact, jsonArrayObejt.avatar)

// contactTest.showUser();

let clh = new ContactListHandler();

// clh.showUser();


// document.getElementById("contactListContainer").innerHTML = contactTest.getHTMLElement(); 

let i;
let contactList; 
contactList = contactTest.getHTMLElement(); 
// document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement(); 

// document.insertAdjacentHTML('contactListContainer', 'additional HTML code');
for (i = 0; i < jsonObject.length; i++) {
    let jsonArrayObejt = jsonObject[i];
    let contactTest = new Contact(jsonArrayObejt.firstname, jsonArrayObejt.lastname, jsonArrayObejt.street, jsonArrayObejt.zipcode, jsonArrayObejt.city, jsonArrayObejt.country, jsonArrayObejt.privateContact, jsonArrayObejt.avatar)

    document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement();

}
// alert(contactList);

// document.getElementById("aiman").innerHTML = contactTest.getHTMLElement(); 
// document.getElementById("divContainer").innerHTML = contactTest.getHTMLElement(); 



// function showHandler(){
//     document.getElementById('show').style.display = 'block';
//     document.getElementById('addadress-holder').style.display = 'none';
// }

// function addHandler() {
//     document.getElementById('show').style.display = 'none';
//     document.getElementById('addadress-holder').style.display = 'grid';
// }

