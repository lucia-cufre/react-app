# Client List React App

### Install dependencies

```
npm install
```
### Run Server

```
npm run start
```
### Technologies applied

```
React.js e Material UI.
```
### Details about the application created

Como primeiro passo criei a aplicação, e instalei todas as dependências necessárias. Após isso comecei criando as rotas para navegar entre as paginas. Criei os hooks que iria precisar, como o useRequestData, a partir do qual é possível acceder as informações da API desde qualquer outra função. Armazenei a base url a ser utilizada no projeto na pasta de constants. Uma vez isso feito, comecei a construir o que seria as funcionalidades da pagina inicial, em conjunto com seus componentes, o feedCard e o appBarFeed. A seguir implementei as funcionalidades da pagina com os detalhes do cliente no mesmo arquivo de clientDetailsPage, as quais mais tarde iriam ser direcionadas para o componente detailsCard e appBarDetails.

Finalmente com todas as funcionalidades implementadas realizei a estilização da aplicação com a biblioteca Material UI.

No processo me encontrei com uma dificuldade, a API que tinha escolhido no inicio tinha um limite de uso por dia. No primeiro momento esta era uma aplicação que listava os melhores filmes dos últimos meses, porém depois de perceber este inconveniente, resolvi trocar de API. Após procurar por APIs que fossem semelhantes com a estrutura que eu tinha realizado, escolhi consumir a API random users, a qual já tinha utilizado em outra ocasião, realizei todas as modificações necessárias no projeto e assim, minha lista de melhores filmes se converteu numa lista de clientes, onde é possível visualizar as principais informações relevantes de cada um.  

### Deploy link;

https://remarkable-bienenstitch-779d4b.netlify.app/