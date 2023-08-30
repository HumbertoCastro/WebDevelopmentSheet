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
        "Componentes do React",
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
        {
          text: "Gerar componente automatico via generate react cli",
          conteudo: (
            <div className="content">
              <h1>Passo a Passo: Instalação e Uso do Generate React CLI</h1>

              <h2>Instalação do Generate React CLI</h2>
              <p>
                Antes de usar o pacote "Generate React CLI", é necessário
                instalá-lo globalmente em seu sistema usando o npm:
              </p>
              <CodeBlock language="bash" code={`npm i generate-react-cli`} />

              <h2>Utilizando o Comando create-react-component</h2>
              <p>
                Depois de instalado, você pode usar o comando{" "}
                <code>Generate React CLI</code> para criar um novo componente.
                Basta fornecer o nome do componente como argumento:
              </p>
              <CodeBlock
                language="bash"
                code={`npx generate-react-cli component Box `}
              />

              <h2>Opções de Configuração</h2>
              <p>
                Quando utilizar o comando pela primeira vez no projeto, o
                terminal ira te perguntar varias opçoes de configuração para
                customizar o cli para a necessidade do seu projeto. Isso ira
                criar um arquivo de configuração "generate-react-cli.json"
              </p>
              <h3> Exemplo do generate-react-cli.json </h3>

              <CodeBlock
                language="bash"
                code={` {
                  "usesTypeScript": true,
                  "usesCssModule": true,
                  "cssPreprocessor": "scss",
                  "testLibrary": "Testing Library",
                  "component": {
                    "default": {
                      "path": "src/components",
                      "withLazy": false,
                      "withStory": false,
                      "withStyle": true,
                      "withTest": true
                    }
                  }
                }
                `}
              />
              <h2>Conclusão</h2>
              <p>
                O pacote "generate-react-cli" é uma ferramenta útil para
                acelerar a criação de componentes no React. Com as opções de
                configuração disponíveis, você pode personalizar a criação de
                acordo com as necessidades do seu projeto, facilitando o
                desenvolvimento de componentes reutilizáveis e bem estruturados.
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
        {
          text: "Passagem de callbacks via props",
          conteudo: (
            <div className="content">
              <h1>Passagem de Callbacks via Props no React</h1>

              <h2>Introdução à Passagem de Callbacks</h2>
              <p>
                No React, a passagem de <strong>callbacks</strong> (funções) via{" "}
                <strong>props</strong> é uma técnica poderosa para permitir a
                comunicação entre componentes. Isso permite que um componente
                pai passe uma função para um componente filho, que pode ser
                chamada pelo filho para afetar o estado ou comportamento do
                componente pai.
              </p>

              <h2>Passando Callbacks</h2>
              <p>
                Para passar um callback de um componente pai para um componente
                filho, basta incluir a função no objeto de props ao renderizar o
                componente filho. O componente filho pode então chamar essa
                função quando necessário, geralmente em resposta a eventos ou
                ações do usuário.
              </p>

              <h3>Exemplo de Passagem de Callback</h3>
              <p>
                Imagine um componente <code>Pai</code> passando uma função de
                callback para um componente <code>Filho</code>.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const Filho = ({ onClick }) => {
  return <button onClick={onClick}>Clique aqui</button>;
};

const Pai = () => {
  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    setMensagem('Botão no componente filho clicado!');
  }

  return (
    <div>
      <Filho onClick={handleClick} />
      <p>{mensagem}</p>
    </div>
  );
}

export default Pai;
`}
              />

              <h2>Vantagens da Passagem de Callbacks via Props</h2>
              <ul>
                <li>
                  <strong>Comunicação:</strong> Permite que componentes filhos
                  comuniquem-se com seus componentes pais de forma controlada.
                </li>
                <li>
                  <strong>Reutilização:</strong> A técnica de passagem de
                  callbacks incentiva a criação de componentes reutilizáveis,
                  uma vez que a lógica de interação está no componente pai.
                </li>
                <li>
                  <strong>Separar Responsabilidades:</strong> Mantém a
                  responsabilidade de cada componente bem definida, facilitando
                  a manutenção e a compreensão do código.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                A passagem de callbacks via props é uma estratégia eficaz para
                permitir a interação e a comunicação entre componentes no React.
                Essa técnica promove uma arquitetura de componentes mais modular
                e reutilizável, tornando seu código mais organizado e
                facilitando a criação de interfaces interativas e dinâmicas.
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
          conteudo: (
            <div className="content">
              <h1>Lidando com Eventos no React</h1>

              <h2>Introdução aos Eventos no React</h2>
              <p>
                No React, lidar com eventos, como cliques, entradas de teclado e
                outros tipos de interações do usuário, é essencial para criar
                interfaces interativas e responsivas. O React fornece uma
                abordagem reativa para lidar com eventos, permitindo que os
                componentes respondam a ações do usuário de forma eficiente.
              </p>

              <h2>Manuseando Eventos</h2>
              <p>
                No React, você pode atribuir{" "}
                <strong>manipuladores de eventos</strong> a elementos da mesma
                forma que faria em HTML puro, usando a sintaxe{" "}
                <code>onNomeDoEvento</code>. No entanto, em vez de usar strings
                para representar eventos, você passa funções que serão invocadas
                quando o evento ocorrer.
              </p>

              <h3>Exemplo de Lidando com um Evento de Clique</h3>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ExemploEventoClique = () => {
  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    // ao clicar no button, a funcao handleClick é chamada, e dentro dela
    // o estado mensagem é modificado.
    setMensagem('Botão clicado!');
  }

  return (
    <div>
      // aqui, a funcao handleClick é passada como variavel para dentro do handler de click do button
      <button onClick={handleClick}>Clique Aqui</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default ExemploEventoClique;
`}
              />

              <h3>Lidando com Eventos de Entrada</h3>
              <p>
                Para lidar com eventos de entrada, como digitação em um campo de
                texto, você pode usar o evento <code>onChange</code> para
                atualizar o estado do componente conforme o usuário digita.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ExemploEventoEntrada = () => {
  const [texto, setTexto] = useState('');

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  }

  return (
    <div>
      <input type="text" value={texto} onChange={handleInputChange} />
      <p>Texto digitado: {texto}</p>
    </div>
  );
}

export default ExemploEventoEntrada;
`}
              />

              <h2>Prevenção do Comportamento Padrão</h2>
              <p>
                Em eventos como cliques de link ou envios de formulário, você
                pode usar o método <code>preventDefault()</code> para evitar o
                comportamento padrão do navegador, como recarregar a página.
              </p>

              <h2>Vantagens de Lidar com Eventos no React</h2>
              <ul>
                <li>
                  <strong>Reatividade:</strong> Os componentes podem responder
                  imediatamente às ações do usuário, atualizando a interface
                  conforme necessário.
                </li>
                <li>
                  <strong>Centralização:</strong> Ao lidar com eventos no nível
                  do componente, você mantém o código relacionado em um só
                  lugar, tornando-o mais organizado.
                </li>
                <li>
                  <strong>Modularidade:</strong> A abordagem reativa do React
                  facilita a construção de interfaces complexas e interativas,
                  dividindo a lógica em pequenos componentes.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                Lidar com eventos no React é uma parte fundamental da criação de
                interfaces interativas. A abordagem reativa do React torna mais
                fácil e eficiente lidar com eventos, permitindo que você crie
                experiências de usuário envolventes e responsivas.
              </p>
            </div>
          ),
        },
        {
          text: "Atualização do estado do componente.",
          conteudo: (
            <div className="content">
              <h1>Atualização do Estado do Componente no React</h1>

              <h2>Introdução à Atualização do Estado</h2>
              <p>
                No React, a <strong>atualização do estado</strong> é uma parte
                essencial para criar interfaces interativas que respondam às
                ações do usuário. Quando um evento ocorre, como um clique ou
                entrada de teclado, o estado de um componente pode ser
                atualizado, o que leva à re-renderização da interface para
                refletir as mudanças.
              </p>

              <h2>Atualizando o Estado com Eventos</h2>
              <p>
                Para atualizar o estado em resposta a eventos, você pode
                utilizar a função <code>setState</code> que é fornecida pelo
                React. A função <code>setState</code> aceita um novo valor de
                estado ou uma função que atualiza o estado com base no estado
                anterior.
              </p>

              <h3>Exemplo de Atualização do Estado em Resposta a um Clique</h3>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ExemploAtualizacaoEstado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default ExemploAtualizacaoEstado;
`}
              />

              <h2>Atualizando o Estado com Base no Estado Anterior</h2>
              <p>
                Ao atualizar o estado com base no estado anterior, é uma boa
                prática utilizar uma função para garantir que você esteja
                trabalhando com o estado mais recente.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ExemploAtualizacaoEstadoAnterior = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador((prevContador) => prevContador + 1);
  }

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default ExemploAtualizacaoEstadoAnterior;
`}
              />

              <h2>Benefícios da Atualização do Estado</h2>
              <ul>
                <li>
                  <strong>Interatividade:</strong> Permite que a interface
                  responda dinamicamente às ações do usuário, como cliques e
                  entradas.
                </li>
                <li>
                  <strong>Consistência:</strong> Ao atualizar o estado com base
                  no estado anterior, você evita problemas de concorrência e
                  garante que as atualizações sejam consistentes.
                </li>
                <li>
                  <strong>Reatividade:</strong> As atualizações de estado são
                  reativas, ou seja, o React gerencia automaticamente a
                  renderização da interface para refletir as mudanças.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                A atualização do estado do componente é fundamental para criar
                interfaces interativas e responsivas no React. Com a função{" "}
                <code>setState</code>, você pode modificar o estado de maneira
                controlada em resposta a eventos, permitindo que a interface
                reflita as mudanças de forma eficiente e reativa.
              </p>
            </div>
          ),
        },
      ],
      [
        "Listas e Chaves",
        {
          text: "Renderização de listas dinâmicas.",
          conteudo: (
            <div className="content">
              <h1>Renderização de Listas Dinâmicas no React</h1>

              <h2>Introdução à Renderização de Listas</h2>
              <p>
                No React, a renderização de <strong>listas dinâmicas</strong> é
                uma técnica essencial para exibir conjuntos de dados que podem
                variar em tamanho. Você pode usar métodos como <code>.map</code>
                , <code>.filter</code> e <code>.forEach</code> para gerar
                componentes dinamicamente a partir dos elementos da lista.
              </p>

              <h2>
                Renderização com o Método <code>.map</code>
              </h2>
              <p>
                O método <code>.map</code> é usado para criar um novo array de
                elementos, onde cada elemento é o resultado da aplicação de uma
                função a cada item do array original. É comumente usado para
                renderizar componentes React de uma lista de dados.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ListaComMap = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaComMap;
`}
              />

              <h2>
                Renderização com o Método <code>.filter</code>
              </h2>
              <p>
                O método <code>.filter</code> é usado para criar um novo array
                contendo apenas os elementos que atendem a um determinado
                critério. Isso é útil para renderizar apenas os itens que você
                deseja mostrar.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ListaComFilter = ({ items }) => {
  const itemsFiltrados = items.filter(item => item.length > 5);

  return (
    <ul>
      {itemsFiltrados.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaComFilter;
`}
              />

              <h2>
                Renderização com o Método{" "}
                <code>.filter sequido de um .map</code>
              </h2>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ListaComMetodosEmSequencia = ({ items }) => {

  return (
    <ul>
      {items.filter(item => item.length > 5).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaComMetodosEmSequencia;
`}
              />

              <h2>
                Renderização com o Método <code>.forEach</code>
              </h2>
              <p>
                O método <code>.forEach</code> itera sobre os elementos do array
                original, executando uma função para cada elemento. No entanto,
                o <code>.forEach</code> não cria um novo array, por isso é menos
                usado para renderização, já que o retorno de componentes é
                necessário.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ListaComForEach = ({ items }) => {
  const renderedItems = [];

  items.forEach((item, index) => {
    renderedItems.push(<li key={index}>{item}</li>);
  });

  return (
    <ul>
      {renderedItems}
    </ul>
  );
}

export default ListaComForEach;
`}
              />

              <h2>Vantagens da Renderização de Listas Dinâmicas</h2>
              <ul>
                <li>
                  <strong>Flexibilidade:</strong> Permite renderizar listas de
                  qualquer tamanho de forma eficiente e dinâmica.
                </li>
                <li>
                  <strong>Organização:</strong> A renderização dinâmica evita a
                  necessidade de escrever manualmente elementos repetitivos.
                </li>
                <li>
                  <strong>Manutenção:</strong> As alterações na lista são
                  refletidas automaticamente na renderização, economizando
                  trabalho manual.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                A renderização de listas dinâmicas é uma técnica crucial no
                React para exibir e gerenciar conjuntos de dados variáveis. Ao
                usar métodos como <code>.map</code>, <code>.filter</code> e{" "}
                <code>.forEach</code>, você pode criar interfaces interativas
                que se ajustam de forma reativa às mudanças nos dados exibidos.
              </p>
            </div>
          ),
        },
        {
          text: "Uso de chaves (key) para otimização de renderização.",
          conteudo: (
            <div className="content">
              <h1>
                Uso de Chaves (Keys) para Otimização de Renderização em Listas
                Dinâmicas
              </h1>

              <h2>Introdução às Chaves (Keys)</h2>
              <p>
                No React, as <strong>chaves</strong> (<strong>keys</strong>) são
                atributos especiais que ajudam o React a identificar de forma
                única os elementos renderizados em uma lista. Ao usar chaves,
                você melhora o desempenho e a eficiência da renderização em
                listas dinâmicas.
              </p>

              <h2>Por que Usar Chaves?</h2>
              <p>
                As chaves são essenciais para otimizar a renderização em listas
                dinâmicas. Sem elas, o React pode ter dificuldades em acompanhar
                quais itens foram adicionados, removidos ou reordenados na
                lista, resultando em problemas de desempenho e renderização
                incorreta.
              </p>

              <h2>Como Usar Chaves</h2>
              <p>
                A chave deve ser atribuída a cada elemento renderizado em uma
                lista, usando o atributo <code>key</code>. A chave deve ser
                única entre os elementos irmãos, mas não precisa ser globalmente
                única.
              </p>

              <h3>Exemplo de Uso de Chaves</h3>
              <p>
                Na renderização de uma lista de elementos, como componentes de
                lista ou itens em um menu, é importante usar chaves para
                otimização.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ListaComChaves = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaComChaves;
`}
              />

              <h2>Vantagens do Uso de Chaves</h2>
              <ul>
                <li>
                  <strong>Otimização de Desempenho:</strong> As chaves ajudam o
                  React a identificar alterações na lista de forma eficiente,
                  evitando re-renderizações desnecessárias.
                </li>
                <li>
                  <strong>Atualizações Precisas:</strong> As chaves permitem que
                  o React rastreie adições, remoções e reordenações de
                  elementos, garantindo atualizações precisas.
                </li>
                <li>
                  <strong>Renderização Correta:</strong> O uso adequado de
                  chaves evita problemas de renderização incorreta,
                  especialmente em listas dinâmicas.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                O uso de chaves é uma prática essencial para otimizar a
                renderização em listas dinâmicas no React. Ao atribuir chaves
                únicas aos elementos renderizados, você garante um desempenho
                eficiente e uma renderização precisa, melhorando a experiência
                do usuário e facilitando a manutenção do código.
              </p>
            </div>
          ),
        },
      ],
      [
        "Formulários Controlados",
        {
          text: "Gerenciamento de estados em elementos de formulário.",
          conteudo: (
            <div className="content">
              <h1>
                Gerenciamento de Estados em Elementos de Formulário no React
              </h1>

              <h2>Introdução ao Gerenciamento de Estados em Formulários</h2>
              <p>
                No React, o gerenciamento de estados em{" "}
                <strong>elementos de formulário</strong> é uma parte crucial
                para criar interfaces interativas e dinâmicas. Elementos de
                formulário, como campos de texto, caixas de seleção e botões de
                envio, podem ser controlados por estados, permitindo que você
                rastreie e responda às mudanças do usuário de forma reativa.
              </p>

              <h2>Controlando Elementos de Formulário com Estados</h2>
              <p>
                Para controlar um elemento de formulário no React, você pode
                associar um estado a ele e definir o valor do elemento com base
                no estado. Em seguida, você precisa criar uma função
                manipuladora que atualize o estado quando o elemento de
                formulário é alterado.
              </p>

              <h3>Exemplo de Controle de Campo de Texto</h3>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ExemploGerenciamentoEstadoFormulario = () => {
  const [nome, setNome] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  }

  return (
    <div>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={handleNomeChange} />
      <p>Nome digitado: {nome}</p>
    </div>
  );
}

export default ExemploGerenciamentoEstadoFormulario;
`}
              />

              <h2>Vantagens do Gerenciamento de Estados em Formulários</h2>
              <ul>
                <li>
                  <strong>Interatividade:</strong> Permite que os elementos de
                  formulário respondam dinamicamente às ações do usuário.
                </li>
                <li>
                  <strong>Controle:</strong> Ao controlar os elementos de
                  formulário com estados, você mantém o controle total sobre
                  seus valores e comportamentos.
                </li>
                <li>
                  <strong>Validação:</strong> É mais fácil implementar
                  validações de entrada quando você está acompanhando os estados
                  dos elementos de formulário.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                O gerenciamento de estados em elementos de formulário no React é
                essencial para criar interfaces de usuário interativas e
                responsivas. Ao associar estados aos elementos de formulário e
                usar funções manipuladoras para atualizá-los, você cria uma
                experiência de usuário mais fluida e melhora a interação entre o
                usuário e a aplicação.
              </p>
            </div>
          ),
        },
        {
          text: "Validação de entrada e manipulação de formulários.",
          conteudo: (
            <div className="content">
              <h1>Gerenciamento de Estados em Formulários no React</h1>

              <h2>Introdução ao Gerenciamento de Estados em Formulários</h2>
              <p>
                No React, o gerenciamento de estados em{" "}
                <strong>elementos de formulário</strong> é uma parte crucial
                para criar interfaces interativas e dinâmicas. Elementos de
                formulário, como campos de texto, caixas de seleção e botões de
                envio, podem ser controlados por estados, permitindo que você
                rastreie e responda às mudanças do usuário de forma reativa.
              </p>

              <h2>Controlando Elementos de Formulário com Estados</h2>
              <p>
                Para controlar um elemento de formulário no React, você pode
                associar um estado a ele e definir o valor do elemento com base
                no estado. Em seguida, você precisa criar uma função
                manipuladora que atualize o estado quando o elemento de
                formulário é alterado.
              </p>

              <h3>Exemplo de Formulário com Diferentes Elementos</h3>
              <CodeBlock
                language="jsx"
                code={`
import React, { useState } from 'react';

const ExemploGerenciamentoEstadoFormulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aceitaTermos, setAceitaTermos] = useState(false);
  const [genero, setGenero] = useState('masculino');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleAceitaTermosChange = () => {
    setAceitaTermos(!aceitaTermos);
  }

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', { nome, email, aceitaTermos, genero });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={handleNomeChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={aceitaTermos} onChange={handleAceitaTermosChange} />
          Aceito os termos de uso
        </label>
      </div>
      <div>
        <label>Gênero:</label>
        <select value={genero} onChange={handleGeneroChange}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ExemploGerenciamentoEstadoFormulario;
`}
              />

              <h2>Vantagens do Gerenciamento de Estados em Formulários</h2>
              <ul>
                <li>
                  <strong>Interatividade:</strong> Permite que os elementos de
                  formulário respondam dinamicamente às ações do usuário.
                </li>
                <li>
                  <strong>Controle:</strong> Ao controlar os elementos de
                  formulário com estados, você mantém o controle total sobre
                  seus valores e comportamentos.
                </li>
                <li>
                  <strong>Validação:</strong> É mais fácil implementar
                  validações de entrada quando você está acompanhando os estados
                  dos elementos de formulário.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                O gerenciamento de estados em elementos de formulário no React é
                essencial para criar interfaces de usuário interativas e
                responsivas. Ao associar estados aos elementos de formulário e
                usar funções manipuladoras para atualizá-los, você cria uma
                experiência de usuário mais fluida e melhora a interação entre o
                usuário e a aplicação.
              </p>
            </div>
          ),
        },
      ],
      [
        "Composição de Componentes",
        {
          text: "Criação de componentes reutilizáveis.",
          conteudo: (
            <div className="content">
              <h1>Criação de Componentes Reutilizáveis no React</h1>

              <h2>Introdução à Criação de Componentes Reutilizáveis</h2>
              <p>
                Uma das vantagens mais significativas do React é a capacidade de
                criar <strong>componentes reutilizáveis</strong>. Esses
                componentes encapsulam a lógica e a aparência, permitindo que
                você os utilize em diferentes partes do seu projeto sem
                duplicação de código.
              </p>

              <h2>Criando um Componente Reutilizável</h2>
              <p>
                Para criar um componente reutilizável, você precisa definir uma
                função ou classe que representa o componente e encapsula sua
                funcionalidade específica. Isso permite que você crie abstrações
                que podem ser usadas em várias partes do projeto.
              </p>

              <h3>Exemplo de Componente de Botão Reutilizável</h3>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const BotaoReutilizavel = ({ texto, onClick }) => (
  <button onClick={onClick}>{texto}</button>
);

export default BotaoReutilizavel;
`}
              />

              <h3>Exemplo de Uso do Componente de Botão</h3>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import BotaoReutilizavel from './BotaoReutilizavel';

const PaginaExemplo = () => {
  const handleClique = () => {
    console.log('Botão clicado!');
  }

  return (
    <div>
      <h2>Exemplo de Uso de Componente Reutilizável</h2>
      <BotaoReutilizavel texto="Clique aqui" onClick={handleClique} />
      <BotaoReutilizavel texto="Segundo clique" onClick={handleClique} />
      <BotaoReutilizavel texto="Nao clique nesse" onClick={} />
    </div>
  );
}

export default PaginaExemplo;
`}
              />

              <h2>Vantagens dos Componentes Reutilizáveis</h2>
              <ul>
                <li>
                  <strong>Redução de Duplicação:</strong> Componentes
                  reutilizáveis permitem que você compartilhe lógica e aparência
                  sem duplicar código.
                </li>
                <li>
                  <strong>Manutenção Simplificada:</strong> Alterações em um
                  componente reutilizável refletem-se automaticamente em todos
                  os lugares em que ele é usado.
                </li>
                <li>
                  <strong>Consistência:</strong> Componentes reutilizáveis
                  garantem uma aparência e comportamento consistentes em todo o
                  projeto.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                A criação de componentes reutilizáveis é uma prática fundamental
                no desenvolvimento com React. Isso permite que você construa uma
                base sólida de abstrações, economizando tempo, melhorando a
                manutenção e garantindo uma experiência consistente para os
                usuários em todo o seu projeto.
              </p>
            </div>
          ),
        },
        {
          text: "Uso de composição para montar interfaces complexas.",
          conteudo: (
            <div className="content">
              <h1>
                Uso de Composição para Montar Interfaces Complexas no React
              </h1>

              <h2>Introdução à Composição no React</h2>
              <p>
                A composição é um conceito fundamental no React que permite
                criar interfaces complexas e reutilizáveis ao combinar vários
                componentes menores para formar um componente maior. Isso
                promove a modularidade, a flexibilidade e a capacidade de
                construir interfaces mais sofisticadas a partir de peças
                simples.
              </p>

              <h2>Vantagens da Composição</h2>
              <p>A composição no React oferece várias vantagens:</p>
              <ul>
                <li>
                  <strong>Reutilização:</strong> Componentes pequenos e
                  especializados podem ser reutilizados em diferentes partes do
                  projeto.
                </li>
                <li>
                  <strong>Legibilidade:</strong> Interfaces complexas podem ser
                  divididas em partes menores e mais gerenciáveis, facilitando a
                  leitura e manutenção do código.
                </li>
                <li>
                  <strong>Escalabilidade:</strong> À medida que o projeto
                  cresce, a composição permite adicionar ou modificar partes da
                  interface sem afetar todo o sistema.
                </li>
              </ul>

              <h2>Compondo Interfaces Complexas</h2>
              <p>
                Para compor interfaces complexas, você pode criar componentes
                maiores que agregam componentes menores. Esses componentes
                maiores podem conter lógica adicional, estilos e gerenciamento
                de estados específicos.
              </p>

              <h3>Exemplo de Composição de Interface</h3>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

const PaginaCompleta = () => (
  <div>
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
);

export default PaginaCompleta;
`}
              />

              <h2>Conclusão</h2>
              <p>
                O uso de composição é uma abordagem poderosa para construir
                interfaces complexas no React. Ao dividir a interface em
                componentes menores e reutilizáveis, você cria um código mais
                organizado, legível e escalável, permitindo criar projetos mais
                robustos e eficientes.
              </p>
            </div>
          ),
        },
      ],
    ],
  ],
  [
    "advanced",
    [
      [
        "Estado Global",
        {
          text: "Criação de um contexto para compartilhar estado global.",
          conteudo: (
            <div className="content">
              <h1>Utilizando o Context no Projeto usando a Context API</h1>

              <h2>Introdução ao Uso de Context</h2>
              <p>
                O Context API no React permite que você compartilhe informações,
                como estados ou funções, entre componentes sem a necessidade de
                passar props manualmente através de cada nível da hierarquia.
                Isso é especialmente útil para estados globais ou informações
                que muitos componentes precisam acessar.
              </p>

              <h2>Passos para Utilizar o Context</h2>
              <ol>
                <li>
                  Crie um contexto: Use a função <code>createContext()</code>{" "}
                  para criar o contexto.
                </li>
                <li>
                  Crie um provedor de contexto: Crie um componente que envolve
                  os componentes que precisam acessar o contexto. Este
                  componente provedor fornecerá os valores do contexto através
                  da propriedade <code>value</code>.
                </li>
                <li>
                  Consuma o contexto: Use o componente <code>useContext()</code>{" "}
                  dentro dos componentes consumidores para acessar os valores do
                  contexto.
                </li>
              </ol>

              <h2>Exemplo de Utilização do Context</h2>
              <p>
                Aqui está um exemplo de como você pode usar o contexto para
                compartilhar um tema global entre componentes:
              </p>
              <CodeBlock
                language="jsx"
                code={`
// MeuContexto.js
import { createContext } from 'react';

const TemaContexto = createContext();

export default TemaContexto;
`}
              />

              <CodeBlock
                language="jsx"
                code={`
// TemaProvider.js
import React, { useState } from 'react';
import TemaContexto from './MeuContexto';

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  return (
    <TemaContexto.Provider value={{ tema, setTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

export default TemaProvider;
`}
              />
              <p>
                O contexto <code>MeuContexto</code> foi criado usando a função{" "}
                <code>createContext()</code>. Agora você pode importar e usar
                esse contexto em diferentes partes do seu aplicativo para
                compartilhar dados e funções.
              </p>

              <h2>Adicionando o Provedor do Contexto no index.js</h2>
              <p>
                Para disponibilizar o contexto para toda a aplicação, adicione o
                provedor do contexto no arquivo <code>index.js</code> do seu
                projeto. Isso permitirá que todos os componentes acessarem o
                contexto compartilhado.
              </p>
              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importe o componente principal da sua aplicação
import MeuContextoProvider from './MeuContextoProvider'; // Importe o provedor do contexto

ReactDOM.render(
  <MeuContextoProvider>
    <App />
  </MeuContextoProvider>,
  document.getElementById('root')
);
`}
              />
              <h2>Conclusão</h2>
              <p>
                Usar o Context API no React é uma maneira poderosa de
                compartilhar informações globalmente entre componentes sem a
                necessidade de passar props manualmente. Isso melhora a
                organização do código e simplifica a comunicação entre partes
                diferentes do aplicativo.
              </p>
            </div>
          ),
        },
        {
          text: "Utilizando o context no projeto",
          conteudo: (
            <div className="content">
              <h1>Utilizando o Context no Projeto usando a Context API</h1>

              <h2>Compartilhando e Atualizando o Estado Global</h2>
              <p>
                Depois de criar o contexto e seu provedor, você pode utilizar
                esses recursos para compartilhar e atualizar o estado global
                entre diversos componentes em sua aplicação.
              </p>

              <h3>Passo 1: Importar e Consumir o Contexto</h3>
              <p>
                Importe o contexto previamente criado em um componente onde você
                deseja consumir os valores globais. Utilize o componente{" "}
                <code>useContext()</code> para acessar o contexto e os valores
                dentro dele.
              </p>

              <CodeBlock
                language="jsx"
                code={`
          import React, { useContext } from 'react';
          import MeuContexto from './MeuContexto';
          
          const ComponenteConsumidor = () => {
            const { estadoGlobal, setEstadoGlobal } = useContext(MeuContexto);
          
            return (
              <div>
                <p>Estado Global: {estadoGlobal}</p>
                <button onClick={() => setEstadoGlobal('Novo valor')}>Atualizar Estado Global</button>
              </div>
            );
          };
          `}
              />

              <h3>Passo 2: Utilizando o Estado Global em Outros Componentes</h3>
              <p>
                Agora, considere outro componente que também precisa acessar ou
                alterar o estado global. Através do contexto, é possível
                compartilhar facilmente o estado entre componentes diferentes.
              </p>

              <CodeBlock
                language="jsx"
                code={`
          import React, { useContext } from 'react';
          import MeuContexto from './MeuContexto';
          
          const OutroComponente = () => {
            const { estadoGlobal, setEstadoGlobal } = useContext(MeuContexto);
          
            return (
              <div>
                <p>Estado Global no Outro Componente: {estadoGlobal}</p>
                <button onClick={() => setEstadoGlobal('Outro valor')}>Atualizar Estado Global</button>
              </div>
            );
          };
          `}
              />

              <h2>Conclusão</h2>
              <p>
                O Context API do React é uma poderosa ferramenta para
                compartilhar e gerenciar o estado global entre diversos
                componentes. Com a criação do contexto e do provedor, múltiplos
                componentes podem acessar e atualizar o estado global,
                proporcionando uma comunicação eficiente e uma organização mais
                clara do código.
              </p>
            </div>
          ),
        },
      ],
      [
        "React Router",
        {
          text: "Uso de bibliotecas de roteamento (React Router).",
          conteudo: (
            <div className="content">
              <h1>Uso de Bibliotecas de Roteamento (React Router)</h1>

              <p>
                Quando você está construindo um aplicativo React com várias
                páginas ou seções, é fundamental ter um sistema de navegação que
                permita aos usuários se movimentarem facilmente entre o
                conteúdo. O React Router é uma das bibliotecas mais populares
                para implementar esse tipo de navegação em aplicações React.
              </p>

              <h2>Instalação do React Router</h2>
              <p>
                Para começar a usar o React Router, você precisa instalá-lo em
                seu projeto. Você pode fazê-lo executando o seguinte comando:
              </p>
              <CodeBlock
                language="bash"
                code={`npm i -D react-router-dom@latest`}
              />

              <h2>Configuração Básica</h2>
              <p>
                Após a instalação, você pode começar a utilizar o React Router
                em seu aplicativo. Normalmente, a configuração envolve a
                definição de rotas no componente principal do seu aplicativo
                (geralmente chamado de <code>App.js</code>).
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
`}
              />

              <h2>Navegação entre Páginas</h2>
              <p>
                Agora você pode criar links de navegação para diferentes páginas
                usando o componente <code>&lt;Link&gt;</code> do React Router.
                Isso garante que a navegação seja tratada de forma eficiente sem
                a necessidade de recarregar a página inteira.
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Menu;
`}
              />

              <h2>Conclusão</h2>
              <p>
                O uso de bibliotecas de roteamento, como o React Router, é
                fundamental para criar uma experiência de navegação suave e
                organizada em aplicativos React com várias páginas. Configurar
                rotas, criar links e navegar entre as páginas se torna mais
                simples e eficiente com essa biblioteca.
              </p>
            </div>
          ),
        },
        {
          text: "Roteamento sem o uso do component <Link>",
          conteudo: (
            <div>
              <h1>Roteamento Sem o Uso do Componente &lt;Link&gt;</h1>

              <p>
                Além do uso do componente <code>&lt;Link&gt;</code> fornecido
                pelo React Router, você também pode realizar roteamento de forma
                programática sem a necessidade de utilizar esse componente. Isso
                é útil em cenários onde você deseja controlar a navegação
                através de funções ou botões personalizados.
              </p>

              <h2>Navegação Programática</h2>
              <p>
                Para realizar a navegação entre páginas sem o uso do{" "}
                <code>&lt;Link&gt;</code>, você pode utilizar o Hook{" "}
                <code>useHistory</code> disponibilizado pelo React Router. O{" "}
                <code>useHistory</code> permite manipular o histórico de
                navegação e realizar transições de página de forma imperativa.
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import {useHistory} from ‘react-router-dom’

const PaginaInicial = ({ history }) => {
  const navegarParaOutraPagina = () => {
    // Navega para a página "/outra"
    const history = useHistory();
    history.push('/outra');
  };

  return (
    <div>
      <h2>Página Inicial</h2>
      <button onClick={navegarParaOutraPagina}>Ir para Outra Página</button>
    </div>
  );
};

export default PaginaInicial;
`}
              />

              <h2>Conclusão</h2>
              <p>
                Ao utilizar funções e botões personalizados, você pode realizar
                roteamento sem o uso do componente <code>&lt;Link&gt;</code> no
                React Router. O Hook, <code>useHistory</code> permite que você
                controle a navegação de forma programática, tornando possível
                transições de página sob demanda através de ações do usuário.
              </p>
            </div>
          ),
        },
      ],
      [
        "Consumo de Apis",
        {
          text: "Fazendo requisiçoes para apis publicas",
          conteudo: (
            <div className="content">
              <h1>
                Fazendo Requisições para APIs Públicas em Aplicativos React
              </h1>

              <p>
                A integração de APIs públicas em um aplicativo React é uma
                tarefa comum para obter dados atualizados de fontes externas,
                como informações meteorológicas, dados de notícias, informações
                de produtos e muito mais. A linguagem JavaScript oferece várias
                maneiras de fazer requisições HTTP para essas APIs e obter os
                dados desejados.
              </p>

              <h2>Usando a Fetch API</h2>
              <p>
                A Fetch API é uma funcionalidade nativa do navegador que permite
                fazer requisições HTTP de forma assíncrona. Você pode utilizá-la
                para realizar solicitações GET, POST e outras.
              </p>

              <CodeBlock
                language="jsx"
                code={`
// Exemplo de uso da Fetch API para fazer uma requisição GET
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Dados da resposta da API
  })
  .catch(error => {
    console.error('Erro:', error);
  });
`}
              />

              <h2>Exemplo de Componente Realizando Chamada para API</h2>
              <p>
                Aqui está um exemplo de como um componente React pode fazer uma
                chamada para uma API utilizando a Fetch API:
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React, { useState, useEffect } from 'react';

const DadosDaApi = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://api.exemplo.com/dados')
      .then(response => response.json())
      .then(data => {
        setDados(data); // Atualiza o estado com os dados da API
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []); // O array vazio indica que o efeito será executado apenas uma vez, após a montagem do componente

  return (
    <div>
      <h2>Dados da API</h2>
      <ul>
        {dados.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default DadosDaApi;
`}
              />

              <h2>Conclusão</h2>
              <p>
                A integração de APIs públicas em aplicativos React é fundamental
                para obter dados atualizados e relevantes. Você pode utilizar a
                Fetch API ou bibliotecas de terceiros, como o Axios, para
                realizar requisições HTTP e obter os dados necessários para o
                seu aplicativo. Certifique-se de tratar os dados de forma
                adequada após receber a resposta da API.
              </p>
            </div>
          ),
        },
        {
          text: "Utilizando um component de loading",
          conteudo: (
            <div className="content">
              <h1>
                Utilizando um Componente de Loading nas Requisições a APIs
              </h1>

              <p>
                Quando você está fazendo requisições a APIs em um aplicativo
                React, pode haver momentos em que o tempo de resposta da API é
                maior. Para melhorar a experiência do usuário, é uma boa prática
                exibir um feedback visual, como um componente de loading, para
                indicar que a requisição está em andamento.
              </p>

              <h2>Exemplo de Componente de Loading</h2>
              <p>
                Aqui está um exemplo de como você pode criar um componente de
                loading simples em React:
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <span>Carregando...</span>
    </div>
  );
};

export default Loading;
`}
              />

              <h2>Integrando o Componente de Loading</h2>
              <p>
                Você pode integrar o componente de loading nas suas chamadas de
                API, exibindo-o enquanto aguarda a resposta da API e removendo-o
                quando a resposta for recebida.
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React, { useState, useEffect } from 'react';
import Loading from './Loading'; // Importe o componente de loading

const DadosDaApi = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o loading

  useEffect(() => {
    fetch('https://api.exemplo.com/dados')
      .then(response => response.json())
      .then(data => {
        setDados(data);
        setIsLoading(false); // Indica que a requisição foi finalizada
      })
      .catch(error => {
        console.error('Erro:', error);
        setIsLoading(false); // Indica que a requisição foi finalizada (mesmo que ocorra um erro)
      });
  }, []);

  return (
    <div>
      <h2>Dados da API</h2>
      {isLoading ? (
        <Loading /> // Exibe o componente de loading enquanto aguarda a resposta da API
      ) : (
        <ul>
          {dados.map(item => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DadosDaApi;
`}
              />

              <h2>Conclusão</h2>
              <p>
                A utilização de um componente de loading durante as requisições
                a APIs em aplicativos React melhora a experiência do usuário,
                indicando que a informação está sendo carregada. Integrar o
                componente de loading com o estado de isLoading permite exibir
                um feedback visual adequado durante o processo de obtenção de
                dados da API.
              </p>
            </div>
          ),
        },
        {
          text: "Lidando com erros na api",
          conteudo: (
            <div className="content">
              <h1>
                Lidando com Erros na API e Utilizando um Componente de Mensagem
                de Erro
              </h1>

              <p>
                Quando você está fazendo requisições a APIs em um aplicativo
                React, é importante lidar com possíveis erros que possam ocorrer
                durante o processo de obtenção dos dados. Além disso, exibir um
                componente de mensagem de erro pode ajudar a fornecer um
                feedback claro ao usuário quando algo não estiver funcionando
                corretamente.
              </p>

              <h2>Exemplo de Componente de Mensagem de Erro</h2>
              <p>
                Aqui está um exemplo de como você pode criar um componente de
                mensagem de erro simples em React:
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
`}
              />

              <h2>Lidando com Erros na Requisição</h2>
              <p>
                Você pode tratar erros em requisições a APIs utilizando blocos{" "}
                <code>try</code> e <code>catch</code> ou utilizando o método{" "}
                <code>.catch()</code> após a promessa da requisição. Caso ocorra
                um erro, você pode atualizar o estado para exibir uma mensagem
                de erro utilizando o componente que você criou.
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage'; // Importe o componente de mensagem de erro

const DadosDaApi = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para controlar o erro

  useEffect(() => {
    fetch('https://api.exemplo.com/dados')
      .then(response => response.json())
      .then(data => {
        setDados(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro:', error);
        setError('Ocorreu um erro ao obter os dados.'); // Define a mensagem de erro
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Dados da API</h2>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} /> // Exibe o componente de mensagem de erro caso ocorra um erro
      ) : (
        <ul>
          {dados.map(item => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DadosDaApi;
`}
              />

              <h2>Conclusão</h2>
              <p>
                Lidar com erros na API é fundamental para fornecer uma
                experiência de usuário melhor. Utilizando um componente de
                mensagem de erro, você pode exibir mensagens claras e relevantes
                para os usuários quando algo não sair como esperado durante o
                processo de obtenção de dados da API em um aplicativo React.
              </p>
            </div>
          ),
        },
      ],
    ],
  ],
  [
    "Testando seu Projeto",
    [
      [
        "Iniciando nos testes",
        {
          text: "Biblioteca de testes React",
          conteudo: (
            <div className="content">
              <h1>Testes no Desenvolvimento de Aplicativos React</h1>

              <p>
                Testes desempenham um papel fundamental no desenvolvimento de
                aplicativos React, garantindo que o código funcione como
                esperado, seja robusto e livre de erros. Existem diferentes
                tipos de testes que podem ser aplicados em um projeto React para
                alcançar uma maior confiabilidade e qualidade do código.
              </p>

              <h2>Tipos de Testes</h2>
              <ul>
                <li>
                  <strong>Testes Unitários:</strong> Esses testes se concentram
                  em testar partes individuais do código, como funções,
                  componentes ou módulos, isoladamente. Bibliotecas como Jest e
                  React Testing Library são frequentemente usadas para criar
                  testes unitários em React.
                </li>
                <li>
                  <strong>Testes de Integração:</strong> Esses testes avaliam
                  como diferentes partes do aplicativo interagem entre si. Eles
                  garantem que os componentes funcionem corretamente em conjunto
                  e que as funcionalidades integradas se comportem como
                  esperado.
                </li>
                <li>
                  <strong>Testes de Interface:</strong> Também conhecidos como
                  testes de UI, eles simulam a interação do usuário com o
                  aplicativo para verificar se a interface gráfica está
                  respondendo adequadamente e exibindo os dados corretamente.
                </li>
                <li>
                  <strong>Testes de Snapshot:</strong> Esses testes capturam a
                  representação atual de um componente ou uma parte do
                  aplicativo e comparam com um "snapshot" anterior para
                  verificar se houve mudanças não intencionais no código.
                </li>
              </ul>

              <h2>Ferramentas de Teste</h2>
              <p>
                Existem várias ferramentas populares para criar testes em
                aplicativos React:
              </p>
              <ul>
                <li>
                  <strong>Jest:</strong> Uma biblioteca de testes completa que
                  oferece suporte a testes de unidade, integração e snapshot.
                  Vem com um ambiente de execução de testes integrado.
                </li>
                <li>
                  <strong>React Testing Library:</strong> Uma biblioteca focada
                  em testar componentes React da perspectiva do usuário final,
                  incentivando práticas de teste que se assemelham à interação
                  do usuário real.
                </li>
                <li>
                  <strong>Testing Frameworks:</strong> Além de Jest, você pode
                  integrar frameworks de testes mais amplos, como Mocha ou
                  Jasmine, com bibliotecas específicas do React.
                </li>
              </ul>

              <h2>Vantagens dos Testes</h2>
              <ul>
                <li>
                  Maior Confiança: Testes garantem que o código funcione como
                  esperado, reduzindo erros e comportamentos inesperados.
                </li>
                <li>
                  Facilita a Manutenção: Testes documentam o comportamento
                  esperado do código, facilitando a manutenção e evolução do
                  aplicativo.
                </li>
                <li>
                  Redução de Bugs: Testes identificam problemas cedo, evitando
                  que bugs cheguem ao ambiente de produção.
                </li>
                <li>
                  Melhor Refatoração: Testes permitem que você faça alterações
                  no código com mais confiança, sabendo que os testes podem
                  pegar regressões.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                Testes são uma parte crucial do desenvolvimento de aplicativos
                React, ajudando a garantir a qualidade e a confiabilidade do
                código. Ao aplicar diferentes tipos de testes e utilizar
                ferramentas adequadas, você pode criar aplicativos mais sólidos
                e resistentes a erros.
              </p>
            </div>
          ),
        },
        {
          text: "Jest",
          conteudo: (
            <div className="content">
              <h1>Utilizando Jest para Testes em Aplicativos React</h1>

              <p>
                O Jest é uma biblioteca de testes amplamente utilizada no
                ecossistema do React para criar testes de unidade, integração e
                snapshot. Ele fornece uma estrutura robusta para escrever,
                executar e gerenciar testes automatizados em projetos React,
                tornando a validação do código mais eficiente e confiável.
              </p>

              <h2>Configuração Básica</h2>
              <p>
                Para começar a usar o Jest em um projeto React, siga esses
                passos básicos:
              </p>

              <ol>
                <li>
                  Instale o Jest como dependência de desenvolvimento:
                  <CodeBlock
                    language={"javascript"}
                    code={` npm install --save-dev jest `}
                  />
                </li>
                <li>
                  Crie um arquivo de teste com a extensão <code>.test.js</code>{" "}
                  ou <code>.spec.js</code> junto ao arquivo que você deseja
                  testar.
                </li>
                <li>
                  Escreva seus testes dentro desse arquivo utilizando as funções
                  e métodos fornecidos pelo Jest.
                </li>
                <li>
                  Execute seus testes usando o comando <code>npm test</code>.
                </li>
              </ol>

              <h2>Adicionando o Jest ao package.json</h2>
              <p>
                Depois de instalar o Jest, você pode configurar o script para
                executar seus testes no arquivo <code>package.json</code>:
              </p>

              <CodeBlock
                language="json"
                code={`
  // Arquivo: package.json

  {
  // ...
  "scripts": {
    "test": "jest"
  }
  }
  `}
              />

              <h2>Exemplo de Teste com Jest</h2>
              <p>
                Aqui está um exemplo básico de como escrever um teste de unidade
                para uma função em um componente React utilizando o Jest:
              </p>

              <CodeBlock
                language="jsx"
                code={`
  // Arquivo: minhaFuncao.js

  export const minhaFuncao = (a, b) => a + b;
  `}
              />

              <CodeBlock
                language="jsx"
                code={`
  // Arquivo: minhaFuncao.test.js

  import { minhaFuncao } from './minhaFuncao';

  test('Deve somar dois números corretamente', () => {
  expect(minhaFuncao(2, 3)).toBe(5);
  });
  `}
              />

              <h2>Funcionalidades do Jest</h2>
              <p>
                O Jest oferece diversas funcionalidades para criar testes de
                forma eficaz:
              </p>

              <ul>
                <li>
                  <strong>Matchers:</strong> Funções como <code>expect</code> e{" "}
                  <code>toBe</code> são usadas para testar resultados esperados.
                </li>
                <li>
                  <strong>Mocking:</strong> O Jest permite criar mocks para
                  substituir módulos externos e simular comportamentos.
                </li>
                <li>
                  <strong>Test Environment:</strong> O ambiente de teste do Jest
                  simula um ambiente de navegador, permitindo testar código que
                  interage com o DOM.
                </li>
                <li>
                  <strong>Snapshot Testing:</strong> O Jest oferece suporte a
                  testes de snapshot, que capturam uma representação serializada
                  do componente e podem detectar regressões visuais.
                </li>
              </ul>

              <h2>Executando Testes no Terminal</h2>
              <p>
                Para rodar seus testes utilizando o Jest no terminal, execute o
                seguinte comando:
              </p>

              <CodeBlock language={"javascript"} code={` npm test `} />

              <p>
                O Jest procurará automaticamente por arquivos de teste com as
                extensões <code>.test.js</code> e <code>.spec.js</code> e
                executará os testes neles contidos.
              </p>

              <h2>Verificando Resultados dos Testes</h2>
              <p>
                Após executar os testes, o Jest exibirá os resultados no
                terminal, indicando quais testes passaram e quais falharam. Você
                também verá informações sobre cobertura de código, tempo de
                execução e outros detalhes relevantes.
              </p>

              <p>
                Os resultados serão apresentados de forma clara, indicando os
                testes que passaram com sucesso e os que precisam de atenção.
              </p>

              <h2>Conclusão</h2>
              <p>
                O Jest é uma ferramenta poderosa para criar testes automatizados
                em projetos React. Usando suas funcionalidades, você pode criar
                testes de unidade, integração e snapshot para garantir a
                qualidade e a robustez do seu código React.
              </p>
            </div>
          ),
        },
        {
          text: "RTL",
          conteudo: (
            <div className="content">
              <h1>
                React Testing Library (RTL): Detalhes, Dicas e Ferramentas
              </h1>

              <p>
                O React Testing Library (RTL) é uma biblioteca projetada para
                facilitar a criação de testes realistas e confiáveis para
                aplicativos React. Ele se concentra em testar componentes da
                maneira como eles são usados pelos usuários, focando nas
                interações reais e proporcionando uma experiência de teste mais
                próxima do comportamento do usuário final.
              </p>

              <h2>Princípios do RTL</h2>
              <p>O RTL é construído sobre os seguintes princípios:</p>

              <ul>
                <li>
                  <strong>Teste pelo Comportamento:</strong> Em vez de focar
                  apenas nos detalhes de implementação, teste como os usuários
                  interagem com o componente.
                </li>
                <li>
                  <strong>Simulação de Eventos:</strong> Use o método{" "}
                  <code>fireEvent</code> para simular interações como cliques,
                  digitação e seleções.
                </li>
                <li>
                  <strong>Seletores de Acessibilidade:</strong> Utilize
                  atributos acessíveis, como <code>getByText</code> e{" "}
                  <code>getByRole</code>, para encontrar elementos na árvore de
                  componentes.
                </li>
              </ul>

              <h2>Funcionalidades e Ferramentas</h2>
              <p>
                O RTL oferece uma série de funcionalidades e ferramentas úteis
                para facilitar a criação de testes:
              </p>

              <ul>
                <li>
                  <strong>
                    <code>render:</code>
                  </strong>{" "}
                  Função para renderizar componentes no teste, retornando uma
                  série de métodos para buscar elementos.
                </li>
                <li>
                  <strong>
                    <code>getByText:</code>
                  </strong>{" "}
                  Encontre um elemento pelo seu texto visível.
                </li>
                <li>
                  <strong>
                    <code>getByRole:</code>
                  </strong>{" "}
                  Encontre um elemento pelo seu papel (por exemplo, "button",
                  "heading", etc.).
                </li>
                <li>
                  <strong>
                    <code>getByTestId:</code>
                  </strong>{" "}
                  Encontre um elemento pelo atributo <code>data-testid</code>.
                </li>
                <li>
                  <strong>
                    <code>findBy:</code>
                  </strong>{" "}
                  Função assíncrona para buscar elementos, útil para aguardar
                  por elementos que podem estar atrasados.
                </li>
                <li>
                  <strong>
                    <code>waitFor:</code>
                  </strong>{" "}
                  Função para aguardar até que uma condição seja atendida (por
                  exemplo, um elemento apareça ou desapareça).
                </li>
                <li>
                  <strong>
                    <code>fireEvent:</code>
                  </strong>{" "}
                  Simule eventos como cliques, inputs e teclas.
                </li>
              </ul>

              <h2>Dicas para Usar o RTL</h2>
              <p>
                Aqui estão algumas dicas para aproveitar ao máximo o React
                Testing Library:
              </p>

              <ul>
                <li>
                  <strong>Mantenha-se Focado no Usuário:</strong> Pense nas
                  interações reais dos usuários e teste essas interações.
                </li>
                <li>
                  <strong>Evite Acessar Detalhes Internos:</strong> Não acesse
                  diretamente estados ou props internos. Use os métodos de busca
                  baseados em acessibilidade.
                </li>
                <li>
                  <strong>
                    Use Atributos <code>data-testid</code> com Moderação:
                  </strong>{" "}
                  Eles são úteis para casos complexos, mas podem afetar a
                  semântica do HTML.
                </li>
              </ul>

              <h2>Integração com Jest</h2>
              <p>
                O RTL é frequentemente usado em conjunto com o Jest, um
                framework de testes poderoso. Essa combinação permite criar
                testes completos e confiáveis para componentes React.
              </p>

              <h2>Conclusão</h2>
              <p>
                O React Testing Library (RTL) é uma ferramenta valiosa para
                escrever testes de componentes React que refletem as interações
                dos usuários. Suas funcionalidades e abordagem orientada a
                comportamento tornam os testes mais robustos e eficazes,
                contribuindo para a qualidade do código e para a melhor
                experiência do usuário final.
              </p>
            </div>
          ),
        },
        {
          text: "RTL: metodo Render",
          conteudo: (
            <div className="content">
              <h1>
                React Testing Library (RTL): Método <code>render</code>
              </h1>

              <p>
                O método <code>render</code> é uma das principais
                funcionalidades fornecidas pelo React Testing Library (RTL). Ele
                é usado para renderizar um componente React dentro de um
                ambiente de teste, permitindo que você interaja com o componente
                e teste seu comportamento de maneira realista.
              </p>

              <h2>
                Uso Básico do Método <code>render</code>
              </h2>
              <p>
                Para usar o método <code>render</code>, você pode importá-lo do
                pacote <code>@testing-library/react</code>. Ele recebe um
                componente React como argumento e retorna um objeto contendo
                vários métodos úteis para buscar elementos na árvore de
                componentes renderizados.
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import { render } from '@testing-library/react';
import MeuComponente from './MeuComponente';

const { getByText, getByRole } = render(<MeuComponente />);
`}
              />

              <h2>
                Métodos Retornados pelo <code>render</code>
              </h2>
              <p>
                O objeto retornado pelo método <code>render</code> inclui uma
                série de métodos que você pode usar para buscar elementos dentro
                do componente renderizado:
              </p>

              <ul>
                <li>
                  <strong>
                    <code>getByText:</code>
                  </strong>{" "}
                  Busca um elemento pelo seu texto visível.
                </li>
                <li>
                  <strong>
                    <code>getByRole:</code>
                  </strong>{" "}
                  Busca um elemento pelo seu papel (por exemplo, "button",
                  "heading", etc.).
                </li>
                <li>
                  <strong>
                    <code>getByTestId:</code>
                  </strong>{" "}
                  Busca um elemento pelo atributo <code>data-testid</code>.
                </li>
                <li>
                  <strong>
                    <code>findBy:</code>
                  </strong>{" "}
                  Função assíncrona para buscar elementos, útil para aguardar
                  por elementos que podem estar atrasados.
                </li>
                <li>
                  <strong>
                    <code>waitFor:</code>
                  </strong>{" "}
                  Função para aguardar até que uma condição seja atendida (por
                  exemplo, um elemento apareça ou desapareça).
                </li>
                <li>
                  <strong>
                    <code>queryBy:</code>
                  </strong>{" "}
                  Funciona como os métodos anteriores, mas retorna{" "}
                  <code>null</code> se o elemento não for encontrado.
                </li>
                <li>
                  <strong>
                    <code>getAllBy:</code>
                  </strong>{" "}
                  Retorna uma lista de elementos que correspondem ao critério
                  especificado.
                </li>
                <li>
                  <strong>
                    <code>queryAllBy:</code>
                  </strong>{" "}
                  Funciona como <code>getAllBy</code>, mas retorna uma lista
                  vazia se nenhum elemento for encontrado.
                </li>
              </ul>

              <h2>Exemplo de Uso</h2>
              <p>
                Aqui está um exemplo de como usar o método <code>render</code> e
                alguns dos métodos retornados para buscar elementos em um
                componente renderizado:
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import { render } from '@testing-library/react';
import MeuComponente from './MeuComponente';

const { getByText, getByRole } = render(<MeuComponente />);

const textoElement = getByText(/Olá, Mundo!/i);
const botaoElement = getByRole('button', { name: 'Clique-me' });
`}
              />

              <h2>Conclusão</h2>
              <p>
                O método <code>render</code> do React Testing Library é uma
                ferramenta fundamental para renderizar componentes React em
                testes. Ele fornece uma série de métodos de busca que permitem
                interagir com os elementos do componente renderizado de maneira
                intuitiva e eficiente.
              </p>
            </div>
          ),
        },
      ],
      [
        "Tipos de Testes no React",
        {
          text: "Testes Unitários",
          conteudo: (
            <div className="content">
              <h1>
                Testes Unitários no React com React Testing Library (RTL) e Jest
              </h1>

              <p>
                Testes unitários são essenciais para garantir que partes
                individuais do seu código funcionem corretamente. O React
                Testing Library (RTL) é uma biblioteca popular para criar testes
                unitários em aplicativos React, junto com o Jest, um poderoso
                framework de testes, formando uma dupla poderosa para testar
                componentes React.
              </p>

              <h2>Configuração Inicial</h2>
              <p>
                Para começar a usar o React Testing Library e Jest para testes
                unitários no React, siga os passos abaixo:
              </p>

              <ol>
                <li>
                  Instale as dependências do React Testing Library e do Jest:
                  <pre>
                    <code>
                      npm install --save-dev @testing-library/react
                      @testing-library/jest-dom jest
                    </code>
                  </pre>
                </li>
                <li>
                  Crie um arquivo de teste com a extensão <code>.test.js</code>{" "}
                  ao lado do arquivo que você deseja testar.
                </li>
                <li>
                  Escreva seus testes dentro desse arquivo utilizando as funções
                  e métodos fornecidos pelo React Testing Library e pelo Jest.
                </li>
                <li>
                  Execute seus testes usando o comando <code>npm test</code>.
                </li>
              </ol>

              <h2>Exemplo de Teste com RTL e Jest</h2>
              <p>
                Aqui está um exemplo básico de como criar um teste unitário para
                um componente React utilizando o React Testing Library e o Jest:
              </p>

              <CodeBlock
                language="jsx"
                code={`
// Arquivo: MeuComponente.js

import React from 'react';

const MeuComponente = ({ texto }) => {
  return <div>{texto}</div>;
};

export default MeuComponente;
`}
              />

              <CodeBlock
                language="jsx"
                code={`
// Arquivo: MeuComponente.test.js

import React from 'react';
import { render } from '@testing-library/react';
import MeuComponente from './MeuComponente';

test('Deve renderizar o texto corretamente', () => {
  const { getByText } = render(<MeuComponente texto="Olá, Mundo!" />);
  const textoElement = getByText(/Olá, Mundo!/i);
  expect(textoElement).toBeInTheDocument();
});
`}
              />

              <h2>Funcionalidades do RTL e Jest</h2>
              <p>
                O React Testing Library oferece várias funções para facilitar a
                criação de testes unitários:
              </p>

              <ul>
                <li>
                  <strong>
                    <code>render:</code>
                  </strong>{" "}
                  Função para renderizar o componente no teste.
                </li>
                <li>
                  <strong>
                    <code>getByText:</code>
                  </strong>{" "}
                  Função para buscar elementos pelo texto.
                </li>
                <li>
                  <strong>
                    <code>findByText:</code>
                  </strong>{" "}
                  Função assíncrona para buscar elementos pelo texto.
                </li>
                <li>
                  <strong>
                    <code>fireEvent:</code>
                  </strong>{" "}
                  Função para simular eventos como cliques e inputs.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                A combinação do React Testing Library (RTL) e Jest oferece uma
                maneira eficaz de realizar testes unitários em aplicativos
                React. Ao criar testes com RTL, você se concentra nas interações
                do usuário com os componentes, resultando em testes mais
                realistas e confiáveis para garantir a qualidade do seu código.
              </p>
            </div>
          ),
        },
        {
          text: "Testes de Integração",
          conteudo: (
            <div className="content">
              <h1>Testes de Integração com Jest e React Testing Library</h1>

              <p>
                Os testes de integração usando o Jest em conjunto com o React
                Testing Library são uma abordagem poderosa para garantir que as
                diferentes partes do seu aplicativo React interajam corretamente
                e funcionem bem juntas. Isso permite validar fluxos completos e
                interações entre componentes e módulos, aumentando a
                confiabilidade e a qualidade do seu aplicativo.
              </p>

              <h2>Configuração Básica</h2>
              <p>
                Para começar a fazer testes de integração com o Jest e o React
                Testing Library, siga estas etapas:
              </p>

              <ol>
                <li>
                  <strong>Instale as Dependências:</strong> Certifique-se de ter
                  instalado o Jest e o React Testing Library no seu projeto.
                </li>
                <li>
                  <strong>Crie seus Testes:</strong> Crie arquivos de teste com
                  a extensão <code>.test.js</code> ou <code>.spec.js</code> para
                  os componentes e fluxos que você deseja testar.
                </li>
                <li>
                  <strong>Importe Componentes:</strong> Importe os componentes
                  que você deseja testar e o React Testing Library.
                </li>
                <li>
                  <strong>Use Métodos do RTL:</strong> Use os métodos do React
                  Testing Library, como <code>render</code> para renderizar
                  componentes e <code>getBy</code> para buscar elementos na
                  árvore renderizada.
                </li>
                <li>
                  <strong>Realize Interações:</strong> Simule interações do
                  usuário, como cliques e preenchimento de formulários, usando o
                  método <code>fireEvent</code> do RTL.
                </li>
                <li>
                  <strong>Verifique Resultados:</strong> Use asserções do Jest
                  para verificar se o comportamento e o estado dos componentes
                  estão de acordo com o esperado.
                </li>
              </ol>

              <h2>Exemplo de Teste de Integração</h2>
              <p>
                Aqui está um exemplo de um teste de integração usando o Jest e o
                React Testing Library:
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MeuComponente from './MeuComponente';

test('Teste de Integração', () => {
  // Renderiza o componente
  const { getByText, getByRole } = render(<MeuComponente />);

  // Encontra um botão e simula um clique
  const botao = getByRole('button', { name: 'Clique-me' });
  fireEvent.click(botao);

  // Verifica se o resultado esperado está na tela
  const resultado = getByText('Ação realizada com sucesso!');
  expect(resultado).toBeInTheDocument();
});
`}
              />

              <h2>Dicas para Testes de Integração</h2>
              <p>
                Aqui estão algumas dicas para realizar testes de integração
                eficazes:
              </p>

              <ul>
                <li>
                  <strong>Foque em Cenários Reais:</strong> Crie testes que
                  representem fluxos e interações reais do usuário.
                </li>
                <li>
                  <strong>Evite Testes Muito Acoplados:</strong> Teste a
                  interação entre componentes, mas evite testes excessivamente
                  acoplados.
                </li>
                <li>
                  <strong>Divida os Testes:</strong> Divida testes em arquivos
                  separados para manter o código de teste organizado.
                </li>
                <li>
                  <strong>Use o State e Props:</strong> Use <code>props</code>{" "}
                  para injetar dados nos componentes e <code>fireEvent</code>{" "}
                  para simular interações.
                </li>
              </ul>

              <h2>Conclusão</h2>
              <p>
                Os testes de integração usando o Jest e o React Testing Library
                são uma abordagem valiosa para validar a interação entre
                diferentes partes do seu aplicativo React. Eles ajudam a
                garantir que os fluxos de trabalho e componentes funcionem bem
                juntos, resultando em um aplicativo mais confiável e de alta
                qualidade.
              </p>
            </div>
          ),
        },
        {
          text: "Testes de Interface",
          conteudo: (
            <div className="content">
              <h1>Testes de Interface com Jest e React Testing Library</h1>

              <p>
                Os testes de interface, também conhecidos como testes de
                interface de usuário, focam em garantir que a interface do seu
                aplicativo funcione conforme o esperado para os usuários. Ao
                combinar o Jest com o React Testing Library, você pode criar
                testes que simulam as interações dos usuários com a interface e
                verificam se os componentes respondem adequadamente.
              </p>

              <h2>Testando Interações do Usuário</h2>
              <p>
                Os testes de interface se concentram em simular as ações dos
                usuários na interface e validar os resultados. Para realizar
                esses testes, siga estas etapas:
              </p>

              <ol>
                <li>
                  <strong>Renderize o Componente:</strong> Use o método{" "}
                  <code>render</code> do RTL para renderizar o componente que
                  deseja testar.
                </li>
                <li>
                  <strong>Encontre Elementos:</strong> Use os métodos do RTL
                  para localizar elementos na árvore renderizada, como{" "}
                  <code>getBy</code> e <code>queryBy</code>.
                </li>
                <li>
                  <strong>Simule Interações:</strong> Use o método{" "}
                  <code>fireEvent</code> para simular ações do usuário, como
                  cliques, digitação e mais.
                </li>
                <li>
                  <strong>Verifique Resultados:</strong> Use asserções do Jest
                  para verificar se os resultados da interação estão de acordo
                  com o esperado.
                </li>
              </ol>

              <h2>Exemplo de Teste de Interface</h2>
              <p>
                Aqui está um exemplo de um teste de interface usando o Jest e o
                React Testing Library:
              </p>

              <CodeBlock
                language="jsx"
                code={`
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MeuFormulario from './MeuFormulario';

test('Teste de Interface: Preenchendo e Enviando Formulário', () => {
  // Renderiza o componente
  const { getByLabelText, getByRole } = render(<MeuFormulario />);

  // Encontra os campos de entrada
  const nomeInput = getByLabelText('Nome');
  const emailInput = getByLabelText('Email');

  // Simula a digitação nos campos
  fireEvent.change(nomeInput, { target: { value: 'João' } });
  fireEvent.change(emailInput, { target: { value: 'joao@example.com' } });

  // Encontra e simula o clique no botão de envio
  const botaoEnviar = getByRole('button', { name: 'Enviar' });
  fireEvent.click(botaoEnviar);

  // Verifica se a mensagem de sucesso está presente
  const mensagemSucesso = getByText('Formulário enviado com sucesso!');
  expect(mensagemSucesso).toBeInTheDocument();
});
`}
              />

              <h2>Dicas para Testes de Interface</h2>
              <p>
                Aqui estão algumas dicas para realizar testes de interface
                eficazes:
              </p>

              <ul>
                <li>
                  <strong>Seja Realista:</strong> Crie cenários que reflitam
                  casos reais de uso e interações dos usuários.
                </li>
                <li>
                  <strong>Foque nas Ações Principais:</strong> Teste as ações
                  mais importantes e críticas que os usuários realizam na
                  interface.
                </li>
                <li>
                  <strong>Evite Detalhes de Implementação:</strong> Concentre-se
                  no comportamento da interface, não nos detalhes internos da
                  implementação.
                </li>
                <li>
                  <strong>Considere Diferentes Cenários:</strong> Teste
                  diferentes caminhos e casos de erro que os usuários podem
                  enfrentar.
                </li>
              </ul>

              <h2>
                Diferenças entre Testes de Integração e Testes de Interface
              </h2>

              <p>
                Embora os termos "testes de integração" e "testes de interface"
                muitas vezes sejam usados de forma intercambiável, eles se
                referem a abordagens ligeiramente diferentes para testar um
                aplicativo. Aqui estão as principais diferenças entre esses dois
                tipos de testes:
              </p>

              <h3>Testes de Integração</h3>
              <ul>
                <li>
                  <strong>Foco:</strong> Os testes de integração focam em
                  verificar a interação harmoniosa entre diferentes partes de um
                  aplicativo, como módulos, componentes e fluxos de trabalho.
                </li>
                <li>
                  <strong>Escopo:</strong> Eles podem envolver vários
                  componentes e caminhos de execução, garantindo que o sistema
                  funcione como um todo.
                </li>
                <li>
                  <strong>Objetivo:</strong> Testam a integração de componentes
                  e a comunicação entre eles para validar a colaboração correta.
                </li>
                <li>
                  <strong>Exemplos:</strong> Verificar se a adição de um item ao
                  carrinho de compras atualiza o subtotal e a quantidade total
                  corretamente.
                </li>
              </ul>

              <h3>Testes de Interface</h3>
              <ul>
                <li>
                  <strong>Foco:</strong> Os testes de interface, também
                  conhecidos como testes de interface de usuário, se concentram
                  em validar o comportamento e a aparência da interface do
                  aplicativo conforme as ações do usuário.
                </li>
                <li>
                  <strong>Escopo:</strong> Eles geralmente se concentram em
                  fluxos de trabalho específicos, simulando ações do usuário e
                  verificando os resultados visuais e de interação.
                </li>
                <li>
                  <strong>Objetivo:</strong> Testam a experiência do usuário,
                  garantindo que a interface funcione de acordo com o esperado.
                </li>
                <li>
                  <strong>Exemplos:</strong> Verificar se o preenchimento de um
                  formulário e o envio geram a mensagem de sucesso esperada.
                </li>
              </ul>

              <h3>Combinação:</h3>
              <p>
                Embora diferentes em foco, os testes de integração e de
                interface podem se sobrepor. Por exemplo, um teste de interface
                pode abranger múltiplos componentes, tornando-o também um teste
                de integração. A escolha entre qual abordagem usar depende dos
                cenários que você deseja validar.
              </p>

              <h2>Conclusão</h2>
              <p>
                Os testes de interface com o Jest e o React Testing Library
                permitem validar a interação dos usuários com a interface do seu
                aplicativo. Ao simular ações e verificar resultados, você
                garante que a experiência do usuário seja confiável e de alta
                qualidade.
              </p>
            </div>
          ),
        },
        {
          text: "Testes de Snapshot",
          conteudo: <div className="content">
            <h1>Testes de Snapshot com Jest e React Testing Library</h1>

<p>Os testes de snapshot são uma forma eficaz de verificar se a saída renderizada dos componentes permanece consistente ao longo do tempo. Usando o Jest e o React Testing Library, você pode criar snapshots para componentes e compará-los com as versões anteriores para detectar alterações indesejadas.</p>

<h2>Testando Snapshots</h2>
<p>Os testes de snapshot envolvem a captura do estado renderizado dos seus componentes e a comparação com snapshots anteriores. Isso ajuda a detectar mudanças inesperadas na renderização que podem ocorrer durante o desenvolvimento.</p>

<ol>
  <li><strong>Criando Snapshots:</strong> Use o método <code>toMatchSnapshot</code> do Jest para criar snapshots de componentes.</li>
  <li><strong>Primeira Execução:</strong> Na primeira execução, o Jest cria os snapshots e os armazena.</li>
  <li><strong>Execuções Posteriores:</strong> Nas execuções seguintes, o Jest compara os snapshots atuais com os armazenados anteriormente.</li>
  <li><strong>Atualização de Snapshots:</strong> Se uma alteração for intencional, você pode atualizar os snapshots usando a opção <code>--updateSnapshot</code>.</li>
</ol>

<h2>Exemplo de Teste de Snapshot</h2>
<p>Aqui está um exemplo de um teste de snapshot usando o Jest e o React Testing Library:</p>

<CodeBlock language="jsx" code={`
import React from 'react';
import { render } from '@testing-library/react';
import MeuComponente from './MeuComponente';

test('Teste de Snapshot', () => {
  // Renderiza o componente
  const { asFragment } = render(<MeuComponente />);

  // Cria um snapshot e compara com versão anterior
  expect(asFragment()).toMatchSnapshot();
});
`} />

<h2>Dicas para Testes de Snapshot</h2>
<p>Aqui estão algumas dicas para realizar testes de snapshot eficazes:</p>

<ul>
  <li><strong>Atualizações Intencionais:</strong> Se você fizer alterações intencionais na renderização, atualize os snapshots para refletir essas mudanças.</li>
  <li><strong>Cuidado com Alterações Inesperadas:</strong> Os testes de snapshot ajudam a detectar mudanças não planejadas na renderização, como alterações visuais indesejadas.</li>
  <li><strong>Combine com Outros Testes:</strong> Os testes de snapshot são uma ferramenta útil, mas podem ser complementados por outros tipos de testes, como testes de unidade e testes de interface.</li>
</ul>

<h2>Conclusão</h2>
<p>Os testes de snapshot com o Jest e o React Testing Library são uma maneira eficaz de verificar se a renderização dos componentes permanece consistente ao longo do desenvolvimento. Eles ajudam a identificar alterações inesperadas na aparência e no comportamento do seu aplicativo.</p>

          </div>,
        },
      ],
    ],
  ],
];
