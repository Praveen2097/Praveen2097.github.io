var menuItems = document.getElementById('menuItems');

function menuToggle(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }else{
        menuItems.style.maxHeight = '0px';
    }
}


var loginForm = document.getElementById('loginForm');
var regForm = document.getElementById('regForm');
var indicator = document.getElementById('indicator');

function login(){
    loginForm.style.transform = 'translateX(300px)';
    regForm.style.transform = 'translateX(300px)';
    indicator.style.transform = 'translateX(0px)';
}

function register(){
    loginForm.style.transform = 'translateX(0px)';
    regForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
}