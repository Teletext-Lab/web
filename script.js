/* DARK MODE */

document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("light")
}


/* LANGUAGE */

let lang="es"

document.getElementById("langToggle").onclick=()=>{

lang=lang==="es"?"en":"es"

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent=el.dataset[lang]
})

document.getElementById("langToggle").textContent=lang==="es"?"EN":"ES"

}


/* SCROLL HEADER */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header")

if(window.scrollY>50){
header.classList.add("scrolled")
}else{
header.classList.remove("scrolled")
}

})


/* SECTION ANIMATION */

const sections=document.querySelectorAll(".section")

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
})

sections.forEach(section=>{
observer.observe(section)
})
