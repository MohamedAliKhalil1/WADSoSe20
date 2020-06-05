export class PageControl{
    constructor() {
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
        // alert("show Main is called!");
        this.disableAllPages();  
        document.getElementById('loginContent').style.display = 'block';
        
    }

    
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
    
}); 

document.getElementById("updateAddressLink").addEventListener("click", function(){
    pageControl.showUpdateAddressesContent();
    
}); 

document.getElementById("loginLink").addEventListener("click", function(){
    pageControl.showLoginContent();
    
}); 

