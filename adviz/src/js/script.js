//Main Java File
import {PageControl} from './pagecontrol.js';
import {ContactListHandler, Contact} from './contactListHandler.js';
import {UserListHandler, User} from './userListHandler.js';


document.getElementById('addNewAddressLink').style.display = 'none';
let pc = new PageControl();
let clh = new ContactListHandler();
let contact0 = new Contact(0, "A", "B", "street", "zipcode", "city", "country", true, "img/avatar/avatar-1.png");
let contact1 = new Contact(0, "C", "D", "street", "zipcode", "city", "country", false, "img/avatar/avatar-2.png");
let contact2 = new Contact(0, "E", "F", "street", "zipcode", "city", "country", true, "img/avatar/avatar-3.png");

pc.showLoginPageAfterCheck();

// alert(jsonArray);
clh.initJSONStorage();
clh.addContactToStorage(contact0);
clh.addContactToStorage(contact1);
clh.addContactToStorage(contact2);
let jsonArray = localStorage.getItem("ContactJSONArray");

alert(jsonArray);

        // if(jsonArray !== null){
        //     alert("Not available"); 
        // }else{
        //     alert("List available");
        // }


document.getElementById("login_form_button").addEventListener("click", 
    function(){

        // document.getElementsByName("login_form_button")[0].type = "button";
        let userAccountControll = new UserListHandler();

        userAccountControll.checkUserCredentials();
    }
);

document.getElementById("green_add_button").addEventListener("click", 
    function(){

        // // document.getElementsByName("login_form_button")[0].type = "button";
        // let userAccountControll = new UserListHandler();

        // userAccountControll.checkUserCredentials();
        let firstname = document.getElementById("add_new_user_form_field_firstname").value;
        let lastname = document.getElementById("add_new_user_form_field_lastname").value;
        let street = document.getElementById("add_new_user_form_field_street").value;
        let zipcode = document.getElementById("add_new_user_form_field_zipcode").value;
        let city = document.getElementById("add_new_user_form_field_city").value;
        let country = document.getElementById("add_new_user_form_field_country").value;
        let privateContact = document.getElementById("add_new_user_form_field_private").checked;
        
        let newContact = new Contact(0, firstname, lastname, street, zipcode, city, country, privateContact, "img/avatar/avatar-1.png");
        newContact.showUser();
        
        //alert(firstname + ' ' + lastname + ' ' +street + ' ' + zipcode + ' ' + city + ' ' + country + ' : '+privateContact);

    }
);



