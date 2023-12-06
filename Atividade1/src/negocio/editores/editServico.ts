import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico";

export default class EditorServico {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(servico: Servico): void {
        console.log(`\nCaso desejado, edite as informações dos serviços!`);
        let nome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
        let valor = this.entrada.receberNumero(`Digite o novo preço do serviço: `)
        servico.nome = nome
        servico.valor = valor        
        console.log(`\nEdição bem sucedida! \n`);
    }
}