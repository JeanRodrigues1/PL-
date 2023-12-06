import Cliente from "../../modelo/cliente";

export default function listarProdutosConsumidos(cliente: Cliente) {
    console.log(`\nProdutos utilizados pelo cliente: ${cliente.nome}`)

    for (let x = 0; x < cliente.getProdutosUtilizados.length; x++) {
        console.log(`${x + 1} - ${cliente.getProdutosUtilizados[x].nome}`)
    }
}