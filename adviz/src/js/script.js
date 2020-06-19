//Main Java File
import {PageControl} from './pagecontrol.js';
import {ContactListHandler, Contact} from './contactListHandler.js';
import {UserListHandler, User} from './userListHandler.js';
import {mapHandler} from './map.js';


let pc = new PageControl();
let clh = new ContactListHandler();
let mapObject = new mapHandler();


if(pc.getCookie("wrongpw") == "true"){
    document.getElementById("err_msg").style.display = "block";
}else{
    document.getElementById("err_msg").style.display = "none";
}
document.getElementById('addNewAddressLink').style.display = 'none';

let contact0 = new Contact(1, "Aiman", "Abdou", "Wilmersdorfer str. 123", "10627 ", "Berlin", "Germany", true, "img/avatar/avatar-6.png");
let contact1 = new Contact(2, "Mohamed", "Ali", "Kurfürstendamm 12", "10719", "Berlin", "Germany", false, "img/avatar/avatar-4.png");
let contact2 = new Contact(3, "John", "Doe", "Spandauer Str. 123", "10178", "Berlin", "Germany", true, "img/avatar/avatar-7.png");

pc.showLoginPageAfterCheck();

// alert(jsonArray);
// clh.initJSONStorage();
// clh.addContactToStorage(contact0);
// clh.addContactToStorage(contact1);
// clh.addContactToStorage(contact2);
let jsonArray = localStorage.getItem("ContactJSONArray");

// alert(jsonArray);

        // if(jsonArray !== null){
        //     alert("Not available"); 
        // }else{
        //     alert("List available");
        // }


document.getElementById("login_form_button").addEventListener("click", 
    function(){

        let ulh = new UserListHandler();

        // if(ulh.checkUserCredentials() == null){
        //     // document.getElementById("update_user_form_field_id").disabled = true;
        //     // document.getElementById("update_user_form_field_firstname").disabled = false;
        //     // document.getElementById("update_user_form_field_lastname").disabled = false;
        //     // document.getElementById("update_user_form_field_street").disabled = false;
        //     // document.getElementById("update_user_form_field_zipcode").disabled = false;
        //     // document.getElementById("update_user_form_field_city").disabled = false;
        //     // document.getElementById("update_user_form_field_country").disabled = false;
        //     // document.getElementById("update_user_form_field_private").disabled = false;
            
        //     // document.getElementById("change_button").style.display = "block";
        //     // document.getElementById("delete_button").style.display = "block";
        //     alert("wrong");
        // }else{
        //     alert("right");
        //     // document.getElementById("update_user_form_field_id").disabled = true;
        //     // document.getElementById("update_user_form_field_firstname").disabled = true;
        //     // document.getElementById("update_user_form_field_lastname").disabled = true;
        //     // document.getElementById("update_user_form_field_street").disabled = true;
        //     // document.getElementById("update_user_form_field_zipcode").disabled = true;
        //     // document.getElementById("update_user_form_field_city").disabled = true;
        //     // document.getElementById("update_user_form_field_country").disabled = true;
        //     // document.getElementById("update_user_form_field_private").disabled = true;
        //     // document.getElementById("change_button").style.display = "none";
        //     // document.getElementById("delete_button").style.display = "none";
        // }
        ulh.checkUserCredentials();













        // document.getElementsByName("login_form_button")[0].type = "button";
        // let userAccountControll = new UserListHandler();

        
    }
);

document.getElementById("green_add_button").addEventListener("click", 
    function(){

        let mapCheck = new mapHandler();
        mapCheck.initMap();
        let clh = new ContactListHandler();
        let pages = new PageControl();

        // // document.getElementsByName("login_form_button")[0].type = "button";
        // let userAccountControll = new UserListHandler();

        // userAccountControll.checkUserCredentials();
        let firstname = document.getElementById("add_new_user_form_field_firstname").value.trim();
        let lastname = document.getElementById("add_new_user_form_field_lastname").value.trim();
        let street = document.getElementById("add_new_user_form_field_street").value.trim();
        let zipcode = document.getElementById("add_new_user_form_field_zipcode").value.trim();
        let city = document.getElementById("add_new_user_form_field_city").value.trim();
        let country = document.getElementById("add_new_user_form_field_country").value.trim();
        let privateContact = document.getElementById("add_new_user_form_field_private").checked;
        mapCheck.checkAddress(street + " " + zipcode + " "  + city);

        if(
            (firstname !== '') &&
            (lastname !== '') &&
            (street !== '') &&
            (zipcode !== '') &&
            (city !== '') &&
            (country !== '') 
            // mapCheck.checkAddress(street + ", " + zipcode + ", "  + city)
            // && mapCheck.checkAddress(street)
            ){
                // alert(mapCheck.checkAddress(street));
                let newContact = new Contact(0, firstname, lastname, street, zipcode, city, country, privateContact, "img/avatar/avatar-1.png");
                clh.addContactToStorage(newContact);
                // newContact.showUser();
                // history.replaceState(null,null,this.url); 
            }else{
                // if(!mapCheck.checkAddress(street + ", " + zipcode + ", "  + city)){
                //     alert("Please Check your Address: " + street + ", " + zipcode + ", "  + city);
                // }
                if(!mapCheck.checkAddress(street )){
                    alert("Please Check your Address: " + street);
                }
                pages.showAddNewAddressContent();
            }

        
        
        
        
        //alert(firstname + ' ' + lastname + ' ' +street + ' ' + zipcode + ' ' + city + ' ' + country + ' : '+privateContact);

    }
);









    // let geocoder;
    //  let geocoder1;
    //  let map;
    // //   let address = "Wilmersdorfer Str. 123";

    //   function initMap() {
    //     let map = new google.maps.Map(document.getElementById('mapContainer'), {
    //       zoom: 8,
    //       center: {lat: -34.397, lng: 150.644}
    //     });
    //     geocoder = new google.maps.Geocoder();

        

    //     codeAddress(geocoder, map, "Wilmersdorfer Str. 123");
    //     codeAddress(geocoder, map, "Kurfürstendamm 123");
    //     // codeAddress(geocoder, map, "dasdasdasdasdasdasdasdasdasdasdasdasdadasdasdass");
    //   }


    //   function codeAddress(geocoder, map, customAddress) {

    //     geocoder.geocode({'address': customAddress}, function(results, status) {
    //       if (status === 'OK') {
    //         map.setCenter(results[0].geometry.location);
    //         let marker = new google.maps.Marker({
    //           map: map,
    //           position: results[0].geometry.location
    //         });
    //       } else {
    //         alert('Geocode was not successful for the following reason: ' + status);
    //       }
    //     });
    //   }



    // mapObject.initMap();
    // mapObject.codeAddress("Wilmersdorfer Str. 123");
    // mapObject.codeAddress("Treskow Allee. 123");
    // mapObject.codeAddress("Pyramides of Giza");