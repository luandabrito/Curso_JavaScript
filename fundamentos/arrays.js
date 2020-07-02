const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //tamanho do array

valores.push({id:3}, false, null, 'teste') // inserir itens no array
console.log(valores)

console.log(valores.pop()) //retira o ultimo item do array
console.log(valores)
delete valores[0] // deleta o item selecionado do array
console.log(valores)

console.log(typeof valores) // informa qual o tipo