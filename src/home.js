function homeContent() {
    const contentHolder = document.querySelector("#content");
    const homeContainer = document.createElement("section");
    homeContainer.setAttribute("class","center home-content");

    const header = document.createElement("h1");
    header.textContent = "Café Nuvo";
    header.setAttribute("class","cafe-name");

    const subheader = document.createElement("p");
    subheader.textContent = "Patisserie";
    subheader.setAttribute("class","cafe-subheader");

    const tagline = document.createElement("p");
    tagline.textContent = "Lovingly handmade since 2021";
    tagline.setAttribute("class","cafe-tagline");

    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    menuButton.setAttribute("class","button-menu");

    homeContainer.appendChild(header);
    homeContainer.appendChild(subheader)
    homeContainer.appendChild(tagline);
    homeContainer.appendChild(menuButton);
    contentHolder.appendChild(homeContainer);
}

export {homeContent};