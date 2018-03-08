import Pessoa from './pessoa' //só é reconhecido pelo browser após Babel

const pessoa = new Pessoa('Matheus')
console.log(pessoa.toString())