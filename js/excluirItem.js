import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que quer excluir esse item?")

    if (confirmacao) {
         elemento.remove();

         verificarListaVazia(listaDeCompras);
    }
}

export { excluirItem };