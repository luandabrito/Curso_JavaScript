const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)
console.log(prod1.nome)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blablabla: 1,
    }
}

// '{ "nome": "Camisa Polo", "preco": 79.90 }' Obs. exemplo de JSON.

console.log(prod2)
console.log(prod2.nome)