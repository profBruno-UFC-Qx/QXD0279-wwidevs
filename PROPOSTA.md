# :checkered_flag: OvenFlow

O OvenFlow é uma aplicação web de autoatendimento para uma pizzaria. O sistema permite que clientes visualizem o cardápio, escolham pizzas e outros produtos, adicionem itens ao carrinho e realizem pedidos. Funcionários poderão acompanhar e atualizar o status dos pedidos, enquanto administradores poderão gerenciar os produtos e categorias disponíveis no cardápio.

## :technologist: Membros da equipe

554701 - JOAO ITALO MAIA ALVES - SI
554679 - JOSE WITALO FERREIRA DA SILVA - CC
558791 - WENDELL LEMOS DA SILVA - CC

## :bulb: Objetivo Geral
Desenvolver uma aplicação web de self checkout para uma pizzaria, permitindo que clientes realizem pedidos de forma simples e autônoma, enquanto funcionários acompanham o andamento dos pedidos e administradores gerenciam os produtos e categorias do cardápio.

## :eyes: Público-Alvo
O sistema é destinado a clientes de pizzarias que desejam realizar seus pedidos de forma autônoma, além de funcionários responsáveis pelo atendimento e acompanhamento dos pedidos e administradores responsáveis pelo gerenciamento do cardápio.

## :star2: Impacto Esperado
Espera-se que a aplicação facilite e agilize o processo de realização de pedidos, proporcionando maior autonomia aos clientes e reduzindo a necessidade de interação durante a escolha dos produtos. Para os funcionários, o sistema deverá facilitar a organização e o acompanhamento dos pedidos, enquanto os administradores terão uma ferramenta centralizada para gerenciar o cardápio da pizzaria.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

A aplicação possuirá três tipos de usuários autenticados e uma área pública para usuários não autenticados:

- Usuário não autenticado: poderá visualizar o cardápio e consultar os produtos disponíveis, além de realizar cadastro e acessar a tela de login.
- Cliente: poderá realizar pedidos, gerenciar seu carrinho e acompanhar seus próprios pedidos.
- Funcionário: poderá visualizar os pedidos realizados e atualizar seus status durante o preparo.
- Administrador: poderá gerenciar produtos e categorias, além de acompanhar os pedidos.

> Tenha em mente que obrigatoriamente a aplicação deve possuir funcionalidades acessíveis a todos os tipos de usuário e outra funcionalidades restritas a certos tipos de usuários.

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

Funcionalidades acessíveis a usuários não autenticados
- Visualização do cardápio.
- Filtragem de produtos por categoria.
- Consulta das informações e preços dos produtos.
- Cadastro na aplicação.
- Acesso à tela de login.

Funcionalidades do cliente
- Login e autenticação.
- Visualização detalhada dos produtos.
- Adição e remoção de produtos do carrinho.
- Alteração da quantidade de itens.
- Finalização de pedidos.
- Visualização dos próprios pedidos.
- Visualização dos detalhes dos pedidos.
- Acompanhamento do status dos pedidos.
- Cancelamento de pedidos enquanto estiverem pendentes.

Funcionalidades do funcionário
- Visualização dos pedidos realizados.
- Visualização dos itens e quantidades de cada pedido.
- Atualização do status dos pedidos.
- Acompanhamento dos pedidos em preparo e prontos.

Funcionalidades do administrador
- Cadastro, edição, consulta e exclusão de categorias.
- Cadastro, edição, consulta e exclusão de produtos.
- Ativação e desativação de produtos.
- Visualização dos pedidos.

## :spiral_calendar: Entidades ou tabelas do sistema

As principais entidades do sistema serão:

- Usuário (User): armazena os dados dos usuários e seu papel no sistema.
- Categoria (Category): representa as categorias utilizadas para organizar os produtos, como pizzas, bebidas e sobremesas.
- Produto (Product): representa os produtos disponíveis no cardápio e pertence a uma categoria.
- Pedido (Order): representa um pedido realizado por um cliente.
- Item do Pedido (OrderItem): representa os produtos, suas quantidades e o preço de cada item no momento em que o pedido foi realizado.

Principais relacionamentos

- Uma Categoria possui vários Produtos.
- Um Produto pertence a uma Categoria.
- Um Usuário pode realizar vários Pedidos.
- Um Pedido possui vários Itens do Pedido.
- Cada Item do Pedido está relacionado a um Produto.
