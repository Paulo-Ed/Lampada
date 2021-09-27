function lampada(){
    let botao = document.getElementById("botao").innerHTML
    if( botao == "Liga"){
        document.getElementById("botao").innerHTML = "Desliga"
        document.getElementById("lampada").style.backgroundColor = "#ffff00"
    } else{
        document.getElementById("botao").innerHTML = "Liga"
        document.getElementById("lampada").style.backgroundColor = "#ffffff"
    }
}