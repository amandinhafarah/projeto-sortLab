const sortearButton = document.querySelector(".sortear")

sortearButton.addEventListener("click", generateNumber)

function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultScreen = document.querySelector(".result-screen");

    if (result <= 0) {
    resultScreen.textContent = "Resultado inválido"
    } 
    else {
    resultScreen.textContent = result;
    }
}