function criptografarTexto(texto) {
    let criptografado = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return criptografado;
}

function descriptografarTexto(texto) {
    let descriptografado = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    return descriptografado;
}

function criptografar() {
    let texto = document.getElementById("texto").value;
    let textoCriptografado = criptografarTexto(texto);
    console.log(textoCriptografado);
    resultado(textoCriptografado);
    desativarAviso();
}
    
function clickDescriptografar() {
    let texto = document.getElementById("texto").value;
    let textoDescriptografado = descriptografarTexto(texto);
    console.log(textoDescriptografado);
    resultado(textoDescriptografado);
    desativarAviso();
}

function desativarAviso() {
    let textoInput = document.getElementById("texto");
    let aviso = document.getElementById("aviso");
    let textoBotao = document.getElementById("copiar");
            textoBotao.textContent = "Copiar"
    if (textoInput) {
        let textoCheck = textoInput.value;
        if (textoCheck.length > 0) {
            aviso.style.display = "none";
        } else {
            aviso.style.display = "block";
        }
    }
}

function clickCopiar() {
    let textoCopia = document.getElementById("textoResultado");

    if (textoCopia) {
        let textoCheck = textoCopia.textContent;
        if (textoCheck.length > 0) {
            let textoBotao = document.getElementById("copiar");
            textoBotao.textContent = "Copiado!"
            navigator.clipboard.writeText(textoCheck)
        }
    }
}

function resultado(texto){
    let spanResultado = document.getElementById("textoResultado");
    spanResultado.textContent = texto;
}
