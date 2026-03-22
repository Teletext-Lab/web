/* ==================== IDIOMA ==================== */
const langToggle = document.getElementById("langToggle");
let lang = "es";

function updateLanguage() {
    document.querySelectorAll("[data-es]").forEach(el => {
        if (lang === "es") {
            el.textContent = el.getAttribute("data-es");
        } else {
            el.textContent = el.getAttribute("data-en");
        }
    });
    
    // Actualizar opciones del select de país
    const paisSelect = document.getElementById("formPais");
    if (paisSelect) {
        const options = paisSelect.options;
        for (let i = 0; i < options.length; i++) {
            const opt = options[i];
            if (lang === "es") {
                opt.textContent = opt.getAttribute("data-es");
            } else {
                opt.textContent = opt.getAttribute("data-en");
            }
        }
    }
    
    langToggle.textContent = lang === "es" ? "EN" : "ES";
}

langToggle.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    updateLanguage();
    localStorage.setItem("lang", lang);
});

const savedLang = localStorage.getItem("lang");
if (savedLang) {
    lang = savedLang;
    updateLanguage();
}


/* ==================== TEMA ==================== */
const themeToggle = document.getElementById("themeToggle");
let isDark = true;

function updateTheme() {
    if (isDark) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        themeToggle.textContent = "🌙";
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    updateTheme();
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    isDark = false;
    updateTheme();
} else {
    isDark = true;
    updateTheme();
}


/* ==================== PANEL SERVICIO WEB ==================== */
const webService = document.getElementById("webService");
const webPanel = document.getElementById("webPanel");
const closeWebPanel = document.getElementById("closeWebPanel");

if (webService) {
    webService.addEventListener("click", () => {
        webPanel.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

function closePanel() {
    webPanel.classList.remove("active");
    document.body.style.overflow = "";
}

if (closeWebPanel) {
    closeWebPanel.addEventListener("click", closePanel);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && webPanel.classList.contains("active")) {
        closePanel();
    }
});

webPanel.addEventListener("click", (e) => {
    if (e.target === webPanel) {
        closePanel();
    }
});


/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('nav a, .cta-button, .price-cta').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                if (webPanel.classList.contains('active')) {
                    closePanel();
                }
            }
        }
    });
});


/* ==================== FORMULARIO DE CONTACTO (SECCIÓN DIVIDIDA) ==================== */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessageSplit");

if (contactForm) {
    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById("formNombre").value;
        const email = document.getElementById("formEmail").value;
        const pais = document.getElementById("formPais").value;
        const mensaje = document.getElementById("formMensaje").value;
        
        if (!nombre || !email || !mensaje) {
            formMessage.innerHTML = lang === "es" ? "❌ Por favor completá todos los campos" : "❌ Please fill all fields";
            formMessage.style.color = "#ff6b6b";
            return;
        }
        
        formMessage.innerHTML = lang === "es" ? "📨 Enviando..." : "📨 Sending...";
        formMessage.style.color = "var(--text-secondary)";
        
        // Simulación de envío (reemplazar con endpoint real)
        setTimeout(() => {
            formMessage.innerHTML = lang === "es" ? "✅ ¡Mensaje enviado! Te contactaremos pronto." : "✅ Message sent! We will contact you soon.";
            formMessage.style.color = "var(--accent)";
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.innerHTML = "";
            }, 5000);
        }, 1000);
        
        // Para enviar realmente, descomentar y configurar endpoint:
        /*
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("email", email);
        formData.append("pais", pais);
        formData.append("mensaje", mensaje);
        
        try {
            const response = await fetch("https://formspree.io/f/tu-endpoint", {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });
            if (response.ok) {
                formMessage.innerHTML = lang === "es" ? "✅ ¡Mensaje enviado!" : "✅ Message sent!";
                formMessage.style.color = "var(--accent)";
                contactForm.reset();
            } else {
                throw new Error();
            }
        } catch (error) {
            formMessage.innerHTML = lang === "es" ? "❌ Error. Escribinos a teletextlab@gmail.com" : "❌ Error. Write to teletextlab@gmail.com";
            formMessage.style.color = "#ff6b6b";
        }
        */
    });
}


/* ==================== ANIMACIONES AL HACER SCROLL ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .contact-item, .split-left, .split-right').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});


/* ==================== HEADER SCROLL EFFECT ==================== */
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = "0.8rem 2.5rem";
    } else {
        header.style.padding = "1.2rem 2.5rem";
    }
    
    lastScroll = currentScroll;
});
/* ==================== PANEL EDICIÓN DE VIDEO ==================== */
const videoService = document.getElementById("videoService");
const videoPanel = document.getElementById("videoPanel");
const closeVideoPanel = document.getElementById("closeVideoPanel");

if (videoService) {
    videoService.addEventListener("click", () => {
        videoPanel.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

if (closeVideoPanel) {
    closeVideoPanel.addEventListener("click", () => {
        videoPanel.classList.remove("active");
        document.body.style.overflow = "";
    });
}

/* ==================== PANEL ASESORÍA OBS ==================== */
const obsService = document.getElementById("obsService");
const obsPanel = document.getElementById("obsPanel");
const closeObsPanel = document.getElementById("closeObsPanel");

if (obsService) {
    obsService.addEventListener("click", () => {
        obsPanel.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

if (closeObsPanel) {
    closeObsPanel.addEventListener("click", () => {
        obsPanel.classList.remove("active");
        document.body.style.overflow = "";
    });
}

/* ==================== CERRAR TODOS LOS PANELES CON ESC ==================== */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (webPanel.classList.contains("active")) webPanel.classList.remove("active");
        if (videoPanel.classList.contains("active")) videoPanel.classList.remove("active");
        if (obsPanel.classList.contains("active")) obsPanel.classList.remove("active");
        document.body.style.overflow = "";
    }
});

/* ==================== CERRAR PANEL CLICKEANDO FUERA ==================== */
[webPanel, videoPanel, obsPanel].forEach(panel => {
    if (panel) {
        panel.addEventListener("click", (e) => {
            if (e.target === panel) {
                panel.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});
