/*Criar uma função que permite a criação de novos clientes a partir de um modelo*/

function Cliente(nome,cpf,email,saldo)
{
    this.nome=nome;
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.depositar= function(valor){
        this.saldo += valor
    }   
}   
const andre = new Cliente("André", "12345674", "andre@email.com", 100)

console.log(andre)