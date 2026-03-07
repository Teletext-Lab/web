let lang="es"

document.getElementById("toggleLang").onclick=function(){

lang = lang === "es" ? "en" : "es"

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent = el.getAttribute("data-"+lang)
})

}

document.getElementById("toggleDark").onclick=function(){

document.body.classList.toggle("dark")

}
