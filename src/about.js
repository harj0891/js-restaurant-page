function aboutContent() {
    const contentHolder = document.querySelector("#content");
    const homeContainer = document.createElement("section");
    homeContainer.setAttribute("class","center about-content");

    const header = document.createElement("h1");
    header.textContent = "Café Nuvo";
    header.setAttribute("class","cafe-name");

    const subheader = document.createElement("p");
    subheader.textContent = "About";
    subheader.setAttribute("class","cafe-subheader");

    const aboutParagraphFirst = document.createElement("p");
    aboutParagraphFirst.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus. Mattis nunc sed blandit libero volutpat sed cras ornare. Id eu nisl nunc mi ipsum faucibus. Egestas egestas fringilla phasellus faucibus scelerisque. Cursus mattis molestie a iaculis. Morbi tincidunt augue interdum velit euismod. Imperdiet dui accumsan sit amet nulla facilisi. Congue eu consequat ac felis donec et. Mauris pharetra et ultrices neque ornare. Duis ut diam quam nulla porttitor massa."; 
    aboutParagraphFirst.setAttribute("class","about-paragraph");
    
    const aboutParagraphSecond = document.createElement("p");
    aboutParagraphSecond.textContent = "Tortor posuere ac ut consequat semper. Donec ultrices tincidunt arcu non sodales neque sodales ut. Euismod lacinia at quis risus sed vulputate odio. Sem et tortor consequat id porta. Enim tortor at auctor urna nunc id cursus. Ultricies integer quis auctor elit sed vulputate mi. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Ipsum a arcu cursus vitae congue mauris. Tristique risus nec feugiat in fermentum posuere. Lacus suspendisse faucibus interdum posuere. Imperdiet dui accumsan sit amet nulla facilisi. Nisl nisi scelerisque eu ultrices vitae. Leo urna molestie at elementum. Tortor condimentum lacinia quis vel. Integer vitae justo eget magna fermentum iaculis eu. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Volutpat blandit aliquam etiam erat.";
    aboutParagraphSecond.setAttribute("class","about-paragraph");



    homeContainer.appendChild(header);
    homeContainer.appendChild(subheader)
    homeContainer.appendChild(aboutParagraphFirst);
    homeContainer.appendChild(aboutParagraphSecond);
    contentHolder.appendChild(homeContainer);
}

export {aboutContent};