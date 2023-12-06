import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosUtilizados: Array<Produto>
    private servicosUtilizados: Array<Servico>
    private pets: Array<Pet>
    public valorGasto: number
    public quantidadeTotalConsumida: number
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosUtilizados = []
        this.servicosUtilizados = []
        this.pets = []
        this.valorGasto = 0
        this.quantidadeTotalConsumida = 0
    }
    
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    
    public get getProdutosUtilizados(): Array<Produto> {
        return this.produtosUtilizados
    }
    public get getServicosUtilizados(): Array<Servico> {
        return this.servicosUtilizados
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public addPet(pet: Pet){
        this.pets.push(pet)
    }

    public removePet(pet: Pet) {
        const index = this.pets.indexOf(pet)
        if (index !== -1) {
            this.pets.splice(index, 1)
        }
    }

    public addRG(rg: RG) {
        this.rgs.push(rg)
    }

    public removeRG(rg: RG) {
        const index = this.rgs.indexOf(rg)
        if (index !== -1) {
            this.rgs.splice(index, 1)
        }
    }

    public addTelefone(telefone: Telefone) {
        this.telefones.push(telefone)
    }

    public removeTelefone(telefone: Telefone) {
        const index = this.telefones.indexOf(telefone)
        if (index !== -1) {
            this.telefones.splice(index, 1)
        }
    }

    public useProduto(produto: Produto) {
        this.produtosUtilizados.push(produto)
    }

    public atributeServico(servico: Servico) {
        this.servicosUtilizados.push(servico)
    }
}