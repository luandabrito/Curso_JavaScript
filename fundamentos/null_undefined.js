// JS utiliza passagem por referência em casos de objetos, e passagem por valor em caso de tipos primitivos. Ex. a = 3; b = a (passagem por valor) // Ex2. a = {nome = "maria"}; b = a (passagem por referência)

let valor // não inicializada
console.log(valor)

valor = null
console.log(valor) // ausência de valor, entretanto está definida.

// not defined significa quando não foi declarada, não existe.
// undefined significa quando não foi inicializada.
// foi inicializada mas não tem valor.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuição de undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)