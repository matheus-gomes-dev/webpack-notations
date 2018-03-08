/* --- Testing ES6 transpiling ---*/

import Pessoa from './pessoa' //só é reconhecido pelo browser após Babel
const pessoa = new Pessoa('Matheus')
console.log(pessoa.toString())


/* --- Testing spread operator plugin --- */
const produto = {
	nome: "Caneta Preta",
	preco: 1.90,
	desconto: 0.05
}
function clone(objeto) {
	return { ...objeto} //spread operator
}
const novoProduto = clone(produto);
novoProduto.nome = "Caneto Azul";
console.log(produto, novoProduto)


/* --- testing React --- */
import 'react'
console.log("React ok");
export default props => (<h1>Olá</h1>)