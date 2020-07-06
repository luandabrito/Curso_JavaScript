// novo recurso do ES2015

const pessoa = {
    nome: 'Maria',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // retirando os atributos nome e idade do objeto pessoa, nesse caso as variáveis ficam com o mesmo nome.
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // retirando os atributos nome e idade do objeto pessoa, mas utilizando outra chave para identificar ('n' e 'i').
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero: num} } = pessoa
console.log(logradouro, num)