import {PageControl} from './pagecontrol.js';

export class UserListHandler{
    constructor() {
        // alert( title );
    }

    checkUserCredentials(){
        
        let username = document.getElementById("username_field").value;
        let password = document.getElementById("password_field").value;

        let correctUser = false;
        let user = null;
        let pageControl = new PageControl();
        
        for (let i = 0; i < users.length; i++){
            let jsonArrayUsers = users[i];
            
        
            if((username === jsonArrayUsers.username) && (password === jsonArrayUsers.password)){
                // alert("Login correct. ");
                correctUser = true;
                user = new User(jsonArrayUsers.id, jsonArrayUsers.username, jsonArrayUsers.password, jsonArrayUsers.accounttype, jsonArrayUsers.firstname, jsonArrayUsers.lastname); 
                // user.showUser();
                // alert("Cookie: " + document.cookie); 
                user.createCookie();
                // user.showUser();
                // alert("Cookie: " + pageControl.getCookie("username")); 
                // alert("Cookie: " + document.cookie); 
                break;
            }else {
                correctUser = false; 
                // alert("Incorrect! ");
            }
        
            
        }

        if(correctUser){
            
            pageControl.showMainContent();
            pageControl.jumpToAnchor("mainContent");
            document.getElementById("err_msg").style.display = "none";
            // document.getElementById("MapContactsContainer").style.display = "block";
            document.cookie = "wrongpw=false;"; 
        }else{
            document.cookie = "wrongpw=true;"; 
            // Wrong Password text. id=err_msg
            document.getElementById("err_msg").style.display = "block";
            // document.getElementById("MapContactsContainer").style.display = "none";
        }

        return user; 
    }

    

    deleteCookie(){
        // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "id=;"; 
        document.cookie = "username=;"; 
        document.cookie = "accounttype=;"; 
    }

}

export class User{

    constructor(id, username, password, accounttype, firstname, lastname){
        this.id = id;
        this.username = username;
        this.password = password;
        this.accounttype = accounttype;
        this.firstname = firstname;
        this.lastname = lastname; 
        
        // this.avatar = avatar; 
    }

    showUser(){
              

        alert(
            this.id + '\n' +
            this.username  + '\n' +
            this.password  + '\n' +
            this.accounttype  + '\n' +
            this.firstname  + '\n' +
            this.lastname  + '\n' +
            this.litxt  + '\n' +
            this.lotxt  + '\n' 
            // this.avatar  + '\n' 
            );
    }

    createCookie(){
        // document.cookie = "id=" + this.id + "; username=" + this.username + "; accounttype=" + this.accounttype + ";"; 
        // alert("X:                          " + this.accounttype);
        // this.deleteCookie();

        // document.cookie = "username=" + this.username + "; accounttype=" + this.accounttype + "; SameSite=lax; Secure";
        document.cookie = "id=" + this.id + ";"; 
        document.cookie = "username=" + this.username + ";"; 
        document.cookie = "accounttype=" + this.accounttype + ";"; 
        document.cookie = "firstname=" + this.firstname + ";"; 
        document.cookie = "lastname=" + this.lastname + ";"; 
        document.cookie = "logintext=" + 'true' + ";"; 
        document.cookie = "logouttext=" + 'true' + ";"; 
        
    }

    deleteCookie(){
        // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "id=;"; 
        document.cookie = "username=;"; 
        document.cookie = "accounttype=;";
        document.cookie = "firstname=;"; 
        document.cookie = "lastname=;"; 
        document.cookie = "logintext=true;"; 
        document.cookie = "logouttext=true;"; 
    }
    
    
    

    
  
}

let users = [ 
    {
        "id":         "0",
        "username": "admin",
        "password": "abcde",
        "accounttype": "admin",
        "firstname": "John",
        "lastname": "Doe"
    },
    {
        "id":         "2",
        "username": "aiman",
        "password": "abcde",
        "accounttype": "standard",
        "firstname": "Aiman",
        "lastname": "Abdou"
    },
    {
        "id":         "3",
        "username": "mohamed",
        "password": "abcde",
        "accounttype": "standard",
        "firstname": "Mohamed",
        "lastname": "Ali"
    },
    {
        "id":         "1",
        "username": "normalo",
        "password": "abcde",
        "accounttype": "standard",
        "firstname": "Jane",
        "lastname": "Doe"
    }

    ];