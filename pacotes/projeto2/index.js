import pensador from "pensador-scrap";

const {error,success} = await pensador.search(
    {
        query: "Dalai Lama",
        limit:12
    })
   

    // console.log(error);
    // console.log(success);

const pensamentos = success.thought;
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
const pensamentoSelecionado = pensamentos[indiceAleatorio].content; 


console.log(pensamentoSelecionado);