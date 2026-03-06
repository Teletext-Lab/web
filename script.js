/* SCROLL SUAVE */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

window.scrollTo({
top:target.offsetTop-80,
behavior:'smooth'
});

}

});

});


/* MODAL */
function setLang(lang){

document.querySelectorAll("[data-es]").forEach(el=>{

el.innerText = el.dataset[lang]

})

}

function openModal(img){

document.getElementById("modalImage").src=img.src;

document.getElementById("imageModal").style.display="flex";

document.body.style.overflow="hidden";

}

function closeModal(){

document.getElementById("imageModal").style.display="none";

document.body.style.overflow="auto";

}


/* TEMA */

const themeBtn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.textContent="☀️";

localStorage.setItem("theme","light");

}else{

themeBtn.textContent="🌙";

localStorage.setItem("theme","dark");

}

});
