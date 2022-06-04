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

    window.open(link)

}

function createElement (value) {
    //Criando os elementos
    const li = document.createElement("li");
    const button = document.createElement("button");
    const p = document.createElement("p");
    const i = document.createElement("i");

    //Inserindo os atributos que cada elemento deve conter
    li.setAttribute("id", "card")
    button.setAttribute("class", "close");
    button.innerText = "X";
    p.textContent = value;
    i.setAttribute("class", "fa-brands fa-whatsapp-square");

    //Criando as funções de cada evento
    li.addEventListener("mouseover", () => button.style.display = "block");
    li.addEventListener("mouseout", () => button.style.display = "none");
    button.addEventListener("click", () => deleteCard(li));

    //Inserindo todos os elementos já com os seus atributos dentro da li
    li.appendChild(button);
    li.appendChild(p);
    li.appendChild(i);

    li.addEventListener("click", () => sendMessageOnWpp(p.innerText));

    //Inserindo a li com os elementos que já estão com os seus atributos dentro da ul.
    ulCards.appendChild(li);
}



buttonSubmit.addEventListener("click", (event) => {
    createElement(message.value);
    message.value = ""
});

//Se comentar a função de chamada do card, ele funciona o do botão.


/* for(let i = 0; i < liCard.length; i++ ) {
    liCard[i].onclick = () => {
        const text = liCard[i].innerText
        sendMessageOnWpp(text)
    }

    liCard[i].onmouseover = () => {
        liCard[i].children[0].style.display = 'block'
    }

    liCard[i].onmouseout = () => {
        liCard[i].children[0].style.display = 'none'
    }

    liCard[i].children[0].onclick = () => {
        deleteCard(liCard[i])
    }
}
 */