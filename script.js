/*

    Enviar os dados para o banco de dados
        SUCESSO: Retornar os dados do usuário criado
        ERRO: Retornar mensagem de erro

    Tabela para trazer os dados de todos os usuários atualizados:
        Botão para atualizar e buscar os dados atualizados
        Botão para excluir usuário dentro da tabela

*/

const sendForm = async (params) => {
    return 1;
}

document.getElementById('sendButton').addEventListener('click', () => {
    sendForm(/* Adicionar os parametros para chamada da função */)
})



const getUsers = async () => {
    try {
        // Fazendo a requisição GET para o endpoint da API
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'GET',  // Especifica que o método será GET
        })

        // Verificando se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados dos usuários')
        }

        // Obtendo os dados da resposta em formato JSON
        const users = await response.json()

        // Exibindo os dados no console (você pode manipular os dados como quiser)
        console.log(users)

    } catch (error) {
        // Caso ocorra um erro
        console.error('Erro ao buscar usuários:', error);
    }
}

getUsers()
