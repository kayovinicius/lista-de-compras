const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra")
    
    //checkbox
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    

    /*
    <div class="checkbox-container">
        <label for="checkbox-1">
        <input type="checkbox" class="checkbox-input" id="checkbox-1">
        <div class="checkbox-customizado checked"></div>
        </label>
    </div>
    */


    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEditar = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    botaoEditar.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);

}