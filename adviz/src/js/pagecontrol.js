import {UserListHandler, User} from './userListHandler.js';
import {ContactListHandler, Contact} from './contactListHandler.js';
import {mapHandler} from './map.js';
export class PageControl{
    constructor() {
        this.url = location.href; 
        // this.showLoginPageAfterCheck();
        
        
        // alert( title );
    }
    /**
     * @description Disables all page contents simultaneously. 
     * 
     */



    disableAllPages(){
        document.getElementById('loginContent').style.display = 'none';
        document.getElementById('mainContent').style.display = 'none';
        document.getElementById('updateAddressesContent').style.display = 'none';
        document.getElementById('addNewAddressContent').style.display = 'none'; 
    }

    /**
     * @description Shows the content of the main page. 
     * 
     */
    showMainContent(){
        // alert("show Main is called!");
        this.disableAllPages();  
        document.getElementById('mainContent').style.display = 'block';
        let pageControl = new PageControl();
        // let user = new User(0, "admin", "qwerty", "admin");
        let clh = new ContactListHandler();


        // let x = null; 
        // clh.fillContactList(user);
        clh.fillContactList();

        // let pageControl = new PageControl();

        let username = this.getCookie("username");
        let accounttype = this.getCookie("accounttype"); 
        let firstname = this.getCookie("firstname");
        let lastname = this.getCookie("lastname");

        if(
            (username != '') &&
            (accounttype != '') &&
            (this.getCookie('logintext') === 'true')
        ){
            //alert("Value: "+ this.getCookie('logintext'));
            
            let newAccounttype = accounttype; 
            
            if(accounttype == 'standard'){
                newAccounttype = "nicht-admin";
            }else if (accounttype == 'admin'){
                newAccounttype = "admin";
            }
            alert("Hallo "+ firstname + " " + lastname +", Sie sind als „" +newAccounttype+ "“ eingeloggt.");
            document.cookie = "logintext=" + 'false' + ";"; 
            document.cookie = "logouttext=" + 'true' + ";";
        }
    }

    /**
     * @description Shows the content of the update addresses page. 
     * 
     */
    showUpdateAddressesContent(){
        // alert("show Main is called!");
        this.disableAllPages();  
        document.getElementById('updateAddressesContent').style.display = 'block';
        
    }

    /**
     * @description Shows the content of the add new addresses page. 
     * 
     */
    showAddNewAddressContent(){
        // alert("show Main is called!");
        this.disableAllPages(); 
        document.getElementById('addNewAddressContent').style.display = 'block';
        
    }

    /**
     * @description Shows the content of the login page. 
     * 
     */
    showLoginContent(){
        // alert("show Login is called!");
        this.disableAllPages();  
        document.getElementById('loginContent').style.display = 'block';
        
    }

    jumpToAnchor(h){
        this.url = location.href;               //Save down the URL without hash.
        location.href = "#"+h;                 //Go to the target element.
        // history.replaceState(null,null,url);   //Don't like hashes. Changing it back.

        // document.getElementById("MapContactsContainer").style.display = "block";

        
    }

    resetURL(){
        history.replaceState(null,null,this.url);   //Don't like hashes. Changing it back.
    }


    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      showLoginPageAfterCheck(){
            let uname = this.getCookie("username");
            let accounttype = this.getCookie("accounttype"); 
            // alert(uname);
            if(uname === ''){
                this.showLoginContent();
            }else{
                this.showMainContent();
                
                if(accounttype === "admin"){
                    document.getElementById('addNewAddressLink').style.display = 'block';
                    document.getElementById('green_add_button').style.display = 'block';
                }else{
                    document.getElementById('addNewAddressLink').style.display = 'none';
                    document.getElementById('green_add_button').style.display = 'none';
                }
            }
        }

        adminAccountIsInCookies(){
            let uname = this.getCookie("username");
            let accounttype = this.getCookie("accounttype"); 

            if(accounttype == 'admin'){

                return true; 
            }else{
                return false; 
            }
        }
    // toggleLoginLogoutButton(){
    //     let uname = this.getCookie("username");
    //     let accounttype = this.getCookie("accounttype"); 
    //     let usl = new UserListHandler();

    //     // usl.deleteCookie();
    //     if(!(uname === '') && !(accounttype === '')){
    //         document.getElementById('loginLink').style.backgroundColor = "lawngreen";
    //         document.getElementById('loginLink') = "Text"; 
    //         // this.showMainContent();
    //         // alert(uname + ' '  + accounttype);
    //         // loginLink
    //     }else{
    //         // alert("y");
    //         document.getElementById('loginLink').style.backgroundColor = "#ff3737";
    //         document.getElementById('loginLink').innerHTML = "Text";
    //         // document.getElementById("loginLink").innerHTML = "New text!";
           
    //         // this.showLoginContent();
    //         // alert(uname + ' '  + accounttype);
            
    //     }
    // }


    // checkContactAdd(){
        
    //     let username = document.getElementById("username_field").value;
    //     let password = document.getElementById("password_field").value;

    //     let correctUser = false;
    //     let user = null;
    //     let pageControl = new PageControl();
        
    //     for (let i = 0; i < users.length; i++){
    //         let jsonArrayUsers = users[i];
            
        
    //         if((username === jsonArrayUsers.username) && (password === jsonArrayUsers.password)){
    //             // alert("Login correct. ");
    //             correctUser = true;
    //             user = new User(jsonArrayUsers.id, jsonArrayUsers.username, jsonArrayUsers.password, jsonArrayUsers.accounttype); 
    //             // user.showUser();
    //             // alert("Cookie: " + document.cookie); 
    //             user.createCookie();
    //             // user.showUser();
    //             // alert("Cookie: " + pageControl.getCookie("username")); 
    //             // alert("Cookie: " + document.cookie); 
    //             break;
    //         }else {
    //             correctUser = false; 
    //             // alert("Incorrect! ");
    //         }
        
            
    //     }

    //     if(correctUser){
    //         pageControl.showMainContent();
    //         pageControl.jumpToAnchor("mainContent");
    //     }else{
    //         //Wrong Password text. id=err_msg
    //     }

    //     return user; 
    // }



}

/**
 * Page Link Listeners
 */
let pageControl = new PageControl();
let userCookie = new User();
document.getElementById("addNewAddressLink").addEventListener("click", function(){
    pageControl.showAddNewAddressContent();
    
    
    
}); 

document.getElementById("mainLink").addEventListener("click", function(){
    pageControl.showMainContent();
    // jumpToAnchor("mainContent");
    // pageControl.showLoginPageAfterCheck();
    
}); 

document.getElementById("updateAddressLink").addEventListener("click", function(){
    pageControl.showUpdateAddressesContent();
    // pageControl.showLoginPageAfterCheck();
}); 
// login_form_button
document.getElementById("loginLink").addEventListener("click", function(){
    let username = pageControl.getCookie("username");
    let accounttype = pageControl.getCookie("accounttype"); 

    

    if(
        (username != '') &&
        (accounttype != '') &&
        (document.getElementById("loginlogouttext").innerHTML === "Logout")
    ){
        userCookie.deleteCookie();
        // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // document.cookie = "accounttype=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        //document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        document.getElementById("loginlogouttext").innerHTML = "Login";
        // document.getElementById("err_msg").style.color = "red";
        
        location.reload(); 

        
    }

    pageControl.showLoginContent();
    
    // pageControl.toggleLoginLogoutButton();
    // pageControl.showLoginPageAfterCheck();
}); 

//click on list
document.getElementById("contactListContainer").addEventListener("click", function(e){
    // alert( e.target.id );
    let clh = new ContactListHandler();
    let pc = new PageControl();


    // alert(e.target.id); 
    let contact = clh.getContactByID(e.target.id); 
    // alert(contact.firstname); 
    pageControl.showUpdateAddressesContent();

    // document.getElementById("myText").disabled = true;

    if(pc.adminAccountIsInCookies()){
        document.getElementById("update_user_form_field_id").disabled = true;
        document.getElementById("update_user_form_field_firstname").disabled = false;
        document.getElementById("update_user_form_field_lastname").disabled = false;
        document.getElementById("update_user_form_field_street").disabled = false;
        document.getElementById("update_user_form_field_zipcode").disabled = false;
        document.getElementById("update_user_form_field_city").disabled = false;
        document.getElementById("update_user_form_field_country").disabled = false;
        document.getElementById("update_user_form_field_private").disabled = false;
        
        document.getElementById("change_button").style.display = "block";
        document.getElementById("delete_button").style.display = "block";

    }else{
        document.getElementById("update_user_form_field_id").disabled = true;
        document.getElementById("update_user_form_field_firstname").disabled = true;
        document.getElementById("update_user_form_field_lastname").disabled = true;
        document.getElementById("update_user_form_field_street").disabled = true;
        document.getElementById("update_user_form_field_zipcode").disabled = true;
        document.getElementById("update_user_form_field_city").disabled = true;
        document.getElementById("update_user_form_field_country").disabled = true;
        document.getElementById("update_user_form_field_private").disabled = true;
        document.getElementById("change_button").style.display = "none";
        document.getElementById("delete_button").style.display = "none";
    }
    document.getElementById("update_user_form_field_id").value = contact.id;
    document.getElementById("update_user_form_field_firstname").value = contact.firstname;
    document.getElementById("update_user_form_field_lastname").value = contact.lastname;
    document.getElementById("update_user_form_field_street").value = contact.street;
    document.getElementById("update_user_form_field_zipcode").value = contact.zipcode;
    document.getElementById("update_user_form_field_city").value = contact.city;
    document.getElementById("update_user_form_field_country").value = contact.country;
    document.getElementById("update_user_form_field_private").checked = contact.privateContact;

    // if(typeof window.history.pushState == 'function') {
    //     window.history.pushState({}, "Hide", "http://127.0.0.1:5500/adviz/src/");
    // }
    // pageControl.showUpdateAddressesContent();
        
    // pageControl.toggleLoginLogoutButton();
    // pageControl.showLoginPageAfterCheck();
},); 


