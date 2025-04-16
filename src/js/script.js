let contador = 0
let input = window.document.getElementById('tarefa')
let btnAdd = window.document.getElementById('btn-add')
let main = window.document.getElementById('areaLista')

function addTarefa() {
    // Pegar o valor digitado no input
    let valorInput = input.value

    if((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)) {
       
        ++ contador
       
        let novoItem = `<div id = "${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}"class="fa-regular fa-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete" id="btn-add" onclick="addTarefa()"> <i class="fa-solid fa-trash"></i> DELETAR</button>
            </div>
        </div>`

        main.innerHTML += novoItem

        input.value = ''
        input.focus() 
    }
}

function deletar(id) {
    var tarefa = window.document.getElementById(id)

    tarefa.remove()
}

function marcarTarefa(id) {
    var item = window.document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe)

    if(classe == 'item') {
        item.classList.add('clicado')

        var icone = window.document.getElementById('icone_'+id)
        icone.classList.remove('fa-regular')
        icone.classList.remove('fa-circle')
        icone.classList.add('fa-solid')
        icone.classList.add('fa-circle-check')

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('clicado')

        var icone = window.document.getElementById('icone_'+id)
        icone.classList.remove('fa-solid')
        icone.classList.remove('fa-circle-check')
        icone.classList.add('fa-regular')
        icone.classList.add('fa-circle')
    }

}

input.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})