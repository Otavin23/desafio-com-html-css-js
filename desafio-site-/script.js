let gmail = document.getElementById("gmail")




function botao(){
    let caixaMensagem = document.querySelector("span")
    let alterar = document.getElementById("gmail")
       
    caixaMensagem.append("Por Favor, insira um email valido")
    alterar.style.border = "3px solid red"
    caixaMensagem = true

}