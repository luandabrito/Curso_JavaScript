const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(saudacao, cliente['nome'])
console.log(exec(), cliente['nome'])
console.log(cliente['endereco']['numero'])