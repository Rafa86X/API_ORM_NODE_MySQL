/* eslint-disable linebreak-style */
const db = require('../models');


async function getOneComandaService (data, n_comanda){
    const comandas = await db.comandas.findAll({
        attributes:['id','comanda','data','descricao','nome_cliente','preco','paga','id_funcionario','id_produto'],
        where: {
            data: data,
            comanda: n_comanda
        }
    });

    const produtos  = await db.produtos.findAll();
    const funcionarios = await db.funcionarios.findAll();

    let comandex = [];
    let comandex2 = [];
    let i = 0;
    let j = 0;
    
    do{
        do{
            if(comandas[i].comanda === j){
                comandex.push(comandas[i]);
            }
            i++;
        }while(i<comandas.length);
        comandex2.push(comandex);
        i=0;
        comandex = [];
        j++;
    }while(j<3000);
                
    var comandexSemVazios = comandex2.filter((item)=>{
        if(item[0] != undefined)
            return item;                
    });
           
    let q=0;
    let objComanda = [];
    let subitens = [];         
    let itemX = comandexSemVazios[0];

    let item = itemX; 

    if(item[0].comanda != null){
        item= {
            comanda: item[0].comanda,
            data: item[0].data,
            funcionario: getNomeFuncucionario(item[0].id_funcionario),
            nome_cliente: item[0].nome_cliente,
            paga:item[0].paga,
    
        };
        while(q<itemX.length){
            let subitem = {
                id:itemX[q].id,
                preco: itemX[q].preco,
                produto: getNomeProduto(itemX[q].id_produto),                
                descricao: itemX[q].descricao
            };
                            
            subitens.push(subitem);
                            
            q++;
        }
        let itensDaComanda ={itens:subitens};
        let objComand = [];
        objComand.push(item);
        objComand.push(itensDaComanda);
        objComanda[0] = objComand;
                       
        q=0;
        subitens = [];
    }                       

    return objComanda[0];    

    function getNomeFuncucionario(id) {
        
        const nome = funcionarios.filter(item => {
                
            if(item.id == id){
                    
                return item;
            }
        });
        return nome[0].nome;
    }

    function getNomeProduto(id) {
        
        const nome = produtos.filter(item => {
            if(item.id == id){
                return item;
            }
        });

        return nome[0].nome_produto;
    }
}

module.exports = { getOneComandaService }; 