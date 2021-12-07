console.log("Trabalhando com Atribuição de  variáveis");

const idade = 29;
let nome = "Eve";
const sobrenome = "Lopes";

console.log(nome + sobrenome); 
console.log(nome , sobrenome); // console.log(nome + " " + sobrenome);  >> dá o mesmo resultado!
console.log(`Meu nome é ${nome} ${sobrenome}`); // acento invertido p/ chamar a variável dentro da string!
console.log("Meu nome é ${nome} ${sobrenome}"); // Em aspas simples e duplas a variável não é chamada!

nome = nome + sobrenome;
console.log(nome);

let minhaIdade; // declarando variável
minhaIdade = 26; // atribuindo valor
minhaIdade =  minhaIdade + 4;
console.log(minhaIdade);