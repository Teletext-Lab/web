*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial,Helvetica,sans-serif;
background:#0a0a0a;
color:#f0f0f0;
line-height:1.6;
transition:0.3s;
}

/* HEADER */

header{
position:fixed;
top:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 30px;
background:#111;
z-index:1000;
}

.logo{
font-size:22px;
color:#00ff9d;
text-decoration:none;
font-weight:bold;
}

.logo span{
color:white;
}

nav ul{
display:flex;
gap:25px;
list-style:none;
}

nav a{
color:#ccc;
text-decoration:none;
}

.controls{
display:flex;
gap:10px;
align-items:center;
}

#languageSwitcher{
padding:5px;
}

#themeToggle{
cursor:pointer;
background:none;
border:none;
font-size:18px;
color:#00ff9d;
}

/* HERO */

.hero{
min-height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding-top:80px;
}

.hero h1{
font-size:48px;
margin-bottom:10px;
}

.subtitle{
color:#00ff9d;
margin-bottom:15px;
}

.tagline{
color:#aaa;
}

/* SECTIONS */

.section{
padding:80px 20px;
}

.section-title{
text-align:center;
margin-bottom:40px;
font-size:30px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
max-width:1000px;
margin:auto;
}

.card{
background:#1b1b1b;
padding:30px;
border-radius:10px;
text-align:center;
}

/* CONTACT */

.contact-section{
text-align:center;
padding:60px 20px;
}

/* FOOTER */

footer{
text-align:center;
padding:30px;
background:#111;
color:#777;
}

/* WHATSAPP */

.whatsapp-btn{
position:fixed;
bottom:20px;
right:20px;
background:#25D366;
width:55px;
height:55px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
}

.whatsapp-btn img{
width:28px;
filter:invert(1);
}

/* LIGHT MODE */

body.light{
background:#f5f5f5;
color:#111;
}

body.light header{
background:#fff;
}

body.light .card{
background:#fff;
}

/* MOBILE */

@media(max-width:768px){

nav ul{
gap:12px;
font-size:14px;
}

.hero h1{
font-size:36px;
}

}
