const notas = [1, 2, 3, 4]

let somasDasNotas = 0 // tem que ser declarada fora do laço senão o valor vai ser substituido a cada laço
                    //4
for(let i = 0; i < notas.length; i++){
    somasDasNotas += notas[i]
    console.log(i, notas[i], somasDasNotas) // somaDasNotas + somaDasNotas = notas[valor da posição]
}

let media = somasDasNotas/notas.length

console.log(media)

numero = 4
n = 0

for(let i = 1; i < numero; i++){
    n = n + i
}

console.log("oi", n)


// for é uma forma de entrar em cada valor dentro de uma lista
