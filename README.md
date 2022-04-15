# Tipos de testes

- Unitários: testam um componente/funcionalidade de forma isolada.
- Integração: testa como um ou mais componentes/funcionalidades de comportam juntos(as).
- E2E: simula o que um usuário vai fazer na nossa aplicação diariamente.

# Bando de dados

- Unitários: não acessa o banco de dados.
- Integração: Talvez.
- E2E: Sim (não só banco de dados, qualquer conexão externa inclusive APIS).

# E-commerce

1. Cadastra um usuário no banco.
2. Cadastra endereço no banco.
3. Se comunica com **gateway de pagamento** para enviar a transação.
4. Cadastra a compra no banco.

- Unitário: não tem banco de dados e nem API do Gateway.
- E2E: não é aconselhável ter mocks ou dados fakes.

Gateway de pagamento: Conta de teste (API Key de teste).