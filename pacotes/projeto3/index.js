import { pegaDados,deletar, salvar, persistirValores} from "./banco.js";
import {exit, menu, ler, textoVerde, textoAzul} from "./interface.js";
const itemMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " Sair " ];

let nome;
let id;
while(1){
 const selecionado = await menu(itemMenu);
 switch(selecionado.trim().toLocaleLowerCase()){
   case "adicionar":
    nome = await ler(`\n Digite o nome do Usuario:`);
    salvar(nome);
    textoVerde("Feito!")
    break;
   case "editar" :
    id = await ler(`\n ID Para Editar: `);
    nome = await ler("Nome para Atualizar: ")
    salvar(nome,+id);
    textoVerde("Feito!")    
    break;
   case "deletar":
    id = await ler("ID Para EdExcluir: ");   
    deletar(+id);
    textoVerde("Feito!")      
    break;
   case "ver todos": 
    const dados = pegaDados();
     textoAzul(dados)
     break;
   case "persistir": 
     persistirValores();
     textoVerde("Feito!");
    break;
   case "sair": 
     exit();
     textoVerde("Até mais...")
   default:
    console.log("Opção inválida");

 }

}