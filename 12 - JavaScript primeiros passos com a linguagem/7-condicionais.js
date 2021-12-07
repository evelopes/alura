console.log(`Trabalhando com condicionais`);


const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 12;
console.log("Destinos possíveis:");

if(idadeComprador >= 18){
  console.log(listaDeDestinos); 
  console.log("Comprador maior de idade!");

}
else{
  listaDeDestinos.splice(0,4); //removendo item 
  console.log(listaDeDestinos);
  console.log("Comprador menor de idade, NÃO VENDER!");
}



