import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";

export default class EditorPets {
  private entrada: Entrada;
  constructor() {
    this.entrada = new Entrada();
  }
  public editar(pet: Pet): void {
    console.log("Escolha o que quer editar: ");
    console.log("1. Nome");
    console.log("2. Espécie");
    console.log("3. Raça");
    console.log("4. Gênero");
    let escolha = this.entrada.receberNumero("\nEscolha a opção desejada: ");
    switch (escolha) {
      case 1:
        let nome = this.entrada.receberTexto(`Digite o novo nome do pet: `);
        pet.setNome(nome);
        break;
      case 2:
        let especie = this.entrada.receberTexto(`Digite a nova espécie do pet: `);
        pet.setEspecie(especie);
        break;
      case 3:
        let raca = this.entrada.receberTexto(`Digite a nova raça do pet: `);
        pet.setRaca(raca);
        break;
      case 4:
        let sexo = this.entrada.receberTexto(`Digite o novo sexo do Pet: `);
        pet.setSexo(sexo);
        break;
      default:
        console.log("Erro. Não foi possível identificar sua escolha!");
    }
  }
}
