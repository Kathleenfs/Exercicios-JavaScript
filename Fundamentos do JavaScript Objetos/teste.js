const nota = [1, 5.6, 7, 8]
const alunos = ["maria", "vanessa", "gustavo", "carla"]

let listaDeNotasAlunos = [alunos, nota]


const exibeNomeNota = (nomeDoAluno) =>{
    if(listaDeNotasAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno) // indexof procura a posição dentro da lista
                                //[0] [1]                               // [1]            [1]
        return listaDeNotasAlunos[0][indice] + ', sua media é ' + listaDeNotasAlunos[1][indice]
    } else{
        return 'Aluno não existe na base de dados'
    }
} 

console.log(exibeNomeNota("maria"))


// escrevendo um codigo
// uma função exibe nome e nota é criada recebendo o parametro nome do aluno
// if a variavel que recebe um array com o valor de duas dimenções. Na primeira posição desse [0] includes vai ver se o valor que estamos procurando  nome do aluno está dentro dela
// se estiver nos  vamos buscar pelo indice dentro da listadenotasealunos nos procuramos por alunos que está no indice [0]
//indexof siginifica buscar de Então ele vai buscar o nome do aluno enviado para o parametro da função
// e retornar dentro da lista de alunos o nome do aluno que achamos depos procurar a nota do nome do aluno que achamos
//includes retorna um bleano true false
// indexOf retorna o numero da posição onde ana se encontra dentro do array maria tem o indice 1


