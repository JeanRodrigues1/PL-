import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

export default function cadastrarPet(cliente: Cliente) {
  let entrada = new Entrada();
  let nomePet = entrada.receberTexto("Digite o nome do seu pet: ");
  let especiePet = entrada.receberTexto("Digite a especie do seu pet: ");
  let racaPet = entrada.receberTexto("Digite a raça do seu pet: ");
  let sexoPet = entrada.receberTexto("Digite o gênero do seu pet: ");
  let novoPet = new Pet(nomePet, racaPet, sexoPet, especiePet);
  cliente.addPet(novoPet);


}
