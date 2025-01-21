import kit from "terminal-kit";
const term = kit.terminal;

export async function menu(itens){
 let option = {
    style: term.inverse,
    selectedStyle:term.white.bgCyan
 }
 const opcaoSelecionada = await term.singleLineMenu(itens,option).promise
 return opcaoSelecionada.selectedText;
}

export function exit(){
   process.exit();
}

export async function ler(enunciado){
   term(`${enunciado}\n\n`);
   const foiLido = await term.inputField().promise;
   return foiLido;
}

export function textoVerde(texto){
   term.green(`\n\n ${texto}`);
}

export function textoAzul(texto){
   term.blue(`\n\n ${texto}`);
}
