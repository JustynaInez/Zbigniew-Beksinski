console.log("Elo");

let month = "Grudzień";

switch (month) {
    case "Styczeń":
    case "Luty":
    case "Marzec":
    case "Kwiecień":
    case "Maj":
        console.log("Jest dość zimno i w dodatku przed urlopem :(");
        break;

    case "Czerwiec":
    case "Lipiec":
    case "Sierpień":
    case "Wrzesień":
console.log("Jest cieplutko i mam urlop! :D");
break;

default:
    console.log("Szaro i zimno na dworze");
}

let buttonChangeBackgroundColor= document.querySelector(".buttonChangeBackgroundColor");
let container = document.querySelector(".container");
let changeColor = document.querySelector (".changeColor");

buttonChangeBackgroundColor.addEventListener("click", () => {
    changeColor.classList.toggle("container");
});

let article = document.querySelector(".article");
let pink = document.querySelector(".pink");
let button = document.querySelector(".button");

button.addEventListener("click", () => {
    if (article.classList.contains("form")) {
        pink.classList.toggle("article");
    } else {
        article.remove();
    }
});

button.addEventListener("click", () => {
    if (pink.classList.contains("article")) {
        button.innerText = "Niespodzianka! :)";
    }
    else {
        button.innerText = "I jeszcze raz! :D";
    }
});

let obrazek = document.querySelector(".image1");
let button2 = document.querySelector(".change");
let nowy = document.querySelector(".nowy");


button2.addEventListener("click", () => {
    if (obrazek.classList.toggle("nowy")) {
        obrazek.src = "https://pl-static.z-dn.net/files/d77/5f87f01852ee279a1aada65dfd1532af.jpg";
    } else {
        obrazek.src = "https://fanbojizycie.files.wordpress.com/2015/02/beksinski1.jpg";
    }
});

