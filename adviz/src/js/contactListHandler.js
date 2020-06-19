import { PageControl } from "./pagecontrol.js";
// import { mapHandler } from "./map.js";
import {mapHandler} from './map.js';
export class ContactListHandler{
    constructor() {
        // alert( title );
    }

    showUser(){
        // let jsonObject = [
        //     {
        //         "firstname":  "Mohamed",
        //         "lastname":   "Ali",
        //         "street":     "Spandauer Str. 123",
        //         "zipcode":    "13874",
        //         "city":       "Berlin",
        //         "country":    "Germany",
        //         "privateContact":    "false",
        //         "avatar":     "img/avatar/avatar-5.png"
        //     },
        //     {
        //         "firstname":  "Aiman",
        //         "lastname":   "Abdou",
        //         "street":     "Spandauer Str. 123",
        //         "zipcode":    "13874",
        //         "city":       "Berlin",
        //         "country":    "Germany",
        //         "privateContact":    "false",
        //         "avatar":     "img/avatar/avatar-1.png"
        //     }
        // ];

        let jsonArrayObject = jsonContacts[1];
        let contact = new Contact(jsonArrayObject.firstname, jsonArrayObject.lastname, jsonArrayObject.street, jsonArrayObject.zipcode, jsonArrayObject.city, jsonArrayObject.country, jsonArrayObject.privateContact, jsonArrayObject.avatar);
        
        // contact.showUser();

    }

    // fillContactList(){
        
    //     let pc = new PageControl();
    //     // alert("Fill: " + pc.getCookie("accounttype")); 
    //     let accounttype = pc.getCookie("accounttype");
        
    //     let i;
    //     for (i = 0; i < jsonContacts.length; i++){
    //         let jsonArrayObject = jsonContacts[i];
    //         // alert("Fill: " + pc.getCookie("accounttype")); 
    //         if(!(accounttype === "admin") && (jsonArrayObject.privateContact === "true")){
    //             continue; 
    //         }
    //         let contactTest = new Contact(jsonArrayObject.id, jsonArrayObject.firstname, jsonArrayObject.lastname, jsonArrayObject.street, jsonArrayObject.zipcode, jsonArrayObject.city, jsonArrayObject.country, jsonArrayObject.privateContact, jsonArrayObject.avatar);
    //         document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement();
            
    //     }  
    // }

    fillContactList(){
        if(this.checkJSonArrayIsInStorage()){
            this.initJSONStorage();
        }
        let jsonArray = localStorage.getItem("ContactJSONArray");
        let jsonArrayList = JSON.parse(jsonArray);
        let pc = new PageControl();
        let mapObject = new mapHandler();
        // alert("Fill: " + pc.getCookie("accounttype")); 
        let accounttype = pc.getCookie("accounttype");
        mapObject.initMap();
        document.getElementById("contactListContainer").innerHTML = "";
        let i;
        for (i = 0; i < jsonArrayList.length; i++){
            let jsonArrayObject = jsonArrayList[i];
            // alert("Fill: " + pc.getCookie("accounttype")); 

            if(!(accounttype == "admin") && (jsonArrayObject.privateContact == true)){
                continue; 
            }

            let contactTest = new Contact(jsonArrayObject.id, jsonArrayObject.firstname, jsonArrayObject.lastname, jsonArrayObject.street, jsonArrayObject.zipcode, jsonArrayObject.city, jsonArrayObject.country, jsonArrayObject.privateContact, jsonArrayObject.avatar);
            
            // mapObject.codeAddress("Wilmersdorfer");
            mapObject.codeAddress(jsonArrayObject.street + " " + jsonArrayObject.zipcode + " " + jsonArrayObject.city);
            document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement();
            
        }  
    }

    initJSONStorage(){
        let emtpyJSONArray = []; 
        
        localStorage.setItem("ContactJSONArray", JSON.stringify(emtpyJSONArray));
    }

    addContactToStorage(contact){
        if(this.checkJSonArrayIsInStorage()){
            this.initJSONStorage();
        }
        
        let jsonArray = localStorage.getItem("ContactJSONArray");
        let jsonArrayList = JSON.parse(jsonArray);
        contact.id = this.getHighestIDNumberFromArray(jsonArrayList);
        
        let contactJSON = contact.getJSON();
        
        jsonArrayList.push(contactJSON);

        localStorage.setItem("ContactJSONArray", JSON.stringify(jsonArrayList));
        // let JSON
    }

    checkJSonArrayIsInStorage(){
        let jsonArray = localStorage.getItem("ContactJSONArray");
        if(jsonArray === null){
            return true; 
        }else{
            return false; 
        }
        // return boolean
    }

    getContactFromStorage(position){
        let jsonArray = localStorage.getItem("ContactJSONArray");
        let newContact = JSONToContact(jsonArray[position]);

        return newContact;
    }

    JSONToContact(jsonContact){

        let newContact = new Contact(jsonContact.id, jsonContact.firstname, jsonContact.lastname, jsonContact.street, jsonContact.zipcode, jsonContact.city, jsonContact.country, jsonContact.privateContact, jsonContact.avatar);
        
        return newContact;
    }

    getHighestIDNumberFromArray(contactArray){
        let i;
        let result = 0;

        for(i = 0; i < contactArray.length; i++){
            
            
            if(contactArray[i].id > result){
                result = contactArray[i].id; 
            }
        }

        if(result >= 0){
            result++; 
        }

        return result; 
    }

    getContactByID(id){
        if(this.checkJSonArrayIsInStorage()){
            this.initJSONStorage();
            return null; 
        }

        let jsonArray = localStorage.getItem("ContactJSONArray");
        let jsonArrayList = JSON.parse(jsonArray);

        let i;

        for(i = 0; i < jsonArrayList.length; i++){
            
            // alert(jsonArrayList[i].id + '=?' + id);
            if(jsonArrayList[i].id == id){ 
                let newContact = new Contact(jsonArrayList[i].id, jsonArrayList[i].firstname, jsonArrayList[i].lastname, jsonArrayList[i].street, jsonArrayList[i].zipcode, jsonArrayList[i].city, jsonArrayList[i].country, jsonArrayList[i].privateContact, jsonArrayList[i].avatar);
                return  newContact; 
            }
        }

        return null; 
    }

    // fillContactList(userObject){
        
    //     // userObject.accounttype
    //     if( userObject !== null){

            
    //             // userObject.showUser();
    //             let i;

    //             for (i = 0; i < jsonContacts.length; i++){
    //                 let jsonArrayObject = jsonContacts[i];
    //                 if(!(userObject.accounttype === "admin") && (jsonArrayObject.privateContact === "true")){
    //                     continue; 
    //                 }
    //                 let contactTest = new Contact(jsonArrayObject.id, jsonArrayObject.firstname, jsonArrayObject.lastname, jsonArrayObject.street, jsonArrayObject.zipcode, jsonArrayObject.city, jsonArrayObject.country, jsonArrayObject.privateContact, jsonArrayObject.avatar);
    //                 document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement();
                    
    //             }
            
            


    //     }else{
    //         alert("Object Is NULL! ");
    //     }
        
    // }

}

export class Contact{
    
    constructor(id, firstname, lastname, street, zipcode, city, country, privateContact, avatar) {
        // alert( title );
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.street = street; 
        this.zipcode = zipcode;
        this.city = city;
        this.country = country;
        this.privateContact = privateContact;
        this.avatar = avatar;     

    }

    showUser(){
              

        alert(
            this.id + '\n' +
            this.firstname + '\n' + 
            this.lastname + '\n' + 
            this.street + '\n' + 
            this.zipcode + '\n' + 
            this.city + '\n' + 
            this.country + '\n' + 
            this.privateContact + '\n' +  
            this.avatar + '\n'
            );
    }

    getHTMLElement(){
        let pContactBox = ""
        if(this.privateContact == false ){
            pContactBox = ""
        }else{
            pContactBox = "(Private)";
        }

        let userElementContainerHTML =          
        '<div id="' + this.id + '" class="userElementContainer">'+ 
        '   <div id="' + this.id + '" class="marginContainer">'+
        '       <div id="' + this.id + '" class="pictureContainer">'+
        '           <img id="' + this.id + '" class="roundCornerPicture" src="' + this.avatar + '" alt="avatar" >'+
        '       </div>'+
        '       <div id="' + this.id + '" class="userTextContainer">'+
        '           <div id="' + this.id + '" class="userNameContainer">'+
                        pContactBox  + " " + this.firstname + ' ' + this.lastname +
        '           </div>'+
        '           <div id="' + this.id + '" class="userAddressContainer">'+
        this.street + ' - ' + this.zipcode + ' ' + this.city + ' - ' + this.country + 
        '           </div>'+
        '       </div>'+
        '   </div>'+
        '</div>';
        
        return userElementContainerHTML; 
    }

    getJSON(){
            
        let jsonObject = {
            "id":         this.id,
            "firstname":  this.firstname,
            "lastname":   this.lastname,
            "street":     this.street,
            "zipcode":    this.zipcode,
            "city":       this.city,
            "country":    this.country,
            "privateContact":    this.privateContact,
            "avatar":     this.avatar
        }; 

         return jsonObject;
    }



}


let jsonContacts = [
    {
        "id":         "0",
        "firstname":  "Mohamed",
        "lastname":   "Ali",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "true",
        "avatar":     "img/avatar/avatar.png"
    },
    {
        "id":         "1",
        "firstname":  "Aiman",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "true",
        "avatar":     "img/avatar/avatar-1.png"
    },
    {
        "id":         "2",
        "firstname":  "X",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-2.png"
    },
    {   
        "id":         "3",
        "firstname":  "Y",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-3.png"
    },
    {   
        "id":         "4",
        "firstname":  "Z",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-4.png"
    },
    {
        "id":         "5",
        "firstname":  "G",
        "lastname":   "Abdou",
        "street":     "Spandauer Str. 123",
        "zipcode":    "13874",
        "city":       "Berlin",
        "country":    "Germany",
        "privateContact":    "false",
        "avatar":     "img/avatar/avatar-5.png"
    }
];