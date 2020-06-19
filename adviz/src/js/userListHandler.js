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
                user = new User(jsonArrayUsers.id, jsonArrayUsers.username, jsonArrayUsers.password, jsonArrayUsers.accounttype); 
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
        }else{
            //Wrong Password text. id=err_msg
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

    constructor(id, username, password, accounttype){
        this.id = id;
        this.username = username;
        this.password = password;
        this.accounttype = accounttype;
        
        // this.avatar = avatar; 
    }

    showUser(){
              

        alert(
            this.id + '\n' +
            this.username  + '\n' +
            this.password  + '\n' +
            this.accounttype  + '\n'
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
        
    }

    deleteCookie(){
        // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "id=;"; 
        document.cookie = "username=;"; 
        document.cookie = "accounttype=;"; 
    }
    
    
    

    
  
}

let users = [ 
    {
        "id":         "0",
        "username": "admin",
        "password": "abcde",
        "accounttype": "admin"
    },
    {
        "id":         "2",
        "username": "aiman",
        "password": "abcde",
        "accounttype": "admin"
    },
    {
        "id":         "3",
        "username": "ABC",
        "password": "abcde",
        "accounttype": "standard"
    },
    {
        "id":         "1",
        "username": "normalo",
        "password": "12345",
        "accounttype": "standard"
    }

    ];