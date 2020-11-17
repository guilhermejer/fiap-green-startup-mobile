# Como subir o aplicativo
Para subir o aplicativo, navegar até o diretório GreenMobile e rodar o comando:

npx react-native run-android

Em alguns casos o android studio não sobe o emulador sozinho, se esse for o caso, por gentileza abrir o emulador e rodar o comando novamente


# Endereço da API
Em nosso emulador, o endereço da "localhost:3000" da máquina é representado como "http://10.0.2.2:3000/", caso necessário é possivel alterar em "GreenMobile/src/components/api.js"







App desenvolvido utilizando REACT-NATIVE  (sem o uso do expo)

Funcionamento do app por telas:


###################################### LOGIN ######################################

Tela inicial do app onde o usuário realizara login ou irá para a tela de cadastro.
Ao preencher os dados é realizado uma requisição assíncrona para a API que é gerenciada no arquivo Api.js (no caso desse MVP utilizamos a plataforma POSTMAN para 'MOCKAR' a resposta da API).
Dependendo da resposta o usuário terá seu login aceito ou recusado (Nesse contexto a resposta é sempre OK independente dos dados digitados).


###################################### CADASTRO ######################################

Tela onde o usuário poderá se cadastrar na ferramenta.
Utilizamos a biblioteca Unform para gerenciar o formulário de forma mais dinâmica e a biblioteca Yup para facilitar a validação dos dados antes do envio.
Após a validação é simulado o envio para a API.

Mais INFO:

Unform:
https://unform.dev/

Yup:
https://formik.org/docs/tutorial#schema-validation-with-yup



###################################### HOME ######################################

Nesta tela será exibido ao usuário todos os itens a venda (Foi utilizado um arquivo local para simular a requisição desses itens para a API) e também uma barra de pesquisa para filtrar os resultados.
Ao selecionar um item é repassado os props para a tela Produto.


###################################### PRODUTO ######################################

Aqui o usuário podera ver os detalhes do item selecionado e decidir se vai finalizar sua compra ou voltar para a HOME.