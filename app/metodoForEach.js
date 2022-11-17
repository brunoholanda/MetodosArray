const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponives = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponives.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
      //let disponibilidade = verificarDisponibilidadeDoLivro(livro)

      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'//com apenas uma linha temos o mesmo resultado das linhas comentadas nesse codigo
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}

//Em vez do codigo abaixo vamos utilizar um operador ternario
/*function verificarDisponibilidadeDoLivro(livro) {
      if(livro.quantidade > 0){
          return 'livro__imagens'
      } else {
          return 'livros__imagens indisponivel'
      }
}*/
