document.addEventListener('DOMContentLoaded', function() {
    iniciarIndex();
})

function iniciarIndex() {
    animacionMenu();
    animacionNucleus();
    seguridadScroll();
    comisionesScroll();
}

function animacionMenu() {
    const headerBarra = document.querySelector('.header__barra');
    const headerHeading = document.querySelector('.header__heading');
    const headerBoton = document.querySelector('.header__boton');
    const headerGrafico = document.querySelector('.header__grafico');

    setTimeout(() => {
        headerBarra.style.opacity = '1';
        headerBarra.style.transition = 'opacity .8s';
    }, 1500);
    setTimeout(() => {
        headerHeading.style.opacity = '1';
        headerHeading.style.transform = 'translateX(0)';
        headerHeading.style.transition = 'opacity .8s, transform .8s';
    }, 1700);
    setTimeout(() => {
        headerGrafico.style.opacity = '1';
        headerGrafico.style.transform = 'translateX(0)';
        headerGrafico.style.transition = 'opacity .9s, transform .9s';
    }, 1800);
    setTimeout(() => {
        headerBoton.style.opacity = '1';
        headerBoton.style.transition = 'opacity .8s';
    }, 2700);
}

function animacionNucleus() {
    const nucleusMain = document.querySelector('.nucleus');
    const listadoEfecto = document.querySelectorAll('.listado__efecto');
    window.addEventListener('scroll', function() {
        if(nucleusMain.getBoundingClientRect().top < 300){
            listadoEfecto[0].style.opacity = '1';
            listadoEfecto[0].style.transform = 'translateX(0)';
            listadoEfecto[0].style.transition = 'opacity .8s, transform .8s';
            
            listadoEfecto[1].style.opacity = '1';
            listadoEfecto[1].style.transform = 'translateX(0)';
            listadoEfecto[1].style.transition = 'opacity .8s, transform .8s';
            listadoEfecto[1].style.transitionDelay = '.5s';


            listadoEfecto[2].style.opacity = '1';
            listadoEfecto[2].style.transform = 'translateX(0)';
            listadoEfecto[2].style.transition = 'opacity .8s, transform .8s';
            listadoEfecto[2].style.transitionDelay = '.8s';
        } 
    })
}

function seguridadScroll() {
    const seguridad = document.querySelector('.seguridad');
    const seguridadImagen = document.querySelector('.seguridad__imagen');
    const listadoSeguridad = document.querySelectorAll('.listado__seguridad');

    window.addEventListener('scroll', function() {
        if(seguridad.getBoundingClientRect().top < 200){
            seguridadImagen.style.opacity = '1';
            seguridadImagen.style.transition = 'opacity .9s';

            listadoSeguridad[0].style.opacity = '1';
            listadoSeguridad[0].style.transform = 'translateX(0)';
            listadoSeguridad[0].style.transition = 'opacity .8s, transform .8s';

            listadoSeguridad[1].style.opacity = '1';
            listadoSeguridad[1].style.transform = 'translateX(0)';
            listadoSeguridad[1].style.transition = 'opacity .8s, transform .8s';
            listadoSeguridad[1].style.transitionDelay = '.5s';

            listadoSeguridad[2].style.opacity = '1';
            listadoSeguridad[2].style.transform = 'translateX(0)';
            listadoSeguridad[2].style.transition = 'opacity .8s, transform .8s';
            listadoSeguridad[2].style.transitionDelay = '.8s';
        }
    })
}

function comisionesScroll() {
    const comisiones = document.querySelector('.comisiones');
    const listaComisiones = document.querySelectorAll('.listado__elemento--2col');
    const comisionesImagen = document.querySelector('.comisiones__imagen');

    window.addEventListener('scroll', function() {
        if(comisiones.getBoundingClientRect().top < 100){
            listaComisiones[0].style.opacity = '1';
            listaComisiones[0].style.transition = 'opacity .9s';

            listaComisiones[1].style.opacity = '1';
            listaComisiones[1].style.transition = 'opacity .9s'
            listaComisiones[1].style.transitionDelay = '.5s';

            comisionesImagen.style.transform = 'translateY(0)';
            comisionesImagen.style.transition = 'transform .8s';
            comisionesImagen.style.transitionDelay = '.8s';
        }
    })
}




let slider = document.querySelector("#slider");
let sliderIndividual = document.querySelectorAll(".testimonial");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
     width = sliderIndividual[0].clientWidth;
})

setInterval(() => {
    Slides();
}, intervalo);

function Slides() {
    slider.style.transform = 'translate('+(-width * contador) + 'px)';
    slider.style.transition = 'transform .5s';
    contador++;

    if(contador === sliderIndividual.length){
        setTimeout(() => {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
            contador = 1;
        }, 3000);
    }
}