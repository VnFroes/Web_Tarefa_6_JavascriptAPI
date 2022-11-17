//  link da API
linkAPI = "https://63764b3d81a568fc25fb0ab2.mockapi.io/JavascriptAPI/sincronizar";

// Classe dados
function dados(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}
// Criando a array
var Dados = new Array()

function inserir() {
    // Separamento das variaveis para salvar na array Dados
    let nomeInput = document.getElementById('nome').value
    let emailInput = document.getElementById('email').value
    let telInput = document.getElementById('telefone').value
    
    let dado = new dados(nomeInput, emailInput, telInput)

    // Adcionando o objeto no array de Dados
    Dados.push(dado)
    attTabela()
}

// Função de atualização da tabela
function attTabela() {
    tbody.innerHTML = ''
    for (let i = 0; i < Dados.length; i++) {
        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        var txt1 = document.createTextNode(Dados[i].nome)
        var txt2 = document.createTextNode(Dados[i].email)
        var txt3 = document.createTextNode(Dados[i].telefone)
        td1.appendChild(txt1)
        td2.appendChild(txt2)
        td3.appendChild(txt3)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
    }
}

// Função que esvazia a tabela
function esvaziaTab() {
    var tbody = document.getElementById('tbody')
    var qLinhas = 0
    tbody.innerHTML = ''
}

//Função salvar na API
function salvarAPI() {    
    Dados.forEach(function (sincronizar) {
        fetch(this.linkAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sincronizar)
        }).then((response) => response.json())
        .then((data) => {
            window.alert("Os dados foram salvos na API")
            esvaziaTab();
        })
        .catch((error) => {
            console.error('Error ao salvar na API');
        })
    })
}