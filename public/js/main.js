console.log("Start JS");

const message = document.querySelector(".form input[type=text]");
const buttonSubmit = document.querySelector("#btn-submit");

const ulCards = document.querySelector(".cards");
const liCard = document.querySelectorAll("#card");

console.log(message);
console.log(buttonSubmit);

console.log(ulCards);
console.log(liCard);

function deleteCard (card) {
    card.remove();
}

function sendMessageOnWpp (value){
    const message = value;
    const number = prompt("Qual o número que você deseja enviar esta mensagem?");
    const link = `https://api.whatsapp.com/send?phone=55${number}&text=${message}`;
    if(number.length < 9){
        window.preventDefault();
    }
    window.open(link)

}

function createElement (value) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const p = document.createElement("p");
    const i = document.createElement("i");

    li.setAttribute("id", "card")
    button.setAttribute("class", "close");
    button.innerText = "X";
    p.textContent = value;
    i.setAttribute("class", "fa-brands fa-whatsapp-square");

    li.addEventListener("mouseover", () => button.style.display = "block");
    li.addEventListener("mouseout", () => button.style.display = "none");

    li.addEventListener("touchstart", () => button.style.display = "block")


    button.addEventListener("click", () => deleteCard(li));
    

    li.appendChild(button);
    li.appendChild(p);
    li.appendChild(i);
    
    li.addEventListener("click", () => sendMessageOnWpp(p.innerText));

    ulCards.appendChild(li);
}



buttonSubmit.addEventListener("click", (event) => {
    createElement(message.value);
    message.value = ""
});

