const colunas = 20;
const linhas = 20;
const pontos_por_comida = 10;

const velocidade = parseInt(localStorage.getItem("snake_velocidade")) || 130;

let cobra = [];
let direcao = {x: 1, y: 0};
let proximaDirecao = {x:1, y:0};
let comida = {x: 0, y: 0};
let potuacao = 0
let recorde = parseInt(localStorage.getItem("snake_recorde")) || 0;
let intervalo = null;
let emJogo = false;

//GRADE
const grade = document.getElementById("grade");
let celulas = [];

function criarGrade(){
    grade.innerHTML = "";
    celulas = [];

    for(let y = 0; y < linhas; y++){
        const linhas = [];

        for(let x = 0; x < colunas; x++){
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
        }
        celulas.push(linhas);
    }
}

function limparGrade(){
    for(let y = 0; y<linhas; y++){
        for(let x = 0; x < linhas; x++){
            celulas[x][y].className = "celula";
        }
    }
}

function redenrizar(){
    limparGrade()
    celulas[comida.y][comida.x].classList.add("comida");

    for(let i = 1; i < cobra.length; i++){
        celulas[cobra[i].y[cobra[i].x]].classList.add("cobra")
    }
    celulas[cobra[0].y[cobra[0].x].classList.add("cabeca")];
}