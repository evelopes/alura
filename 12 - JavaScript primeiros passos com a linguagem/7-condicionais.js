console.log(`Trabalhando com condicionais`);


const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 12;
const estaAcompanhada = true;
console.log("Destinos possíveis:");

if(idadeComprador >= 18){
  console.log(listaDeDestinos); 
  console.log("Comprador maior de idade!");

}
else{//A pessoa é menor de idade
    if(estaAcompanhada){
      console.log(listaDeDestinos); 
      console.log("Comprador menor, está acompanhado!");
      listaDeDestinos.splice(1,1);

    }
    else{
      listaDeDestinos.splice(0,4); //removendo item 
      console.log(listaDeDestinos);
      console.log("Comprador menor de idade, NÃO VENDER!");  //ctrl+shift+setaParaBaixo, copia a linha
    }
}



