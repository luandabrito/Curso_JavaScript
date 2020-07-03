{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
// variavel declarada com VAR ficará disponível fora do bloco, se o bloco não for uma função.
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) // a variável não fica visível fora do bloco da função.
