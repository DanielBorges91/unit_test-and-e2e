# Tipos de testes

- Unitários: testam um componente/funcionalidade de forma isolada.
- Integração: testa como um ou mais componentes/funcionalidades de comportam juntos(as).
- E2E: simula o que um usuário vai fazer na nossa aplicação diariamente.

# Bando de dados

- Unitários: não acessa o banco de dados.
- Integração: Talvez.
- E2E: Sim (não só banco de dados, qualquer conexão externa inclusive APIS).

# Observações

- Unitário: não tem banco de dados e nem API do Gateway.
- E2E: não é aconselhável ter mocks ou dados fakes.

- Gateway de pagamento: Conta de teste (API Key de teste).

# Objetivo deste repositório

- Estudar teste unitário e E2E em uma aplicação básica que tem por objetivo cadastrar uma aula.
Foi usado Prisma como ORM.