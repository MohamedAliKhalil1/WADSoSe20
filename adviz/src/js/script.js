//Main Java File
import {PageControl} from './pagecontrol.js';
import {ContactListHandler, Contact} from './contactListHandler.js';
import {UserListHandler, User} from './userListHandler.js';


let pc = new PageControl();
let clh = new ContactListHandler();


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
        

        if(
            (firstname !== '') &&
            (lastname !== '') &&
            (street !== '') &&
            (zipcode !== '') &&
            (city !== '') &&
            (country !== '')
            ){
                let clh = new ContactListHandler();
                let newContact = new Contact(0, firstname, lastname, street, zipcode, city, country, privateContact, "img/avatar/avatar-1.png");
                clh.addContactToStorage(newContact);
                // newContact.showUser();
                // history.replaceState(null,null,this.url); 
            }
        
        
        
        
        //alert(firstname + ' ' + lastname + ' ' +street + ' ' + zipcode + ' ' + city + ' ' + country + ' : '+privateContact);

    }
);



