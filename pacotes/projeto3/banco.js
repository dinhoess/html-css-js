import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

let dadosManipulaveis = _carregarValores() // Formato{nome,id}

// let ultimoIdRegistrado = dadosManipulaveis[dadosManipulaveis.length -1]?.id ?? -1
// let idGlobal = ultimoIdRegistrado + 1;

 function _carregarValores(){
    const dadosJson = fs.readFileSync("banco.json","utf8");
    const dados = JSON.parse(dadosJson); 
    return dados;
}

export function persistirValores(){
    const dadosJson = JSON.stringify(dadosManipulaveis,null,4);
    fs.writeFileSync('banco.json',dadosJson, "utf8");
}

export function salvar(nome, id){
    const indice = dadosManipulaveis.findIndex((obj)=>obj.id === id);
    if (indice >= 0){//alteracao
        dadosManipulaveis[indice].nome = nome
    } else {
        const idUnic = uuidv4()
        dadosManipulaveis.push({nome:nome, id:idUnic});        
    }
}

export function deletar(id){
    const dadosFiltrados = dadosManipulaveis.filter((dado) =>{
        return dado.id != id 
    }) 
  return dadosManipulaveis = dadosFiltrados;  
}

export function pegaDados(){
    const dadosImprimiveis = dadosManipulaveis.map((dado)=> {
        return `${dado.nome} ->  ${dado.id}`
    })
    return dadosImprimiveis;
}
