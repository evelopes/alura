import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {sistemaAutenticacao} from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 46585236589);
const gerente = new Gerente("Ricardo", 5000,  45444236589);

const estaLogado = sistemaAutenticacao.login(diretor, "123456789");

console.log(estaLogado)