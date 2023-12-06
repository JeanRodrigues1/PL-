import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastros/cadastroCliente";
import CadastroProduto from "../negocio/cadastros/cadastroProduto";
import CadastroServico from "../negocio/cadastros/cadastroServicos";
import EditorCliente from "../negocio/editores/editCliente";
import EditorProduto from "../negocio/editores/editProduto";
import ListagemClientes from "../negocio/listagens/listaCliente";
import ListagemProdutos from "../negocio/listagens/listaProduto";
import ListagemServicos from "../negocio/listagens/listaServicos";
import Selecionador from "../negocio/buscas/selecionar";
import SelecionadorProduto from "../negocio/buscas/selecionarProduto";
import SelecionadorServico from "../negocio/buscas/selecionarServico";
import EditorServico from "../negocio/editores/editServico";
import cadastrarRG from "../negocio/cadastros/cadastroNovoRG";
import cadastrarPet from "../negocio/cadastros/cadastroNovoPet";
import cadastrarTelefone from "../negocio/cadastros/cadastroNovoTelefone";
import listarProdutosConsumidos from "../negocio/listagens/listaConsumoProduto";
import listarServicosAtribuidos from "../negocio/listagens/listaServicosAtribuidos";
import ListaClientes5 from "../negocio/listagens/listaConsumoValor";
import ListaClientes10 from "../negocio/listagens/listaDaQuantidade";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagens/listaMaiorConsumoProdutoServico";
import SelecionadorPet from "../negocio/buscas/selecionarPet";
import EditorPets from "../negocio/editores/editPet";

console.log(`\nOlá, você entrou no gerenciamento PetLovers! O que deseja? `);
let empresa = new Empresa();
let execucao = true;
while (execucao) {
  console.log(`Digite a opção desejada:`);
  console.log("\nCadastro de Clientes: ");
  console.log(`1. Cadastrar cliente`);
  console.log("2. Adicionar RG");
  console.log("3. Adicionar telefone");
  console.log(`4. Editar informações do cliente`);
  console.log(`5. Excluir informações do cliente`);
  console.log(`6. Listar todos os clientes\n`);
  console.log("------------------------------------------------");

  console.log("\nCadastro de pets: ");
  console.log("7. Cadastrar pet");
  console.log(`8. Editar informações do pet\n`);
  console.log("------------------------------------------------");

  console.log("\nCadastro de serviços: ");
  console.log(`9. Cadastrar serviço`);
  console.log(`10. Editar serviço`);
  console.log(`11. Listar todos os serviços`);
  console.log(`12. Excluir serviço\n`);
  console.log("-----------------------------------------------");

  console.log("\nCadastro de produtos: ");
  console.log(`13. Cadastre um produto`);
  console.log(`14. Listar todos os produtos`);
  console.log(`15. Editar produto`);
  console.log(`16. Excluir produto\n`);
  console.log("-----------------------------------------------");

  console.log("\nProcedimentos: ");
  console.log("17. Consumir produto");
  console.log("18. Atribuir serviço\n");
  console.log("-----------------------------------------------");

  console.log("\nListas🐾");
  console.log("19. Produtos e serviços mais consumidos");
  console.log("20. Top 5 clientes que mais consumiram produtos(serviços em valor)");
  console.log("21. Top 10 clientes que mais consumiram produtos(serviços em quantidade)\n");
  console.log("-----------------------------------------------");

  console.log(`\n0. Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`\nEscolha uma opção: `);

  switch (opcao) {
    // *Cliente*
    case 1:
      let cadastro = new CadastroCliente(empresa.getClientes);
      cadastro.cadastrar();
      break;

    case 2:
      let rgCliente = entrada.receberTexto("Digite o CPF do cliente para adicionar um RG: ");
      let selecionarClienteRG = new Selecionador(empresa.getClientes);
      let clienteSelecionadoRG = selecionarClienteRG.selecionar(rgCliente);

      console.log(`\nNome do cliente selecionado: ${clienteSelecionadoRG.nome}`);

      cadastrarRG(clienteSelecionadoRG);

      console.log(`\nRG do cliente adicionado com sucesso! ${clienteSelecionadoRG.nome}.`);
      break;

    case 3:
      let clienteCpf = entrada.receberTexto("Digite o CPF do cliente para adicionar um telefone: ");
      let selecionarClienteTelefone = new Selecionador(empresa.getClientes);
      let clienteSelecionadoTelefone = selecionarClienteTelefone.selecionar(clienteCpf);

      console.log(`Nome do cliente selecionado: ${clienteSelecionadoTelefone.nome}`);

      cadastrarTelefone(clienteSelecionadoTelefone);

      console.log(`\nTelefone do cliente adicionado com sucesso! ${clienteSelecionadoTelefone.nome}.`);
      console.log(clienteSelecionadoTelefone.getTelefones);
      break;

    case 4:
      let editarCpf = entrada.receberTexto("Digite um CPF do cliente para edição: ");
      let selecionadorClienteEditar = new Selecionador(empresa.getClientes);
      let editarCliente = selecionadorClienteEditar.selecionar(editarCpf);

      let editor = new EditorCliente();
      editor.editar(editarCliente);

      console.log("\nInformações do cliente editadas com sucesso! :)");
      break;

    // *Produto*
    case 5:
      let cpf = entrada.receberTexto("Digite um CPF para a exclusão: ");
      let selectCliente = new Selecionador(empresa.getClientes);
      let cliente = selectCliente.selecionar(cpf);

      console.log(`Nome do cliente selecionado: ${cliente.nome}`);

      let indice = empresa.getClientes.indexOf(cliente);
      delete empresa.getClientes[indice];

      console.log("\nInformações do cliente exluídas com sucesso. :)");

      break;

    case 6:
      let listagem = new ListagemClientes(empresa.getClientes);
      listagem.listar();
      break;

    case 7:
      let cpfCliente = entrada.receberTexto("Digite o CPF do cliente para adicionar um pet: ");
      let selecionarCliente = new Selecionador(empresa.getClientes);
      let clienteSelecionado = selecionarCliente.selecionar(cpfCliente);

      console.log(`Nome do cliente selecionado: ${clienteSelecionado.nome}`);

      cadastrarPet(clienteSelecionado);

      console.log(`\nPet adicionado com sucesso às informações do cliente ${clienteSelecionado.nome}.`);
      break;

    case 8:
      let cpfEditarPet = entrada.receberTexto("Digite o CPF do cliente do pet que deseja editar: ");
      let selecionaCliente = new Selecionador(empresa.getClientes);
      let cliente_buscado = selecionaCliente.selecionar(cpfEditarPet);

      console.log("Nome do cliente: " + cliente_buscado.nome);

      let pet = entrada.receberTexto("Digite o nome do pet que deseja editar: ");
      let selecionaPet = new SelecionadorPet(cliente_buscado.getPets);
      let petEncontrado = selecionaPet.selecionar(pet);

      console.log(`Pet selecionado: ${petEncontrado.getNome}`);

      let editorPet = new EditorPets();
      editorPet.editar(petEncontrado);
      break;

    // *Serviço*
    case 9:
      let cadastroServico = new CadastroServico(empresa.getServicos);
      cadastroServico.cadastrar();
      break;

    case 10:
      let nomeServico = entrada.receberTexto("Digite o nome do serviço que deseja editar: ");
      let selecionadorServicoEditar = new SelecionadorServico(empresa.getServicos);
      let novoServico = selecionadorServicoEditar.selecionar(nomeServico);

      let editarServico = new EditorServico();
      editarServico.editar(novoServico);
      console.log("\nServiço editado com sucesso! :)");
      break;

    case 11:
      let listagemServicos = new ListagemServicos(empresa.getServicos);
      listagemServicos.listar();
      break;

    case 12:
      let servicoNome = entrada.receberTexto("Digite o nome do serviço que deseja excluir: ");
      let selecionadorServico = new SelecionadorServico(empresa.getServicos);
      let servico = selecionadorServico.selecionar(servicoNome);

      console.log(`Serviço selecionado: ${servico.nome}`);

      let indiceServico = empresa.getServicos.indexOf(servico);
      delete empresa.getServicos[indiceServico];
      console.log("\nServiço excluído com sucesso! :)");
      break;

    case 13:
      let cadastroProduto = new CadastroProduto(empresa.getProdutos);
      cadastroProduto.cadastrar();
      break;

    case 14:
      let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
      listagemProdutos.listar();
      break;

    case 15:
      let produtoNome = entrada.receberTexto("Digite o nome do produto que deseja editar: ");
      let selecionadorProdutoEditar = new SelecionadorProduto(empresa.getProdutos);
      let produtoEditar = selecionadorProdutoEditar.selecionar(produtoNome);

      let editorProduto = new EditorProduto();
      editorProduto.editar(produtoEditar);
      console.log("\nProduto editado com sucesso! :)");
      break;

    case 16:
      let nomeProduto = entrada.receberTexto("Digite o nome do produto que deseja excluir: ");
      let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos);
      let produto = selecionadorProduto.selecionar(nomeProduto);

      console.log(`Nome do produto selecionado: ${produto.nome}`);

      let indiceProduto = empresa.getProdutos.indexOf(produto);
      delete empresa.getProdutos[indiceProduto];

      console.log("\nProduto excluído com sucesso! :)");
      break;

    case 17:
      let input = entrada.receberTexto("Digite o CPF do cliente que deseja consumir o produto: ");
      let encontraCliente = new Selecionador(empresa.getClientes);
      let clienteEncontrado = encontraCliente.selecionar(input);

      let inputPet = entrada.receberTexto("Digite o nome do pet que irá consumir o produto: ");
      let selecionarPet = new SelecionadorPet(clienteEncontrado.getPets);
      let petFiltrado = selecionarPet.selecionar(inputPet);

      console.log(`\nNome do cliente selecionado: ${clienteEncontrado.nome}`);

      let inputProduto = entrada.receberTexto("Digite o nome do produto que deseja consumir: ");
      let buscaProduto = new SelecionadorProduto(empresa.getProdutos);
      let produtoEncontrado = buscaProduto.selecionar(inputProduto);

      clienteEncontrado.useProduto(produtoEncontrado);
      petFiltrado.useProduto(produtoEncontrado);
      listarProdutosConsumidos(clienteEncontrado);
      break;

    case 18:
      let input_cpf = entrada.receberTexto("Digite o CPF do cliente para atribuir um serviço: ");
      let encontrarCliente = new Selecionador(empresa.getClientes);
      let cliente_encontrado = encontrarCliente.selecionar(input_cpf);

      let inserePet = entrada.receberTexto("Digite o nome do pet que irá utilizar o serviço: ");
      let selectPet = new SelecionadorPet(cliente_encontrado.getPets);
      let filtraPet = selectPet.selecionar(inserePet);

      console.log(`\nNome do cliente selecionado: ${cliente_encontrado.nome}`);

      let inputServico = entrada.receberTexto("Digite o nome do serviço que deseja atribuir: ");
      let buscaServico = new SelecionadorServico(empresa.getServicos);
      let servicoEncontrado = buscaServico.selecionar(inputServico);

      cliente_encontrado.atributeServico(servicoEncontrado);
      filtraPet.atributeServico(servicoEncontrado);
      listarServicosAtribuidos(cliente_encontrado);
      break;

    case 19:
      let listagemProdutoServicos = new ListagemProdutosServicosMaisConsumidos(empresa.getClientes);
      listagemProdutoServicos.listar();
      break;

    case 20:
      let lista5 = new ListaClientes5(empresa.getClientes);
      lista5.listar();
      break;

    case 21:
      let lista10 = new ListaClientes10(empresa.getClientes);
      lista10.listar();
      break;

    case 0:
      execucao = false;
      console.log(`Até mais!`);
      break;

    default:
      console.log(`Erro! Digite outro comando!`);
  }
}
