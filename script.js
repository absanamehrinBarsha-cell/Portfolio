const typing = document.getElementById("typing");

const words = [
    "CSE Student",
    "Frontend Developer",
    "Java Programmer",
    "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = words[i];

    if (!isDeleting) {
        typing.textContent = current.substring(0, j++);
    } else {
        typing.textContent = current.substring(0, j--);
    }

    if (j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 120);
}

type();