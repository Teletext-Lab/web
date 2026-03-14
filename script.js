/* DARK MODE */

const themeBtn=document.getElementById("themeToggle")

let theme=localStorage.getItem("theme") || "dark"

function applyTheme(){

if(theme==="light"){
document.body.classList.add("light-mode")
themeBtn.textContent="☀️"
}else{
document.body.classList.remove("light-mode")
themeBtn.textContent="🌙"
}

}

applyTheme()

themeBtn.onclick=()=>{
theme=theme==="dark"?"light":"dark"
localStorage.setItem("theme",theme)
applyTheme()
}


/* IDIOMA */

const langBtn=document.getElementById("langToggle")

let lang=localStorage.getItem("lang") || "es"

function applyLang(){

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent=el.getAttribute("data-"+lang)
})

langBtn.textContent=lang.toUpperCase()

}

applyLang()

langBtn.onclick=()=>{
lang=lang==="es"?"en":"es"
localStorage.setItem("lang",lang)
applyLang()
}


/* EXPANDIR PROYECTOS */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{
card.classList.toggle("project-expanded")
})

})
