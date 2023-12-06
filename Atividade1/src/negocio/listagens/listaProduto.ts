import Produto from "../../modelo/produto";
import Listagem from "./lista";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nProdutos:\n`);
        this.produtos.forEach(produto => {
            console.log(`\nNome do produto: ${produto.nome}`);
            console.log(`Valor: R$ ${produto.valor.toFixed(2)}`);
            
        });
        console.log(`----------------------------------------------`);
        console.log(`\n`);
    }
}