//variaveis
let nomeAluno;
let sobrenomeAluno;
let anoNascimentoAluno;
let idadeAluno;

//constantes 
const NOME_ESCOLA = "Senai";
const ANO_ATUAL = 2023;

//receber informacoes do usuario

nomeAluno = prompt("digite seu primeiro nome:");
sobrenomeAluno = prompt("digete seu sobrenome:");
let nomeAlunoCompleto = nomeAluno + " " + sobrenomeAluno;
anoNascimentoAluno = parseInt (prompt("digite o ano do seu nascimento"));
idadeAluno = ANO_ATUAL - anoNascimentoAluno;


alert("Seu nome é " + nomeAlunoCompleto + " e voce estuda no " + NOME_ESCOLA + ", sua idade é " + idadeAluno);