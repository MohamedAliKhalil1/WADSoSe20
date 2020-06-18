import { PageControl } from "./pagecontrol.js";

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

    fillContactList(){
        
        let pc = new PageControl();
        // alert("Fill: " + pc.getCookie("accounttype")); 
        let accounttype = pc.getCookie("accounttype");
        
        let i;
        for (i = 0; i < jsonContacts.length; i++){
            let jsonArrayObject = jsonContacts[i];
            // alert("Fill: " + pc.getCookie("accounttype")); 
            if(!(accounttype === "admin") && (jsonArrayObject.privateContact === "true")){
                continue; 
            }
            let contactTest = new Contact(jsonArrayObject.id, jsonArrayObject.firstname, jsonArrayObject.lastname, jsonArrayObject.street, jsonArrayObject.zipcode, jsonArrayObject.city, jsonArrayObject.country, jsonArrayObject.privateContact, jsonArrayObject.avatar);
            document.getElementById("contactListContainer").innerHTML +=  contactTest.getHTMLElement();
            
        }  
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
            this.private + '\n' +  
            this.avatar + '\n'
            );
    }

    getHTMLElement(){
        let userElementContainerHTML =          
        '<div class="userElementContainer">'+ 
        '   <div class="marginContainer">'+
        '       <div class="pictureContainer">'+
        '           <img class="roundCornerPicture" src="' + this.avatar + '" alt="avatar" >'+
        '       </div>'+
        '       <div class="userTextContainer">'+
        '           <div class="userNameContainer">'+
                    this.firstname + ' ' + this.lastname +
        '           </div>'+
        '           <div class="userAddressContainer">'+
        this.street + ' - ' + this.zipcode + ' ' + this.city + ' - ' + this.country + 
        '           </div>'+
        '       </div>'+
        '   </div>'+
        '</div>';
        return userElementContainerHTML; 
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