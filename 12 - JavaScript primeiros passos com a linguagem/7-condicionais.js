console.log(`Trabalhando com condicionais`);


const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log(listaDeDestinos);
//     console.log("Comprador maior de idade!");

// } else if (estaAcompanhada) {
//   console.log(listaDeDestinos);
//   console.log("Comprador menor, está acompanhado!");
//   listaDeDestinos.splice(1, 1);

// } else {
//   listaDeDestinos.splice(0, 4); //removendo item 
//   console.log(listaDeDestinos);  //alt-shift-f arruma a identação
//   console.log("Comprador menor de idade, desacompanhado, NÃO VENDER!");  //ctrl+shift+setaParaBaixo, copia a linha
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(2,1); //removendo item vendido

} else {
  console.log("Comprador menor de idade, desacompanhado, NÃO VENDER!");  //ctrl+shift+setaParaBaixo, copia a linha
}
console.log("Embarque: \n\n");
if (idadeComprador >=18 && temPassagemComprada){
  console.log("Boa Viagem!");
}else{
  console.log("Você não pode embarcar!");
}


console.log(listaDeDestinos);

