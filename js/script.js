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


const buttonChangeBackgroundColor= document.querySelector(".buttonChangeBackgroundColor");
const container = document.querySelector(".container");
const changeColor = document.querySelector (".changeColor");

let changeBackgroundColor = () =>
 {
     changeColor.classList.toggle("container"); 
};

buttonChangeBackgroundColor.addEventListener("click", changeBackgroundColor);


let article = document.querySelector(".article");
let pink = document.querySelector(".pink");
let button = document.querySelector(".button");

let changeParagrapf = () => {
    if (article.classList.contains("form")) {
        pink.classList.toggle("article");
    } else {
        article.remove();
    }
};

button.addEventListener("click", changeParagrapf);

let changeTextofButton = () => {
    if (pink.classList.contains("article")) {
        button.innerText = "Niespodzianka! :)";
    }
    else {
        button.innerText = "I jeszcze raz! :D";
    }
};

button.addEventListener("click", changeTextofButton); 


let obrazek = document.querySelector(".image1");
let button2 = document.querySelector(".change");
let nowy = document.querySelector(".nowy");

let changeImage = () => {
    if (obrazek.classList.toggle("nowy")) {
        obrazek.src = "https://pl-static.z-dn.net/files/d77/5f87f01852ee279a1aada65dfd1532af.jpg";
    } else {
        obrazek.src = "https://fanbojizycie.files.wordpress.com/2015/02/beksinski1.jpg";
    }
};

button2.addEventListener("click", changeImage);


function count (number) {
    return number * 3;
}
console.log (count(10));
