const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12543652266',
    email: 'andre@email.com',
    fones: [ '5591235498', '5521988743124' ],
    dependentes: [
      {
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011' },
      {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
      }
    ],
    }
 
    function oferecerSeguro(obj){
        const propsClientes = Object.keys(obj);
        if(propsClientes.includes("dependentes")){
            console.log(`oferta de seguro de vida para ${obj.nome}`);
        }

    }
    console.log(Object.values(clientes))
    console.log(Object.entries(clientes))
    oferecerSeguro(cliente)