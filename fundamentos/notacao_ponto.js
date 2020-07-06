// utiliza-se o .(ponto) para acessar um metódo de um objeto.
// utiliza-se também o .(ponto) para acessar umm atributo de um objeto.
// Pode criar um atributo dinamicamente, mesmo que não exista o atributo, ex. obj.nome = 'Bola'

const obj = {}
obj.nome = 'Bola'
// obj['nome'] = 'Bola ' tbm serve para atribuir valor a atributos.

console.log(obj.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)