console.log("Elo");

{

    const buttonChangeBackgroundColor= document.querySelector(".buttonChangeBackgroundColor");
    const changeColor = document.querySelector (".changeColor");
    
    let changeBackgroundColor = () =>
     {
         changeColor.classList.toggle("container"); 
    };
    
    buttonChangeBackgroundColor.addEventListener("click", changeBackgroundColor);


let article = document.querySelector(".article");
let pink = document.querySelector(".pink");
let button = document.querySelector(".button");

let changeTextofButton = () => {
    if (pink.classList.contains("article")) {
        button.innerText = "Niespodzianka! :)";
    }
    else {
        button.innerText = "I jeszcze raz! :D";
    }
    (article.classList.contains("form")) 
        pink.classList.toggle("article");
};

button.addEventListener("click", changeTextofButton); 


let obrazek = document.querySelector(".image1");
let button2 = document.querySelector(".change");


let changeImage = () => {
    if (obrazek.classList.toggle("nowy")) {
        obrazek.src = "https://pl-static.z-dn.net/files/d77/5f87f01852ee279a1aada65dfd1532af.jpg";
    } else {
        obrazek.src = "https://fanbojizycie.files.wordpress.com/2015/02/beksinski1.jpg";
    }
};

button2.addEventListener("click", changeImage);

}

