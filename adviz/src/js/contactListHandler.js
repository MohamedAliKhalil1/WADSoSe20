export class ContactListHandler{
    constructor() {
        // alert( title );
    }

    showUser(){
        let jsonObject = [
            {
                "firstname":  "Mohamed",
                "lastname":   "Ali",
                "street":     "Spandauer Str. 123",
                "zipcode":    "13874",
                "city":       "Berlin",
                "country":    "Germany",
                "privateContact":    "false",
                "avatar":     "img/avatar/avatar-5.png"
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
            }
        ];

        let jsonArrayObejt = jsonObject[1];
        let contactTest = new Contact(jsonArrayObejt.firstname, jsonArrayObejt.lastname, jsonArrayObejt.street, jsonArrayObejt.zipcode, jsonArrayObejt.city, jsonArrayObejt.country, jsonArrayObejt.privateContact, jsonArrayObejt.avatar)
        
        contactTest.showUser();

    }

}

export class Contact{
    
    constructor(firstname, lastname, street, zipcode, city, country, privateContact, avatar) {
        // alert( title );
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
