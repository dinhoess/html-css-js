import fs from "fs";

let dadosManipulaveis = _carregarValores() // Formato{nome,id}

let ultimoIdRegistrado = dadosManipulaveis[dadosManipulaveis.length -1].id
console.log(ultimoIdRegistrado);

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
    dadosManipulaveis.push({nome:nome, id:id});
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
