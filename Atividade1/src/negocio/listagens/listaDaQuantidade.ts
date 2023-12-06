import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "./lista";

export default class ListaClientes10 extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log('\nOs 10 clientes que mais consumiram em quantidade:\n')

        this.clientes.forEach(cliente => {
            let quantidadeProdutosConsumidos    = cliente.getProdutosUtilizados.length
            let quantidadeServicosConsumidos     = cliente.getServicosUtilizados.length
            let quantidadeTotalConsumida        = quantidadeProdutosConsumidos + quantidadeServicosConsumidos

            cliente.quantidadeTotalConsumida = quantidadeTotalConsumida
        })

        const clientesOrdenados = this.clientes.sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida)
        const clientes10 = clientesOrdenados.slice(0,10)
        
        clientes10.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: ${cliente.quantidadeTotalConsumida} produtos ou serviços consumidos.\n`)
        })
    }

    public listarPorEspecieRaca() : void {
        console.log('\nOs 10 produtos mais consumidos / serviços mais consumidos por espécie e raça de pet:\n')

        let input = this.entrada.receberTexto('Listar por espécie ou raça? Escolha uma opção: ')
        this.clientes.forEach(cliente => {
            let pets = cliente.getPets
            
            pets.forEach(pet => {
                let quantidadeProdutosConsumidosPet     = pet.getProdutosUtilizados.length
                let quantidadeServicosConsumidosPet      = pet.getServicosUtilizados.length
                let quantidadeTotalConsumidaPet         = quantidadeProdutosConsumidosPet + quantidadeServicosConsumidosPet

                pet.quantidadeTotalConsumida = quantidadeTotalConsumidaPet
            })
        })
    }
}