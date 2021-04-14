import * as homepage from "./home.js";
import * as menupage from "./menu.js";
import * as aboutpage from "./about.js";

let DisplayController = (function () {
    const contentHolder = document.querySelector("#content");

    function navbar() {
        const navBar = document.createElement("section");
        navBar.setAttribute("class","nav-bar");
        
        const homeLink = document.createElement("p");
        homeLink.textContent = "HOME";
        homeLink.setAttribute("class","nav nav-home");
        homeLink.addEventListener("click", displayHome);
    
        const menuLink = document.createElement("p");
        menuLink.textContent = "MENU";
        menuLink.setAttribute("class","nav nav-menu");
        menuLink.addEventListener("click", displayMenu);
    
        const aboutLink = document.createElement("p");
        aboutLink.setAttribute("class","nav nav-about");
        aboutLink.textContent = "ABOUT";
        aboutLink.addEventListener("click", displayAbout);
    
        navBar.appendChild(homeLink);
        navBar.appendChild(menuLink);
        navBar.appendChild(aboutLink);
        contentHolder.appendChild(navBar);
    }
    
    function footer() { 
        const footerBar = document.createElement("section");
        footerBar.setAttribute("class","footer");
    
        const footerContent = document.createElement("p");
        footerContent.textContent = "Made by Harj";
    
        footerBar.appendChild(footerContent);
        contentHolder.appendChild(footerBar);
    }

    function displayHome() {
        contentHolder.innerHTML="";
        navbar();
        homepage.homeContent();
        footer();
    }
    
    function displayMenu() {
        contentHolder.innerHTML="";
        navbar();
        menupage.menuContent();
        footer();
    }
    
    function displayAbout() {
        contentHolder.innerHTML="";
        navbar();
        aboutpage.aboutContent();
        footer();
    }

    return {displayHome, displayMenu, displayAbout};
})();

// initalize page on first time visit
(function() {
    DisplayController.displayHome();
})();








