import Produto from "./produto";
import Servico from "./servico";

export default class Pet {
  private nome: string;
  private especie: string;
  private raca: string;
  private sexo: string;
  private produtosUtilizados: Array<Produto>;
  private servicosUtilizados: Array<Servico>;
  public quantidadeTotalConsumida: number;
  constructor(nome: string, raca: string, sexo: string, especie: string) {
    this.nome = nome;
    this.raca = raca;
    this.sexo = sexo;
    this.especie = especie;
    this.produtosUtilizados = [];
    this.servicosUtilizados = [];
    this.quantidadeTotalConsumida = 0;
  }

  public get getNome() {
    return this.nome;
  }
  public get getRaca() {
    return this.raca;
  }
  public get getSexo() {
    return this.sexo;
  }
  public get getEspecie() {
    return this.especie;
  }
  public get getProdutosUtilizados() {
    return this.produtosUtilizados;
  }
  public get getServicosUtilizados() {
    return this.servicosUtilizados;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public setEspecie(especie: string) {
    this.especie = especie;
  }

  public setRaca(raca: string) {
    this.raca = raca;
  }

  public setSexo(sexo: string) {
    this.sexo = sexo;
  }

  public useProduto(produto: Produto) {
    this.produtosUtilizados.push(produto);
  }

  public atributeServico(servico: Servico) {
    this.servicosUtilizados.push(servico);
  }
}
