/* IDIOMA */

const langToggle = document.getElementById("langToggle");

let lang = "es";

langToggle.addEventListener("click", () => {

lang = lang === "es" ? "en" : "es";

document.querySelectorAll("[data-es]").forEach(el => {

el.textContent = el.dataset[lang];

});

langToggle.textContent = lang === "es" ? "EN" : "ES";

});


/* TEMA */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light");

});


/* PANEL SERVICIO WEB */

const webService = document.getElementById("webService");
const webPanel = document.getElementById("webPanel");
const closeWebPanel = document.getElementById("closeWebPanel");

if(webService){

webService.addEventListener("click", () => {

webPanel.classList.add("active");

});

}

if(closeWebPanel){

closeWebPanel.addEventListener("click", () => {

webPanel.classList.remove("active");

});

}
