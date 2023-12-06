import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto";

export default class EditorProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(produto: Produto): void {
        console.log(`\nCaso desejado, edite as informações dos produtos!`);
        let nome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
        let valor = this.entrada.receberNumero(`Digite o novo valor do produto: `)      
        produto.nome = nome
        produto.valor = valor
        console.log(`\nEdição bem sucedida! \n`);

        
        
    }
    
}