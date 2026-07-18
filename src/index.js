
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odio quibusdam pariatur id voluptates, molestiae libero aut delectus excepturi, perspiciatis incidunt illum voluptatum accusantium exercitationem quisquam numquam, totam animi? Ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odio quibusdam pariatur id voluptates, molestiae libero aut delectus excepturi, perspiciatis incidunt illum voluptatum accusantium exercitationem quisquam numquam, totam animi? Ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odio quibusdam pariatur id voluptates, molestiae libero aut delectus excepturi, perspiciatis incidunt illum voluptatum accusantium exercitationem quisquam numquam, totam animi? Ut."

// Adding the content to the main content div
const content = document.getElementById("content");
    content.setAttribute("style", "background-color: rgb(187, 157, 48)");

const banner = document.createElement("div");
    banner.setAttribute("id","banner");
content.appendChild(banner);

const bannerImg = document.createElement("img");
    bannerImg.setAttribute("src", "src\imgs\banner.jpg");
    bannerImg.setAttribute("alt", "Bammmmmnner Logo :)")
banner.appendChild(bannerImg);

const margin1 = document.createElement("div");
    margin1.setAttribute("id","margin1");
content.appendChild(margin1);

const center = document.createElement("div");
    center.setAttribute("id","center");
    center.setAttribute("class","middleContent center");
content.appendChild(center);

    const statement = document.createElement("p");
        statement.setAttribute("class","statement");
        statement.textContent = text;
    center.appendChild(statement);

    const pics = document.createElement("div");
    center.appendChild(pics);
        const box1 = document.createElement("div");
        box1.appendChild(pics);
        const box2 = document.createElement("div");
        box2.appendChild(pics);

const margin2 = document.createElement("div");
    margin2.setAttribute("id","margin2");
content.appendChild(margin2);