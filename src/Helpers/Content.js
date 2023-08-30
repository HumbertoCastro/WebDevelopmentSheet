import CodeBlock from "../components/CodeBlock/CodeBlock";

export const contentReact = [
  [
    "basic",
    [
      [
        "Começando com React",
        {
          text: "Porque utilizar o React em seu projeto ?",
          conteudo: (
            <div className="content">
              <h1>Por que Utilizar o React em Seu Projeto?</h1>

              <h2>História e Origem</h2>
              <p>
                O React foi criado pelo Facebook e inicialmente lançado em 2013.
                Ele surgiu da necessidade de uma ferramenta eficaz para lidar
                com a complexidade crescente das interfaces de usuário no
                Facebook e em outros aplicativos da empresa. A abordagem do
                React, baseada em componentes reutilizáveis e uma atualização
                eficiente da interface, revolucionou a maneira como as
                aplicações front-end são desenvolvidas.
              </p>

              <h2>Benefícios do React</h2>
              <p>
                O React oferece diversos benefícios para os desenvolvedores:
              </p>
              <ul>
                <li>
                  <strong>Componentização:</strong> A abordagem baseada em
                  componentes facilita a reutilização de código e a manutenção
                  de interfaces complexas.
                </li>
                <li>
                  <strong>Virtual DOM:</strong> O Virtual DOM permite
                  atualizações eficientes na interface, reduzindo o impacto no
                  desempenho e tornando as aplicações mais rápidas.
                </li>
                <li>
                  <strong>Reatividade:</strong> O React oferece um fluxo de
                  dados unidirecional, o que torna o rastreamento e
                  gerenciamento de estados mais previsíveis.
                </li>
                <li>
                  <strong>Ecossistema:</strong> O React possui uma grande
                  comunidade de desenvolvedores, muitas bibliotecas e
                  ferramentas para melhorar a eficiência do desenvolvimento.
                </li>
              </ul>

              <h2>Exemplos de Sites Famosos</h2>
              <p>
                Muitas empresas renomadas utilizam o React em seus projetos.
                Alguns exemplos incluem:
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>{" "}
                  - A própria plataforma que criou o React utiliza-o
                  extensivamente para construir sua interface.
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>{" "}
                  - A plataforma de compartilhamento de fotos utiliza React para
                  criar uma experiência interativa e responsiva.
                </li>
                <li>
                  <a
                    href="https://www.airbnb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Airbnb
                  </a>{" "}
                  - O popular serviço de hospedagem utiliza React para construir
                  uma interface amigável e eficiente.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                O React é uma escolha poderosa para o desenvolvimento front-end,
                oferecendo eficiência, reutilização de código e desempenho
                otimizado. Se você deseja criar interfaces modernas e
                responsivas, o React é uma opção sólida que é apoiada por uma
                comunidade ativa e uma ampla adoção na indústria.
              </p>

              <p>
                Para mais informações, visite a{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  página oficial do React
                </a>
                .
              </p>
            </div>
          ),
        },
        {
          text: "Instalando e iniciando um novo projeto.",
          conteudo: (
            <div className="content">
              <h1>
                Iniciando com o React: Instalando e Criando um Novo Projeto
              </h1>

              <h2>Instalação do Node.js e npm</h2>
              <p>
                Para começar a desenvolver com React, você precisará do Node.js
                e do npm (Node Package Manager) instalados em seu sistema. O npm
                é usado para gerenciar pacotes e dependências, incluindo o
                React.
              </p>
              <p>
                Verifique se o Node.js e o npm estão instalados digitando os
                seguintes comandos no terminal:
              </p>
              <CodeBlock language="bash" code="node -v" />
              <CodeBlock language="bash" code="npm -v" />
              <p>
                Se não estiverem instalados, você pode baixá-los em{" "}
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://nodejs.org/
                </a>
                .
              </p>

              <h2>Criando um Novo Projeto React</h2>
              <p>
                Depois de instalar o Node.js e o npm, você pode criar um novo
                projeto React usando a ferramenta{" "}
                <code className="code">create-react-app</code>.
              </p>
              <CodeBlock
                language="bash"
                code="npx create-react-app meu-projeto-react"
              />
              <CodeBlock language="bash" code="cd meu-projeto-react" />
              <CodeBlock language="bash" code="npm start" />
              <p>
                Isso criará um novo diretório chamado{" "}
                <code className="code">meu-projeto-react</code> e instalará
                todas as dependências necessárias. O comando{" "}
                <code className="code">npm start</code> iniciará o servidor de
                desenvolvimento e abrirá seu novo aplicativo React no navegador.
              </p>
              <p>
                Agora você está pronto para começar a explorar e construir
                aplicativos incríveis com o React!
              </p>
            </div>
          ),
        },
      ],
      [
        "Componentes do React.",
        {
          text: "Conceito de componentes.",
          conteudo: (
            <div className="content">
              <h1>Porque utilizar componentes?</h1>
              <p>
                Imagine que você está construindo uma casa. Em vez de construir
                tudo de uma vez, você divide a casa em partes menores, como
                quartos, sala e cozinha. O React faz algo semelhante com os
                sites, dividindo-os em pedaços chamados{" "}
                <strong>componentes</strong>.
              </p>

              <h1>Conceito de Componentes</h1>
              <p>
                Componentes são como blocos de construção para o seu site. Cada
                componente é uma parte independente que pode conter HTML,
                JavaScript e até mesmo estilos. Por exemplo, pense em um
                componente chamado <em>Cabeçalho</em>. Ele poderia conter o
                logotipo do site e o menu de navegação.
              </p>
              <p>
                Usando componentes, você pode reutilizar pedaços do seu site em
                diferentes lugares. Imagine que você tenha um componente de{" "}
                <em>Botão</em>. Você pode usar esse mesmo botão em várias partes
                do site, mantendo o mesmo estilo e comportamento. Se você quiser
                mudar algo no botão, só precisa fazer isso uma vez no
                componente, e todas as instâncias do botão serão atualizadas.
              </p>
              <p>
                Então, em resumo, o React nos ajuda a construir sites mais
                organizados, econômicos e fáceis de manter, usando a ideia de
                componentes para dividir o trabalho em partes menores e
                reutilizáveis.
              </p>
              <div>
                <h1>Exemplo de um componente Header</h1>
                {
                  <CodeBlock
                    language="javascript"
                    code={`
              import React from 'react';
              import './Header.css';
              import logo from '../../../Helpers/logo192.png'
              
              const Header = () => (
                <div className="Header row s-btw">
                  <h1>React Cheat sheet</h1>
                  <img src={ logo } className='logo' alt='imglogo'/>
                </div>
              );
              
              export default Header;
              `}
                  />
                }
              </div>
            </div>
          ),
        },
        {
          text: "Exemplo pratico",
          conteudo: (
            <div className="content">
              <h1>Exemplo Prático: Benefícios da Componentização no React</h1>

              <h2>Cenário</h2>
              <p>
                Vamos imaginar que você está construindo um aplicativo de lista
                de tarefas. Você deseja adicionar botões para marcar uma tarefa
                como concluída. Você também quer garantir que, se precisar
                atualizar o estilo ou o comportamento desses botões, isso seja
                feito de forma eficiente.
              </p>

              <h2>Sem Componentização</h2>
              <p>
                Primeiro, considere a abordagem sem componentização, onde você
                copia e cola o mesmo código de botão em várias partes do
                aplicativo:
              </p>
              <CodeBlock
                language="html"
                code={`<button class="task-button">Concluir Tarefa</button>`}
              />
              <p>
                Se você quiser fazer uma alteração, como mudar a cor do botão ou
                adicionar um ícone, precisará fazer a mesma alteração em todos
                os lugares onde o botão foi copiado. Isso pode ser demorado e
                propenso a erros.
              </p>

              <h2>Com Componentização</h2>
              <p>
                Agora, vamos usar a componentização para criar um componente{" "}
                <code>TaskButton</code> para o botão de conclusão:
              </p>
              <CodeBlock
                language="javascript"
                code={`
            // TaskButton.js
            import React from 'react';
            
            const TaskButton = () => {
              return <button class="task-button">Concluir Tarefa</button>;
            }
            
            export default TaskButton;
            `}
              />
              <p>
                Agora, em qualquer lugar que você precise usar o botão, você
                simplesmente importa o componente <code>TaskButton</code>:
              </p>
              <CodeBlock
                language="javascript"
                code={`
            import React from 'react';
            import TaskButton from './TaskButton';
            
            const TaskItem = () => {
              return (
                <div class="task-item">
                  <p>Tarefa importante</p>
                  <TaskButton />
                </div>
              );
            }
            
            export default TaskItem;
            `}
              />
              <p>
                Se você precisar fazer uma alteração no botão, basta fazer isso
                no arquivo <code>TaskButton.js</code>. Todas as instâncias do
                botão serão atualizadas automaticamente.
              </p>

              <h2>Benefícios</h2>
              <ul>
                <li>
                  Economiza tempo: Alterações feitas em um único componente se
                  refletem em todos os lugares.
                </li>
                <li>
                  Reduz erros: Não é necessário modificar manualmente cada
                  ocorrência do botão.
                </li>
                <li>
                  Reutilização: Você pode usar o mesmo componente em diferentes
                  partes do aplicativo.
                </li>
              </ul>

              <p>
                A componentização é uma prática fundamental no React que promove
                a organização e a manutenção eficiente do código, tornando o
                desenvolvimento mais produtivo e confiável.
              </p>
            </div>
          ),
        },
      ],

      [
        "Workflow Básico do React",
        {
          text: "Planejando os Componentes",
          conteudo: (
            <div className="content">
              <h1>Workflow Básico do React: Planejando os Componentes</h1>

              <h2>Definindo Componentes no React</h2>
              <p>
                No React, os componentes são como blocos de construção para a
                interface de usuário do seu aplicativo. Eles ajudam a organizar
                o código em partes reutilizáveis, facilitando o gerenciamento e
                a manutenção do projeto. Cada componente pode ter seu próprio
                código, estado e até mesmo estilos.
              </p>
              <p>
                Um exemplo prático seria dividir uma página da web em
                componentes como <code className="code">Header</code>,{" "}
                <code className="code">Navbar</code>,{" "}
                <code className="code">Content</code> e{" "}
                <code className="code">Footer</code>. Cada um desses componentes
                pode ter suas próprias funcionalidades e estilos específicos.
              </p>

              <h2>Planejando Seu Site com Componentes</h2>
              <p>
                Quando você planeja seu site ou aplicativo, pense nas diferentes
                partes ou seções que o compõem. Cada uma dessas partes pode ser
                um candidato a se tornar um componente. Por exemplo, se você
                está criando um site com cabeçalho, navegação, conteúdo e
                rodapé, você pode criar os componentes correspondentes para cada
                um deles.
              </p>
              <p>
                Além disso, dentro de um componente, você pode usar outros
                componentes menores. Por exemplo, dentro do componente{" "}
                <code className="code">Header</code>, você pode usar componentes
                como <code className="code">Logo</code>,{" "}
                <code className="code">Navigation</code> e{" "}
                <code className="code">Button</code>. Isso ajuda a manter uma
                estrutura hierárquica e facilita a reutilização.
              </p>

              <h2>Exemplo de Componentização</h2>
              <p>
                Vamos considerar um site de comércio eletrônico. Ao planejar a
                estrutura, você pode identificar as seguintes partes:
              </p>
              <ul>
                <li>
                  <strong>Header</strong> - contendo um componente para o
                  logotipo, um para a barra de pesquisa e um para o carrinho de
                  compras.
                </li>
                <li>
                  <strong>Navbar</strong> - contendo links para diferentes
                  categorias de produtos. Cada link pode ser um componente.
                </li>
                <li>
                  <strong>Produtos em Destaque</strong> - uma seção mostrando os
                  produtos mais populares. Esses produtos devem ser componentes
                  separados, para se aplicar logicas especificar de interaçao
                  com os mesmos ( caso seu projeto demande)
                </li>
                <li>
                  <strong>Rodapé</strong> - contendo informações de contato e
                  links úteis. Cada link pode ser um componente.
                </li>
              </ul>
              <p>
                Cada uma dessas partes pode ser implementada como um componente.
                Além disso, você pode ter componentes menores dentro deles. Por
                exemplo, o componente <code className="code">Header</code> pode
                conter componentes como <code className="code">Logo</code>,{" "}
                <code className="code">SearchBar</code> e{" "}
                <code className="code">Cart</code>.
              </p>

              <p>
                Usar a abordagem de componentização não apenas organiza seu
                código, mas também facilita a colaboração em equipe e a
                reutilização de código. O React oferece uma maneira eficaz de
                criar uma arquitetura modular e escalável para seus projetos.
              </p>
            </div>
          ),
        },
      ],
      [
        "JSX",
        {
          text: "Sintaxe JSX para renderização de elementos.",
          conteudo: (
            <div className="content">
              <h1>Sintaxe JSX para renderização de elementos no React</h1>
              <p>
                No React, a <strong>sintaxe JSX</strong> é uma extensão do
                JavaScript que permite a criação de elementos de interface de
                usuário de maneira mais declarativa e semelhante ao HTML. Ela é
                uma parte fundamental do React, tornando a renderização de
                componentes e a estruturação da UI mais intuitivas e eficientes.
              </p>
              <p>
                Imagine que você está criando um site. Em vez de criar elementos
                HTML usando métodos JavaScript (como{" "}
                <code className="code">document.createElement</code>), você pode
                usar a sintaxe JSX para escrever código semelhante ao HTML
                diretamente no JavaScript. Isso facilita a criação e o
                entendimento da estrutura do seu aplicativo.
              </p>
              <h2>Exemplo de Sintaxe JSX</h2>
              <div>
                {
                  <CodeBlock
                    language="javascript"
                    code={`
              import React from 'react';
              import './Header.css';
              import logo from '../../../Helpers/logo192.png'
              
              const Header = () => (
                <div className="Header row s-btw">
                  <h1>React Cheat sheet</h1>
                  <img src={ logo } className='logo' alt='imglogo'/>
                </div>
              );
              
              export default Header;
              `}
                  />
                }
              </div>
              <p>
                Re-utilizando o exemplo de um component utilizado no ultimo
                topico, estamos criando um componente chamado{" "}
                <code className="code">Header</code>. Usando JSX, criamos um
                elemento <code className="code">&lt;div&gt;</code> com a classe
                CSS <code className="code">"Header row s-btw"</code>. Dentro
                desse elemento, temos um título{" "}
                <code className="code">&lt;h1&gt;</code> com o texto "React
                Cheat Sheet" e uma imagem{" "}
                <code className="code">&lt;img&gt;</code> com a fonte da imagem
                vinda de uma variável chamada <code className="code">logo</code>
                .
              </p>
              <p>
                Perceba como o código JSX parece muito com HTML tradicional, mas
                está sendo escrito no meio do JavaScript. Isso torna mais fácil
                compreender a estrutura da interface de usuário e manter a
                coesão entre o HTML e o JavaScript.
              </p>
              <p>
                No final das contas, o React compilará o código JSX em
                JavaScript puro para renderização no navegador. A sintaxe JSX é
                uma das razões pelas quais o desenvolvimento de interfaces de
                usuário com o React é tão poderoso e eficiente.
              </p>
            </div>
          ),
        },
      ],
      [
        "Renderização de Componentes",
        {
          text: "Renderização de componentes funcionais.",
          conteudo: (
            <div className="content">
              <h1>Renderização de Componentes Funcionais no React</h1>

              <h2>Introdução aos Componentes Funcionais</h2>
              <p>
                Componentes funcionais são uma maneira moderna e poderosa de
                criar elementos no React. Eles têm evoluído para serem mais
                versáteis, e com a introdução dos <em>Hooks</em>, agora podem
                gerenciar estados e ciclos de vida de forma eficiente.
              </p>

              <h2>Benefícios dos Componentes Funcionais</h2>
              <p>Componentes funcionais oferecem vários benefícios:</p>
              <ul>
                <li>
                  <strong>Simplicidade:</strong> Componentes funcionais têm uma
                  sintaxe mais concisa e legível em comparação com componentes
                  de classe.
                </li>
                <li>
                  <strong>Performance:</strong> Devido à sua natureza, os
                  componentes funcionais têm menos sobrecarga de memória e
                  processamento, resultando em melhor desempenho.
                </li>
                <li>
                  <strong>Reusabilidade:</strong> Eles são fáceis de reutilizar
                  e composição de componentes torna-se mais simples.
                </li>
                <li>
                  <strong>Hooks:</strong> Com os Hooks, como{" "}
                  <code>useState</code> e <code>useEffect</code>, os componentes
                  funcionais podem gerenciar estado e ciclos de vida sem a
                  necessidade de classes.
                </li>
              </ul>

              <h2>O Que Pode Ser Feito em Componentes Funcionais</h2>
              <p>
                Componentes funcionais são ideais para criar interfaces de
                usuário reativas, gerenciar o estado local usando{" "}
                <code>useState</code>, realizar efeitos colaterais usando{" "}
                <code>useEffect</code> e muito mais. Tarefas como renderização
                condicional, iteração de listas e manipulação de eventos também
                são bem realizadas em componentes funcionais.
              </p>

              <h2>Dicas para Componentes Funcionais</h2>
              <ul>
                <li>
                  Use o padrão de desestruturação para acessar propriedades e
                  estados de forma clara e concisa.
                </li>
                <li>
                  Use o <code>useState</code> para gerenciar estados locais.
                  Lembre-se de que os estados em componentes funcionais são
                  independentes e não interferem uns nos outros.
                </li>
                <li>
                  Use <code>useEffect</code> para realizar efeitos colaterais,
                  como buscar dados de uma API, atualizar o título da página,
                  entre outros.
                </li>
                <li>
                  Aplique o princípio de composição, dividindo componentes
                  complexos em componentes menores e reutilizáveis.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                Os componentes funcionais se tornaram a abordagem mais
                recomendada para criar elementos no React. Com os Hooks, eles se
                tornaram ainda mais poderosos, permitindo gerenciar estados e
                efeitos colaterais de maneira eficiente. Ao utilizar componentes
                funcionais, você aproveita os benefícios da simplicidade,
                reusabilidade e desempenho, enquanto cria interfaces interativas
                e responsivas.
              </p>
            </div>
          ),
        },
        {
          text: "Renderização condicional.",
          conteudo: (
            <div className="content">
              <h1>Renderização Condicional no React</h1>

              <h2>Introdução à Renderização Condicional</h2>
              <p>
                A renderização condicional no React permite que você mostre ou
                oculte elementos com base em condições específicas. Isso é útil
                quando você deseja exibir diferentes partes da interface de
                acordo com o estado ou as propriedades dos componentes.
              </p>

              <h2>Como Usar o Operador Lógico Ternário</h2>
              <p>
                O operador lógico ternário (
                <code>condition ? trueValue : falseValue</code>) é uma maneira
                concisa de realizar renderização condicional. Ele avalia uma
                condição e renderiza um valor ou outro com base nessa condição.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ExemploRenderizacao = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <p>Usuário Logado</p> : <p>Usuário Não Logado</p>}
    </div>
  );
}

export default ExemploRenderizacao;
`}
              />

              <h2>Exemplo de Situação Real</h2>
              <p>
                Imagine um aplicativo de login. Dependendo se o usuário está
                autenticado ou não, você pode renderizar mensagens diferentes.
                Aqui está um exemplo:
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Bem-vindo ao App</h1>
      {isLoggedIn ? <p>Você está logado</p> : <p>Faça login para continuar</p>}

      // Esse button é responsavel por alterar o estado do componente, dizendo se o usuario esta logado ou nao.
      // Ao clicar no button, a variavel isLoggedIn tem seu valor alterado, entao as renderizacoes condicionais
      // sao alteradas de acordo com o novo valor da variavel.

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        // o texto que aparece dentro do button tambem pode ser alterado de acordo com a variavel isLoggedIn
        // caso o usuario esteja logado (isLoggedIn === true) o texto do button se torna Deslogar.
        {isLoggedIn ? 'Deslogar' : 'Logar'}
      </button>
    </div>
  );
}

export default App;
`}
              />

              <h2>Conclusão</h2>
              <p>
                A renderização condicional usando o operador ternário é uma
                maneira poderosa de controlar quais elementos são exibidos no
                React com base em condições específicas. Isso permite que você
                crie interfaces dinâmicas que se adaptam ao estado e às
                interações do usuário.
              </p>
            </div>
          ),
        },
      ],
      [
        "Props (Propriedades)",
        {
          text: "Introduçao a Props.",
          conteudo: (
            <div className="content">
              <h1>Introdução às Props no React</h1>

              <h2>O Que São Props?</h2>
              <p>
                No React, <strong>props</strong> (abreviação de "propriedades")
                são mecanismos para passar dados de um componente pai para um
                componente filho. Eles permitem a comunicação e o
                compartilhamento de informações entre diferentes partes da sua
                aplicação.
              </p>

              <h2>Motivos para Usar Props</h2>
              <p>
                O uso de props é essencial para criar componentes reutilizáveis
                e modularizar seu código. Ao passar dados de componentes pais
                para filhos, você pode criar componentes que podem se adaptar a
                diferentes contextos e estados.
              </p>

              <h2>Vantagens do Uso de Props</h2>
              <ul>
                <li>
                  <strong>Reusabilidade:</strong> Com props, você pode criar
                  componentes genéricos que podem ser utilizados em diferentes
                  partes do seu aplicativo.
                </li>
                <li>
                  <strong>Comunicação:</strong> É uma maneira eficaz de
                  transmitir informações entre componentes, permitindo uma
                  interação fluente entre eles.
                </li>
                <li>
                  <strong>Organização:</strong> Props ajudam a manter um fluxo
                  claro de dados e responsabilidades em seu aplicativo.
                </li>
              </ul>

              <h2>O Que Evitar: Perfuração de Props</h2>
              <p>
                Um erro comum é a <strong>perfuração de props</strong>, onde uma
                prop é passada por vários níveis de componentes intermediários
                para chegar a um componente filho distante. Isso cria uma
                dependência excessiva entre os componentes e dificulta a
                manutenção do código.
              </p>

              <p>
                Por exemplo, imagine a passagem de uma prop <code>nome</code>{" "}
                através de vários níveis de componentes apenas para exibi-la em
                um componente filho final. Isso torna o código menos legível e
                mais suscetível a erros.
              </p>

              <h2>Alternativa: Estado Global</h2>
              <p>
                Em vez de passar props por muitos componentes, você pode
                considerar o uso de um <strong>estado global</strong> gerenciado
                por ferramentas como o <em>React Context</em> ou <em>Redux</em>.
                Isso permite que você compartilhe dados entre componentes sem a
                necessidade de perfuração de props.
              </p>

              <p>
                No entanto, entraremos em mais detalhes sobre o estado global em
                um tópico futuro, pois ele é uma solução mais avançada.
              </p>

              <h2>Conclusão</h2>
              <p>
                O uso de props é fundamental para criar componentes interativos,
                reutilizáveis e bem organizados no React. Evite a perfuração de
                props para manter o código limpo e considere o estado global
                como uma alternativa quando a comunicação entre componentes se
                tornar mais complexa.
              </p>
            </div>
          ),
        },
        {
          text: "Passagem de dados para componentes.",
          conteudo: (
            <div className="content">
              <h1>Passagem de Dados para Componentes no React</h1>
              <h3>Exemplo de Passagem de Dados</h3>
              <p>
                Imagine um componente <code>Card</code> que exibe informações de
                um usuário. Utilizando a notação <code>props.variavel</code>{" "}
                você pode acessar os dados das props diretamente.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.nome}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
`}
              />

              <p>
                Ao usar o componente <code>Card</code>, você passa os dados do
                usuário como props.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import Card from './Card';

const App = () => {
  const usuario = {
    nome: 'João Silva',
    email: 'joao@example.com'
  };

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <Card nome={usuario.nome} email={usuario.email} />
    </div>
  );
}

export default App;
`}
              />

              <h3>Desestruturação para Mais Clareza</h3>
              <p>
                Uma alternativa para tornar o código mais claro é usar a
                desestruturação das props dentro do componente.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const Card = ({ nome, email }) => {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
`}
              />

              <h2>Vantagens da Passagem de Dados</h2>
              <ul>
                <li>
                  <strong>Personalização:</strong> Componentes podem ser
                  personalizados com dados específicos.
                </li>
                <li>
                  <strong>Reutilização:</strong> Componentes podem ser
                  reutilizados em diferentes partes do aplicativo com diferentes
                  dados.
                </li>
                <li>
                  <strong>Modularização:</strong> Dados são isolados e
                  separados, facilitando a manutenção e o desenvolvimento.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                A passagem de dados para componentes é uma prática fundamental
                no React, permitindo que você crie interfaces dinâmicas e
                personalizadas. Utilizando a notação <code>props.variavel</code>{" "}
                você pode acessar os dados das props diretamente, enquanto a
                desestruturação dentro do componente torna o código mais
                legível. Através do uso de props, você pode transmitir
                informações eficientemente entre diferentes componentes,
                aumentando a modularidade e a reusabilidade do seu código.
              </p>
            </div>
          ),
        },
        {
          text: "Uso de props para tornar componentes configuráveis.",
          conteudo: (
            <div className="content">
              <h1>Uso de Props para Tornar Componentes Configuráveis</h1>
              <h2>Customização de Componentes com Props</h2>
              <p>
                Com a passagem de props, você pode facilmente customizar um
                componente com diferentes valores e dados. Isso torna os
                componentes altamente configuráveis, adaptando-se a diferentes
                contextos e situações.
              </p>

              <h3>Exemplo de Uso de Props</h3>
              <p>
                Suponha que você tenha um componente de <code>Botao</code> que
                precisa exibir um texto específico e ter diferentes estilos.
                Usando props, você pode configurar esse botão de várias
                maneiras.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const Botao = (props) => {
  const estilo = {
    backgroundColor: props.corFundo,
    color: props.corTexto
  };

  return (
    <button style={estilo}>
      {props.texto}
    </button>
  );
}

export default Botao;
`}
              />

              <p>
                Ao utilizar o componente <code>Botao</code>, você pode
                configurá-lo com diferentes props:
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import Botao from './Botao';

const App = () => {
  return (
    <div>
      <h1>Exemplos de Botões</h1>
      // Utilizando a passagem de props, voce pode ter dois componentes iguais, mas com propriedades totalmente diferentes
      // sem ter que ir manualmente no component e configurar suas diferentes interacoes e estilos.
      <Botao texto="Clique Aqui" corFundo="blue" corTexto="white" />
      <Botao texto="Enviar" corFundo="green" corTexto="black" />
    </div>
  );
}

export default App;
`}
              />

              <h2>Vantagens da Configuração com Props</h2>
              <ul>
                <li>
                  <strong>Flexibilidade:</strong> Os componentes podem ser
                  facilmente personalizados e reutilizados em diferentes
                  contextos.
                </li>
                <li>
                  <strong>Manutenção:</strong> Mudanças no comportamento ou
                  aparência de um componente podem ser feitas através das props,
                  sem alterar o componente original.
                </li>
                <li>
                  <strong>Padronização:</strong> Você pode padronizar a
                  aparência e o comportamento de componentes em todo o
                  aplicativo, utilizando props predefinidas.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                O uso de props para tornar componentes configuráveis é uma
                prática essencial no React, permitindo que você crie componentes
                altamente flexíveis e reutilizáveis. Ao configurar componentes
                com diferentes props, você adapta-os para atender às
                necessidades específicas do seu aplicativo, aumentando a
                modularidade e a eficiência do seu código.
              </p>
            </div>
          ),
        },
      ],
      [
        "Estado e Ciclo de Vida",
        {
          text: "Introdução ao estado (state) do componente.",
          conteudo: (
            <div className="content">
              <h1>Introdução ao Estado (State) do Componente no React</h1>

              <h2>O que é o Estado (State) do Componente?</h2>
              <p>
                No React, o <strong>estado</strong> (<em>state</em>) é uma parte
                fundamental para criar componentes interativos e dinâmicos. O
                estado permite que um componente mantenha e gerencie dados que
                podem mudar ao longo do tempo e afetar a renderização da
                interface.
              </p>

              <h2>Por que Usar o Estado?</h2>
              <p>
                O estado é usado para armazenar informações que podem ser
                alteradas ou atualizadas durante a vida útil de um componente.
                Com o estado, você pode criar componentes que respondem às
                interações do usuário, exibindo informações atualizadas sem a
                necessidade de recarregar a página.
              </p>

              <h2>Como Usar o Estado em Componentes Funcionais</h2>
              <p>
                Em componentes funcionais, você pode usar o{" "}
                <strong>hook</strong> <code>useState</code> para adicionar
                estado ao seu componente. O hook <code>useState</code> retorna
                um valor do estado atual e uma função para atualizá-lo.
              </p>

              <h3>Exemplo de Uso do Estado</h3>
              <p>
                Imagine um componente de <code>Contador</code> que exibe e
                atualiza um número.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ContadorFuncional = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    // Quando essa funcao é chamada, o estado contador é atualizado e incrementado.
    // essa mudanca ocorre imediatamente dentro do React.
    setContador(contador + 1);
  }

  return (
    <div>
      // aqui dentro o estado contador é exibido dentro da pagina, e sempre que seu valor for alterado
      // seu novo estado sera visivel na pagina web imediatamente.
      <p>Contagem: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default ContadorFuncional;
`}
              />

              <h2>Vantagens do Uso do Estado</h2>
              <ul>
                <li>
                  <strong>Interatividade:</strong> Componentes podem responder a
                  ações do usuário, atualizando o estado e refletindo as
                  mudanças na interface.
                </li>
                <li>
                  <strong>Atualizações Eficientes:</strong> O React gerencia
                  automaticamente as atualizações do DOM, tornando a interface
                  responsiva e eficiente.
                </li>
                <li>
                  <strong>Reatividade:</strong> O estado permite que a interface
                  seja atualizada automaticamente quando o estado muda,
                  eliminando a necessidade de manipulações manuais.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                O estado do componente é um conceito fundamental no React,
                permitindo que você crie interfaces dinâmicas e interativas.
                Utilizando o hook <code>useState</code>, você pode adicionar e
                atualizar o estado em componentes funcionais, tornando sua
                experiência de usuário mais envolvente e responsiva.
              </p>
            </div>
          ),
        },
        {
          text: "Métodos do ciclo de vida com Hooks.",
          conteudo: (
            <div className="content">
              <h1>Métodos do Ciclo de Vida com Hooks no React</h1>

              <h2>Introdução aos Hooks</h2>
              <p>
                No React, os <strong>Hooks</strong> são funções especiais que
                permitem que você "enganche" ou "conecte" comportamentos de
                ciclo de vida e estados em componentes funcionais. Isso torna
                mais fácil e legível o gerenciamento desses aspectos em
                comparação com a abordagem anterior de componentes de classe.
              </p>

              <h2>Uso dos Hooks para Emular o Ciclo de Vida</h2>
              <p>
                Em componentes funcionais, você pode utilizar os seguintes Hooks
                para emular comportamentos do ciclo de vida:
              </p>
              <ul>
                <li>
                  <strong>
                    <code>useState</code>:
                  </strong>{" "}
                  Para gerenciar estados.
                </li>
                <li>
                  <strong>
                    <code>useEffect</code>:
                  </strong>{" "}
                  Para efeitos colaterais, simulação de{" "}
                  <code>componentDidMount</code>,{" "}
                  <code>componentDidUpdate</code> e{" "}
                  <code>componentWillUnmount</code>.
                </li>
                <li>
                  <strong>
                    <code>useContext</code>:
                  </strong>{" "}
                  Para acessar o contexto da aplicação.
                </li>
                <li>
                  <strong>
                    <code>useReducer</code>:
                  </strong>{" "}
                  Para gerenciar estados complexos.
                </li>
              </ul>

              <h3>
                Exemplo de Uso do Hook <code>useEffect</code> para Montagem da
                Página
              </h3>
              <p>
                O hook <code>useEffect</code> pode ser usado para realizar ações
                após o componente ser montado, emulando o comportamento do ciclo
                de vida <code>componentDidMount</code> em componentes de classe.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useEffect } from 'react';

const ExemploUseEffectMontagem = () => {
  useEffect(() => {
    console.log('O componente foi montado');

    return () => {
      console.log('O componente será desmontado');
    };
  }, []);

  return (
    <div>
      <p>Exemplo de uso do useEffect para montagem da página.</p>
    </div>
  );
}

export default ExemploUseEffectMontagem;
`}
              />

              <h3>
                Exemplo de Uso do Hook <code>useEffect</code> para Estado
                Alterado
              </h3>
              <p>
                O hook <code>useEffect</code> também pode ser usado para
                realizar ações quando um estado específico é alterado. Isso
                emula o comportamento do ciclo de vida{" "}
                <code>componentDidUpdate</code> em componentes de classe.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState, useEffect } from 'react';

const ExemploUseEffectEstado = () => {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (contador > 5) {
      setMensagem('Contador está alto!');
    } else {
      setMensagem('');
    }
  }, [contador]);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default ExemploUseEffectEstado;
`}
              />

              <h2>Vantagens dos Hooks</h2>
              <ul>
                <li>
                  <strong>Simplicidade:</strong> Os Hooks simplificam a gestão
                  do ciclo de vida e estados em componentes funcionais, sem a
                  necessidade de classes.
                </li>
                <li>
                  <strong>Reutilização:</strong> Os Hooks podem ser reutilizados
                  entre diferentes componentes, melhorando a modularidade do
                  código.
                </li>
                <li>
                  <strong>Manutenção:</strong> A estrutura mais simples e direta
                  dos Hooks torna o código mais fácil de entender e manter.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                Os Hooks são uma adição poderosa ao React, permitindo que você
                emule comportamentos do ciclo de vida e estados em componentes
                funcionais de maneira mais intuitiva. O hook{" "}
                <code>useEffect</code> é particularmente útil para lidar com
                efeitos colaterais, como requisições à API ou manipulação do
                DOM. Ao adotar Hooks, você pode escrever componentes mais
                concisos, reutilizáveis e fáceis de manter.
              </p>
            </div>
          ),
        },
      ],
    ],
  ],
  [
    "intermediate",
    [
      [
        "Eventos e Manipulação do DOM",
        {
          text: "Lidando com eventos como clique, input, etc.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Atualização do estado do componente.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Listas e Chaves",
        {
          text: "Renderização de listas dinâmicas.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Uso de chaves (key) para otimização de renderização.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Formulários Controlados",
        {
          text: "Gerenciamento de estados em elementos de formulário.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Validação de entrada e manipulação de formulários.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Componentes Filhos e Pais",
        {
          text: "Comunicação entre componentes pai e filho.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Uso de props e children.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Composição de Componentes",
        {
          text: "Criação de componentes reutilizáveis.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Uso de composição para montar interfaces complexas.",
          conteudo: <div className="content"></div>,
        },
      ],
    ],
  ],
  [
    "advanced",
    [
      [
        "Hooks",
        {
          text: "Introdução aos hooks (useState, useEffect, etc.).",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Gerenciamento de estado e efeitos em componentes funcionais.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Contexto",
        {
          text: "Criação de um contexto para compartilhar estado global.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Uso do Context.Provider e Context.Consumer.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Renderização Condicional e Roteamento",
        {
          text: "Renderização com base em condições (if-else).",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Uso de bibliotecas de roteamento (React Router).",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Reconciliação e Otimização de Renderização",
        {
          text: "algoritmo de reconciliação do React.",
          conteudo: <div className="content"></div>,
        },
        {
          text: "shouldComponentUpdate e React.memo.",
          conteudo: <div className="content"></div>,
        },
      ],
      [
        "Padrões de Design e Arquitetura",
        {
          text: "Separação de preocupações (componentização).",
          conteudo: <div className="content"></div>,
        },
        {
          text: "Padrões como Container/Presentation, Flux, Redux.",
          conteudo: <div className="content"></div>,
        },
      ],
    ],
  ],
];
