
const typingText =
document.getElementById("typing");
const words = [
    "CSE Student",
    "Tech Enthusiast",
    
    "Problem Solver"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){
    const currentWord =
    words[wordIndex];

    if(!deleting){
        typingText.textContent =
        currentWord.substring(0,charIndex);
        charIndex++;
        if(charIndex > currentWord.length){
            deleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{
        typingText.textContent =
        currentWord.substring(0,charIndex);
        charIndex--;
        if(charIndex < 0){
            deleting = false;
            wordIndex++;
            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );
}

typeEffect();




const reveals =
document.querySelectorAll(".reveal");
function revealElements(){
    reveals.forEach(element => {
        const top =
        element.getBoundingClientRect().top;
        const windowHeight =
        window.innerHeight;
        if(top < windowHeight - 100){
            element.classList.add("show");
        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();




const sections =
document.querySelectorAll("section");
const navLinks =
document.querySelectorAll(
".navbar ul li a"
);

window.addEventListener("scroll",()=>{
    let current = "";
    sections.forEach(section => {
        const sectionTop =
        section.offsetTop - 150;
        if(window.scrollY >= sectionTop){
            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(
            link.getAttribute("href")
            === "#" + current
        ){
            link.classList.add("active");
        }

    });

});