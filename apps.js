
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")/*para acessar o id indicado no index.html */
    //console.log(section)
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value


    //se campoPesquisa for um string vazia
    if (campoPesquisa == ""){
         section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }
    //console.log(campoPesquisa)

    campoPesquisa = campoPesquisa.toLowerCase() //letra minuscula   
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    //lista de repetição
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa 
        //entao, faça....
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                            <h2>
                                <a href="#" style="text-shadow: 0 4px 8px green;">${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta" style="text-shadow: 0 4px 8px green;">${dado.descricao}</p>
                            <a href="${dado.link}" target="_self" style="text-shadow: 0 4px 8px green;">Site Oficial!</a>
                        </div>
        
                        
            `
        }
       
       
    }
    
    if (!resultados){  //caso não existe nenhum dos resultados utilizamos o exclamação
       resultados = "<p>Nada foi Encontrado!</p>"
    }


    section.innerHTML = resultados
    
    
}
//console.log(dados);/*para escolhermos os campos temos que escrever o seguinte cod , dados[0].string/descri/link/ etc*/



