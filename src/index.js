const contentHolder = document.querySelector("#content");

function background() {
    const body = document.querySelector("body");
    body.style["font-family"] = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    body.style["box-sizing"] = "border-box";
    body.style.margin = 0;
    
    contentHolder.style["background-image"] = 'url("../images/restaurant-front.jpg")';
    contentHolder.style["background-color"] = "rgb(14, 28, 58)";
    contentHolder.style["background-position"] = "center";
    contentHolder.style["background-size"] = "cover";
    contentHolder.style.height = "100vh";

}


function navigationBar() {
    const navBar = document.createElement("section");
    navBar.style.color = "white";
    navBar.style["border-bottom"] = "solid 2px rgb(172, 145, 96)";
    navBar.style.display = "inline-flex";
    navBar.style["justify-content"] = "center";
    navBar.style.padding = "20px 0";
    navBar.style.position = "fixed";
    navBar.style.width = "100%";
    
    const homeLink = document.createElement("p");
    homeLink.textContent = "HOME";
    homeLink.style["padding-right"] = "50px";

    const menuLink = document.createElement("p");
    menuLink.textContent = "MENU";
    menuLink.style["padding-right"] = "50px";

    const aboutLink = document.createElement("p");
    aboutLink.textContent = "ABOUT";

    // add event listeners on each link

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(aboutLink);
    contentHolder.appendChild(navBar);
}


function footer() { 
    const footerBar = document.createElement("section");
    footerBar.style.color = "rgb(172, 145, 96)";
    footerBar.style.bottom = "0";
    footerBar.style["border-top"] = "solid 2px rgb(172, 145, 96)";
    footerBar.style.display = "inline-flex";
    footerBar.style["justify-content"] = "center";
    footerBar.style.padding = "20px 0";
    footerBar.style.position = "absolute";
    footerBar.style.width = "100%";

    const footerContent = document.createElement("p");
    footerContent.textContent = "Made by Harj";

    footerBar.appendChild(footerContent);
    contentHolder.appendChild(footerBar);
}



function homeContent() {
    // welcome copy
    const homeContainer = document.createElement("section");
    homeContainer.style.color = "rgb(172, 145, 96)";
    homeContainer.style.display = "block";
    homeContainer.style["text-content"] = "center";
    homeContainer.style.padding = "20px 0";
    homeContainer.style.width = "100%";

    const header = document.createElement("h1");
    header.textContent = "Café Nuvo";

    const tagline = document.createElement("p");
    tagline.style.color = "white";
    tagline.textContent = "Continental Pâtisserie";

    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";

    homeContainer.appendChild(header);
    homeContainer.appendChild(tagline);
    homeContainer.appendChild(menuButton);

    contentHolder.appendChild(homeContainer);
    // menu link
}



background();
navigationBar();
homeContent();
footer();