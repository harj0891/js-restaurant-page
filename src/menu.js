function menuContent() {
    const contentHolder = document.querySelector("#content");
    const homeContainer = document.createElement("section");
    homeContainer.setAttribute("class","center menu-content");

    const header = document.createElement("h1");
    header.textContent = "Café Nuvo";
    header.setAttribute("class","cafe-name");

    const subheader = document.createElement("p");
    subheader.textContent = "Menu";
    subheader.setAttribute("class","cafe-subheader");

    const menuParagraphFirst = document.createElement("p");
    menuParagraphFirst.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus. Mattis nunc sed blandit libero volutpat sed cras ornare. Id eu nisl nunc mi ipsum faucibus. Egestas egestas fringilla phasellus faucibus scelerisque. Cursus mattis molestie a iaculis. Morbi tincidunt augue interdum velit euismod. Imperdiet dui accumsan sit amet nulla facilisi. Congue eu consequat ac felis donec et. Mauris pharetra et ultrices neque ornare. Duis ut diam quam nulla porttitor massa."; 
    menuParagraphFirst.setAttribute("class","about-paragraph");
    


    homeContainer.appendChild(header);
    homeContainer.appendChild(subheader)
    homeContainer.appendChild(menuParagraphFirst);
    contentHolder.appendChild(homeContainer);
}

export {menuContent};