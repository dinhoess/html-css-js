import pensador from "pensador-scrap";
import fs from "fs";

const autor = "Mario Sergio Cortela";

let pensamentoParaSalvar;

const { error, success } = await pensador.search(
    {
        query: autor,
        limit: 12
    })

// console.log(error);
// console.log(success);
try {
    const pensamentos = success.thought;
    const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
    const pensamentoSelecionado = pensamentos[indiceAleatorio].content;

    pensamentoParaSalvar = `Pensamento de ${autor} -> ${pensamentoSelecionado}\n`;
} catch (e) {   
    pensamentoParaSalvar = `${autor} não tem pensamentos! \n`
} finally{

    //writeFileSync("frases.txt",pensamentoParaSalvar,"utf8")
    fs.appendFileSync("frases.txt", pensamentoParaSalvar, "utf8");
    
    const texto = fs.readFileSync("frases.txt", "utf8")
}
//console.log(pensamentoParaSalvar);

// console.log(texto);