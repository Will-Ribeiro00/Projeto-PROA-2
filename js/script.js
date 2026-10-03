//infos temas
let tema = "claro"

function AlterarTema(){
    const container = document.getElementById("container")
    const inicio = document.getElementById("inicio")
    const consoles = document.getElementById("consoles")
    const contato = document.getElementById("contato")
    const icone_tema = document.getElementById("img-tema")

    const produtos = document.getElementsByClassName("produto")
    const legendas = document.getElementsByClassName("produto-legenda")
    const celulas = document.getElementsByClassName("celula-tabela")
    const linhasAlternadas = document.getElementsByClassName("linha-alternada")
    const legendaTabela = document.getElementsByClassName("tabela-legenda")
    const inputs = document.getElementsByClassName("input-formulario")
    const labels = document.getElementsByClassName("label-formulario")

    if(tema === "claro"){
        tema = "escuro"

        container.style.background = "#12262b"
        container.style.color = "#dfeef0"

        inicio.style.background = "#1b343b"
        consoles.style.background = "#1b343b"
        contato.style.background = "#1b343b"

        icone_tema.src = "img/interatividade/sun.png"

        for(let i = 0; i < produtos.length; i++){
            produtos[i].style.background = "#1b343b"
        }

        for(let i = 0; i < legendas.length; i++){
            legendas[i].style.color = "#9db9bd"
        }

        for(let i = 0; i < celulas.length; i++){
            celulas[i].style.border = "1px solid #2f4a50"
        }

        for(let i = 0; i < linhasAlternadas.length; i++){
            linhasAlternadas[i].style.background = "#223f45"
        }

        for(let i = 0; i < legendaTabela.length; i++){
            legendaTabela[i].style.color = "#9db9bd"
        }

        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.background = "#1b343b"
            inputs[i].style.color = "#dfeef0"
            inputs[i].style.border = "1px solid #3d5b61"
        }

        for(let i = 0; i < labels.length; i++){
            labels[i].style.color = "#dfeef0"
        }

    }else{
        tema = "claro"

        container.style.background = "#eeeeee"
        container.style.color = "#1a3c42"

        inicio.style.background = "#ffffff"
        consoles.style.background = "#ffffff"
        contato.style.background = "#ffffff"

        icone_tema.src = "img/interatividade/moon.png"

        for(let i = 0; i < produtos.length; i++){
            produtos[i].style.background = "#ffffff"
        }

        for(let i = 0; i < legendas.length; i++){
            legendas[i].style.color = "#4a6b70"
        }

        for(let i = 0; i < celulas.length; i++){
            celulas[i].style.border = "1px solid #dddddd"
        }

        for(let i = 0; i < linhasAlternadas.length; i++){
            linhasAlternadas[i].style.background = "#f9f9f9"
        }

        for(let i = 0; i < legendaTabela.length; i++){
            legendaTabela[i].style.color = "#3d5b61"
        }

        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.background = "#ffffff"
            inputs[i].style.color = "#1a3c42"
            inputs[i].style.border = "1px solid #ccc"
        }

        for(let i = 0; i < labels.length; i++){
            labels[i].style.color = "#1a3c42"
        }
    }
}