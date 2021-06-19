var menuItems = document.getElementById('menuItems');

function menuToggle(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }else{
        menuItems.style.maxHeight = '0px';
    }
}



