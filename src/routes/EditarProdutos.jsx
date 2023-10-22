import  { useState, useEffect } from "react";
import { useParams,  useNavigate } from "react-router-dom";


export default function EditarProdutos() {
  const history =  useNavigate();
  const { id } = useParams();
  
  const [produto, setProduto] = useState({
    id: id,
    nome: "",
    desc: "",
    valor: ""
  });

  useEffect(() => {
    // Carregar dados do produto usando API
    fetch(`http://localhost:5000/produtos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleExclusao = () => {
    // Excluir produto usando API
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      // Redirecionar para a página principal após a exclusão
      history("/");
    })
    .catch((error) => console.error(error));
  };

  const handleEdicao = (e) => {
    e.preventDefault();
    // Atualizar produto usando API
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })
    .then(() => {
      // Redirecionar para a página de detalhes após a edição
      history(`/produtos/${id}`);
    })
    .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Editar Produtos</h1>
      <div>
        <form onSubmit={handleEdicao}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleInputChange}
          />
          <label htmlFor="desc">Desc</label>
          <input
            type="text"
            name="desc"
            value={produto.desc}
            onChange={handleInputChange}
          />
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            name="valor"
            value={produto.valor}
            onChange={handleInputChange}
          />
          <button type="submit">Editar</button>
        </form>
        <button onClick={handleExclusao}>Excluir</button>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export default function EditarProdutos() {
  
//     const {id} = useParams();

//     const[produto, setProduto] = useState({
//       id:id,
//       nome:"",
//       desc:"",
//       valor:""
//     });

//     //http://localhost:5000/produtos/2

//     //Realizando uma requisição para a API-JSON utilizando
//     // o id como parâmetro, para receber um único produto/objeto
//     //Para edição.
//     fetch(`http://localhost:5000/produtos/${id}`)
//     .then((response)=> response.json())
//     .then((response)=> setProduto(response))
//     .catch((error)=> console.error(error));

//   return (
//     <div>
//       <h1>Editar Produtos</h1>

//       <div>
//         <form>
//           <fieldset>
//             <legend>Produto Selecionado</legend>
//             <div>
//               <label htmlFor="">Nome</label>
//               <input type="text" name="nome" value={produto.nome} onChange={(e)=>setProduto(e.target.value)}/>
//             </div>
//             <div>
//               <label htmlFor="">Desc</label>
//               <input type="text" name="desc" value={produto.desc} onChange={(e)=>setProduto(e.target.value)}/>
//             </div>
//             <div>
//               <label htmlFor="">Valor</label>
//               <input type="number" name="valor" value={produto.valor} onChange={(e)=>setProduto(e.target.value)}/>
//             </div>
//             <div>
//               <button>EDITAR</button>
//             </div>
//           </fieldset>
//         </form>
//       </div>

//     </div>
//   )
// }
