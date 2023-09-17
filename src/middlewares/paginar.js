async function paginar(req, res) {

    try {
        const { limite = 10, pagina = 1 } = req.query;
    
    
        const dados = req.dados;
        const numItens = dados.length;

        console.log(dados);

        if(dados[0] == null){
            throw new Error('Sem resultados para essa busca');
        }
        const novaLista = montaLista(dados,limite,pagina);
       
        const numeroPaginas =  calcPagina(numItens,limite);
            
        const paginacao = {paginacao : {
            numeroTotalItens: numItens,
            numeroItensPorPagina: limite,
            paginaAtual: pagina,
            numeroTotaldePaginas: parseInt(numeroPaginas.toFixed())
        }};
        const resultCompleto = novaLista.concat(paginacao);
    
        res.status(200).json(resultCompleto);
        
    } catch (error) {
        res.status(500).json({ message: `${error} erro no middwarer` });
        
    }
}
    
function calcPagina (a,b){
    const c =a/b;
    if((c > 0.01)&&(c<0.5))
    {return 1;}
    else
    {return a/b;}
    
}
    
function montaLista (array = [],limiteObjetos, paginacao){

    let retorno = [];
    let i =0;
    
    i = (paginacao-1)*limiteObjetos;
    do{
        if(i < limiteObjetos*paginacao){
            retorno.push(array[i]);
        }
        i= i+1;
    
    
    }while(i<array.length);
    
    return retorno;
    
}

module.exports = { paginar }; 
