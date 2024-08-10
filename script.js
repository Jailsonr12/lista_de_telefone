const form = document.getElementById("from-atividade");
const inputNome = document.getElementById("nome");
const inputContato = document.getElementById("contato");
let Nomes = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarLinha();
  atualizaTabela();
});

inputContato.addEventListener("input", formatarNumero);

function formatarNumero(event) {
  let value = event.target.value.replace(/\D/g, "");
  if (value.length > 0) {
    value = `(${value.substring(0, 2)}) ` + value.substring(2);
  }
  if (value.length > 10) {
    value = value.substring(0, 10) + "-" + value.substring(10, 15);
  }
  event.target.value = value;
}

function adicionarLinha() {
  if (Nomes.includes(inputNome.value)) {
    alert(
      `O contato com o nome: ${inputNome.value} já foi inserido na lista telefônica`
    );
    inputNome.value = "";
    inputContato.value = "";
  } else {
    Nomes.push(inputNome.value);
    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    limparCampos();
  }

  inputNome.value = "";
  inputContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function limparCampos() {
  inputNome.value = "";
  inputContato.value = "";
}
