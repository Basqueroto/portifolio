function part (){
    particlesJS("particles-container", {
        particles: {
            "number": {
                "value": 80,
                "density": {
                "enable": true,
                "value_area": 800
                }
            },
            "color": {
                "value": "#88c8ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                "width": 0,
                "color": "#88c8ff"
                },
                "polygon": {
                "nb_sides": 5
                },
                "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#88c8ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
                }
            }
            },
            "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                "enable": true,
                "mode": "repulse"
                },
                "onclick": {
                "enable": false,
                "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
                },
                "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
                },
                "repulse": {
                "distance": 200,
                "duration": 0.4
                },
                "push": {
                "particles_nb": 4
                },
                "remove": {
                "particles_nb": 2
                }
            }
            },
            "retina_detect": true
        });
    var count_particles, stats, update;
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update); 
}  
part()
// ----------------------------------aparecer o texto---------------------------
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// ----------------------abrir a foto ----------------
var block = 1
window.addEventListener("scroll", () => {
    console.log( window.innerHeight)
    console.log( window.pageYOffset)
       var header = document.getElementById("vamos")
       var divP = document.getElementById("apresentacao")
       var fundo = document.getElementsByClassName("particles-js-canvas-el")
       var fdiv = document.getElementById("particles-container")
       var nav = document.getElementById("vamos")
       if (window.pageYOffset > 5 && block == 1){
        console.log("img apareceu")
        header.className = "aberto"
        header.style.display = "grid"
        // header.style.position = "absolute"
        divP.className = "aberto"
        nav.className = "aberto"
        fdiv.className = "dim"
        part();
        fundo.className = "dim"
        block = 2
       }
    //    else {
    //     console.log("img voltou")
    //     divP.className = "fechado"
    //     nav.className = "fechado"
    //     fundo.className = "aum"
    //     fdiv.className = "aum"
    //    }
})