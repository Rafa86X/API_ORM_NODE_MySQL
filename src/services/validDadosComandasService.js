function validDadosComandasService (dados){

    if(!dados.comanda.hasOwnProperty('numero_comanda')){
        throw new Error('Esta faltando o campo numero_comanda.')
    } 
    if(dados.comanda.numero_comanda === ''){
        throw new Error('numero_comanda da comanda nao pode ser vazio')
    }
    ///////////////////////////////////////////////
    if(!dados.comanda.hasOwnProperty('data')){
        throw new Error('Esta faltando o campo data.')
    } 
    if(dados.comanda.data === ''){
        throw new Error('Data da comanda nao pode ser vazio')
    }
    ///////////////////////////////////////////////
    if(!dados.comanda.hasOwnProperty('id_funcionario')){
        throw new Error('Esta faltando o campo id_funcionario.')
    } 
    if(dados.comanda.id_funcionario === ''){
        throw new Error('id_funcionario da comanda nao pode ser vazio')
    } 
}

module.exports = { validDadosComandasService }; 