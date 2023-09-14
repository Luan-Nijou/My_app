import { ListaProdutos } from "../components/ListaProdutos"

export default function Produtos() {

  document.title = "Lista de Produtos"

  return (
    <>
      <h1>Lista de Produtos</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Nome do produto</th>
              <th>Descrição do produto</th>
              <th>Preço do Produto</th>
            </tr>
            </thead>

            <tbody>
              {ListaProdutos.map((item,indice)=>(
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.preco}</td>
                </tr>
              ))}
            </tbody>
            
            <tfoot>
              <td colSpan={4}>PRODUTOS DIVERSOS</td>
            </tfoot>

        </table>
      </div>
    </>
  )
}
