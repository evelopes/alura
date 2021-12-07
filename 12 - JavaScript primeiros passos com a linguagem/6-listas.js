console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;              ctrl+k+c transforma selecionado em comentário
// const rioDeJaneiro = `Rio de Janeiro`;     ctrl+k+u retorna a sua forma normal


const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);


listaDeDestinos.push(`Manaus`, `Porto Alegre`); // adiciona um item na lista

listaDeDestinos.splice(5,1);

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos[2], listaDeDestinos[0]);