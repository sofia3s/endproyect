
let sobreMi = document.querySelector("#sobremi");

let scrolling = document.querySelector("#secc2");

sobreMi.addEventListener("click", irSeccion2, false);

function irSeccion2(e) {
    scrolling.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        
    });
}

let contacto = document.querySelector("#contacto");
let scrolling2 = document.querySelector("#mail");

contacto.addEventListener("click", irFooter, false)

function irFooter(e) {
    scrolling2.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    });
}


function abrirpestaña() {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSFGdlfMKMXnmBWCLrhdWdSLLJhKmkHGJrdkllFVVjlGlBJzfftKVdqwHlPCcdJvqCLzr")
}
function abrirpestaña2() {
    window.open("https://github.com/sofia3s")
}
function abrirpestaña3() {
    window.open("https://www.linkedin.com/in/sofia-s-94aa6711a/")
}
function abrirpestaña4() {
    window.open("https://www.instagram.com/sofia.sok/");
}



