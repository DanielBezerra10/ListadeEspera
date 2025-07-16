let max = 5;
let mesas = Array(max).fill(" - ");
let listaespera = Array()

function registrarCliente() {
    let nome = document.getElementById("cliente").value;
    let quantidade = parseInt(document.getElementById("QuantidadeClientes").value);


    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] === " - ") {
            mesas.splice(i, 1, `${nome} (${quantidade})`);
            document.getElementById("retorno").innerHTML = `Mesa ${i + 1} ocupada por ${nome}.<br>Mesas: ${mesas.join(", ")}`;
            document.getElementById("espera").innerHTML = "";
            document.getElementById("posicao").innerHTML = "";
            return;

        }
    }

    listaespera.push({nome, quantidade});
    document.getElementById("retorno").innerHTML = "Todas as mesas estão ocupadas.";
    document.getElementById("espera").innerHTML = `${nome} foi adicionado a lista de espera.`;

}

function liberarMesa() {
    let numeroMesa = parseInt(document.getElementById("mesaLiberar").value);
    let indice = numeroMesa - 1;

    if (mesas[indice] == " - ") {
        document.getElementById("retorno").innerHTML = `Mesa ${numeroMesa} já está livre`; 
        return;
    } 

    let clienteRemovido = mesas[indice];
    mesas.splice(indice, 1, " - ")
    let mensagem = `Mesa ${numeroMesa} liberada (cliente: ${clienteRemovido}).`;

    if (listaespera.length > 0) {
        let proximo = listaespera.shift (); 
        mesas.splice(indice, 1, `${proximo.nome} (${proximo.quantidade})`);
        mensagem += `<br>${proximo.nome} foi chamado da espera para a mesa ${numeroMesa}.`;
    }

    document.getElementById("retorno").innerHTML = mensagem + `<br>Mesas: ${mesas.join(", ")}`;
    document.getElementById("espera").innerHTML = "";
    document.getElementById("posicao").innerHTML = ""; 
}   

function verificarPosicao() {
    let nomeBusca = document.getElementById("nomeBusca").value.trim();
    let posicao = -1;

    for (let i = listaespera.length - 1; i >= 0; i--) {
        if (listaespera[i].nome.toLowerCase() === nomeBusca.toLowerCase()) {
            posicao = i + 1;
            break
        }
    }
    if (posicao != -1) {
        document.getElementById("posicao").innerHTML = `${nomeBusca}, sua posição na lista de espera é: ${posicao}`
    }
}




