//Main Java File
import {PageControl} from './pagecontrol.js';
import {ContactListHandler, Contact} from './contactListHandler.js';
import {UserListHandler, User} from './userListHandler.js';



// function showLoginPageAfterCheck(){
//     let uname = this.getCookie("username"); 
//     // alert(uname);
//     if(uname === ''){
//         this.showLoginContent();
//     }else{
//         this.showMainContent();
//     }
// }

// showLoginPageAfterCheck();
// let jsonObject = [
//     {
//         "id":         "0",
//         "firstname":  "Mohamed",
//         "lastname":   "Ali",
//         "street":     "Spandauer Str. 123",
//         "zipcode":    "13874",
//         "city":       "Berlin",
//         "country":    "Germany",
//         "privateContact":    "false",
//         "avatar":     "img/avatar/avatar.png"
//     },
//     {
//         "id":         "1",
//         "firstname":  "Aiman",
//         "lastname":   "Abdou",
//         "street":     "Spandauer Str. 123",
//         "zipcode":    "13874",
//         "city":       "Berlin",
//         "country":    "Germany",
//         "privateContact":    "false",
//         "avatar":     "img/avatar/avatar-1.png"
//     },
//     {
//         "id":         "2",
//         "firstname":  "Aiman",
//         "lastname":   "Abdou",
//         "street":     "Spandauer Str. 123",
//         "zipcode":    "13874",
//         "city":       "Berlin",
//         "country":    "Germany",
//         "privateContact":    "false",
//         "avatar":     "img/avatar/avatar-2.png"
//     },
//     {   
//         "id":         "3",
//         "firstname":  "Aiman",
//         "lastname":   "Abdou",
//         "street":     "Spandauer Str. 123",
//         "zipcode":    "13874",
//         "city":       "Berlin",
//         "country":    "Germany",
//         "privateContact":    "false",
//         "avatar":     "img/avatar/avatar-3.png"
//     },
//     {   
//         "id":         "4",
//         "firstname":  "Aiman",
//         "lastname":   "Abdou",
//         "street":     "Spandauer Str. 123",
//         "zipcode":    "13874",
//         "city":       "Berlin",
//         "country":    "Germany",
//         "privateContact":    "false",
//         "avatar":     "img/avatar/avatar-4.png"
//     },
//     {
//         "id":         "5",
//         "firstname":  "Aiman",
//         "lastname":   "Abdou",
//         "street":     "Spandauer Str. 123",
//         "zipcode":    "13874",
//         "city":       "Berlin",
//         "country":    "Germany",
//         "privateContact":    "false",
//         "avatar":     "img/avatar/avatar-5.png"
//     }
// ];

// // let users = [ 
// //     {
// //         "id":         "0",
// //         "username": "admin",
// //         "password": "abcde",
// //         "accounttype": "admin"
// //     },
// //     {
// //         "id":         "1",
// //         "username": "normalo",
// //         "password": "12345",
// //         "accounttype": "standard"
// //     }

// //     ];

// let jsonArrayObejt = jsonObject[0];
// let contactTest = new Contact(jsonArrayObejt.id, jsonArrayObejt.firstname, jsonArrayObejt.lastname, jsonArrayObejt.street, jsonArrayObejt.zipcode, jsonArrayObejt.city, jsonArrayObejt.country, jsonArrayObejt.privateContact, jsonArrayObejt.avatar);
// let userTest = new User(0, "admin", "qwerty", "admin");


// let clh = new ContactListHandler();
// clh.fillContactList(userTest);


// let i;
// let contactList; 
// contactList = contactTest.getHTMLElement(); 

// for (i = 0; i < jsonObject.length; i++){
//     let jsonArrayObejt = jsonObject[i];
//     let contactTest = new Contact(jsonArrayObejt.id, jsonArrayObejt.firstname, jsonArrayObejt.lastname, jsonArrayObejt.street, jsonArrayObejt.zipcode, jsonArrayObejt.city, jsonArrayObejt.country, jsonArrayObejt.privateContact, jsonArrayObejt.avatar)

//     document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement();

// }

// $('#password_field')[0].checkValidity();
document.getElementById("login_form_button").addEventListener("click", 
    function(){

        // document.getElementsByName("login_form_button")[0].type = "button";
        let userAccountControll = new UserListHandler();

        userAccountControll.checkUserCredentials();
    }
);



