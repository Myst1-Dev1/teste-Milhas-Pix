
# Teste Técnico - MilhasPix

Este é um projeto desenvolvido em **Next.js** como parte do teste técnico, envolvendo cadastro de ofertas, consumo de APIs REST, validação de formulários e animações.

---

# Demo 
    https://teste-milhas-pix.vercel.app/

---

## Tecnologias Utilizadas

- **Next.js**
- **React**  
- **React Hook Form** - para gerenciamento de formulários  
- **Zod** - para validação de dados  
- **GSAP** - para animações  
- **React Router / Next.js Routing** - para navegação entre páginas  
- **Local Storage** - para simulação de armazenamento de dados de formulário  

---

## Funcionalidades

### Tela de Cadastro de Oferta

- Formulário dividido em etapas com **React Hook Form** e validação com **Zod**.  
- Máscara de input para valores monetários (milheiro para real, R$).  
- Ao digitar o valor do milheiro, o sistema envia requisições para a API de ranking:  

```http
GET https://api.milhaspix.com/simulate-ranking?mile_value={valor}
```

- Atualiza a lista de ranking exibida ao lado da tela em tempo real.
- Animações de entrada e saída de elementos usando GSAP.
- Dados do formulário são salvos no localStorage.
- Ao concluir todas as etapas, os dados cadastrados são exibidos no console.

### Tela de Lista de Ofertas

- Requisição GET para a API de ofertas:

```http
GET https://api.milhaspix.com/simulate-offers-list
```

- Exibição das ofertas retornadas em uma tabela/lista.
- Navegação entre "Nova Oferta" e "Ver minhas ofertas" usando Next.js Routing.

---

## Rodando o Projeto Localmente

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
# ou
pnpm install
```

3. Rode a aplicação:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## Notas Técnicas

- Não foi fornecida uma API POST, portanto o formulário utiliza **localStorage** para armazenar dados temporariamente.
- O formulário possui validação em cada etapa usando **Zod** e **React Hook Form**, garantindo que os dados estejam corretos antes de avançar.
- As animações são feitas com **GSAP**, garantindo transições suaves entre elementos.
- O consumo da API de ranking é feito a cada digitação no input de milheiro, garantindo atualização dinâmica da lista de ranking.
- Foi criada uma rota proxy no Next.js (App Router) (/api/ranking) para contornar problemas de CORS. Essa rota valida se o valor informado está entre 14,00 e 16,56 antes de repassar a requisição para a API externa.