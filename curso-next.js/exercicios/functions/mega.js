export function mega(qtde = 6, numero = []) {
    if (qtde < 6 || qtde > 60) {
        throw "Quantidade inválida!"
    }

    if (numero.length === qtde) {
        return numero.sort((n1, n2) => n1 - n2 ) // ordenar
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1 // números aleatórios de 1 a 60
    if(!numero.includes(numeroAleatorio)) {
        return mega(qtde, [...numero, numeroAleatorio])
    } else {
        return mega(qtde, numero)
    }
}
