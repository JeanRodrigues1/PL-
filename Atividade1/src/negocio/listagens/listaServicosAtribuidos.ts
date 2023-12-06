import Cliente from "../../modelo/cliente";
export default function listarServicosAtribuidos(cliente: Cliente) {
    console.log(`\nServiços atribuidos ao cliente: ${cliente.nome}`)
    for (let x = 0; x < cliente.getServicosUtilizados.length; x++) {
        console.log(`${x + 1} - ${cliente.getServicosUtilizados[x].nome}`)
    }
}