import Cabeçalho from "./components/Cabeçalho";
import Baixo from './components/Baixo.jsx'
import Seção from './components/Seção.jsx'

// App -> main -> index -> root
export default function App(){
  
  //Área declarativa(funções,variaveis,etc)

  return(
    //Área de ação
    //fragment 
    <>
      <div>
        {/* Comentário */}

        {/* Criar um cabeçalho com header , um h1 e 
        uma lista ul com 3 itens com links  */}
        
        <Cabeçalho/>
        {/* Criar uma seção de conteúdo com uma div e 
        2 parágragos com 3 linhas de lorem.  */}
        <Seção/>
        {/*  Crir um rodapé com uma div com uma lista ul e 3 itens 
        com links para redes sociais,um parágrafo com o texto : 
        Todos os meus direitos reservados, 2023, não se esqueça 
        do código do símbolo do copyright  */}
        <Baixo/>
        
      </div>
    </>
  )
}