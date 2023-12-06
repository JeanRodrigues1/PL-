import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do produto`);       
        let nomeProduto = this.entrada.receberTexto('Digite o nome do produto: ')
        let valorProduto = this.entrada.receberNumero('Digite o valor do produto: ')
        let produto = new Produto()
        produto.nome = nomeProduto
        produto.valor = valorProduto        
        this.produtos.push(produto)        
        console.log(`\nCadastro realizado com sucesso!\n`);
    }
}