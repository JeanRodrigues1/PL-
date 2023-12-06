import Cliente from "../../modelo/cliente";
import Listagem from "./lista";

export default class ListaClientes5 extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log('\nTop 5 clientes que mais consumiram: \n')
        this.clientes.forEach(cliente => {
            let listaProdutosConsumidos = []
            let listaServicosAtribuidos = []
            let totalGastoProduto = 0
            let totalGastoServico = 0
            for (let x = 0; x < cliente.getProdutosUtilizados.length; x++) {
                listaProdutosConsumidos.push(cliente.getProdutosUtilizados[x].nome)
                totalGastoProduto += cliente.getProdutosUtilizados[x].valor
            }
            for (let y = 0; y < cliente.getServicosUtilizados.length; y++) {
                listaServicosAtribuidos.push(cliente.getServicosUtilizados[y].nome)
                totalGastoServico += cliente.getServicosUtilizados[y].valor
            }
            let totalGasto = totalGastoProduto + totalGastoServico
            cliente.valorGasto = totalGasto
        })
        const clientesOrdenados = this.clientes.sort((a, b) => b.valorGasto - a.valorGasto)
        const clientes5 = clientesOrdenados.slice(0,5)     
        clientes5.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: R$ ${cliente.valorGasto} gastos.\n`)
        })
    }
}