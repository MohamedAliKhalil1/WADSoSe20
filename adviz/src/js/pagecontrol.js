import {UserListHandler, User} from './userListHandler.js';
import {ContactListHandler, Contact} from './contactListHandler.js';
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

        // let user = new User(0, "admin", "qwerty", "admin");
        let clh = new ContactListHandler();


        // let x = null; 
        // clh.fillContactList(user);
        clh.fillContactList();
        
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

    toggleLoginLogoutButton(){
        let uname = this.getCookie("username");
        let accounttype = this.getCookie("accounttype"); 
        let usl = new UserListHandler();

        // usl.deleteCookie();
        if(!(uname === '') && !(accounttype === '')){
            document.getElementById('loginLink').style.color = "#00FF00";
            // this.showMainContent();
            alert("x");
            // loginLink
        }else{
            alert("y");
            document.getElementById('loginLink').style.color = "#00FFFF";
            // this.showLoginContent();
            
        }
    }


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
    pageControl.showLoginContent();
    
    pageControl.toggleLoginLogoutButton();
    // pageControl.showLoginPageAfterCheck();
}); 



