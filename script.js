// Validação do formulário de adoção
const formAdocao = document.getElementById('form-adocao');

if (formAdocao) { // Verifica se o formulário existe na página atual
    formAdocao.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega o valor do campo CPF
        const cpfInput = document.getElementById('cpf');
        const cpfValue = cpfInput.value;

        // Validação simples: verifica se o CPF contém apenas números
        if (!/^\d+$/.test(cpfValue)) {
            alert('Por favor, digite apenas números no campo CPF.');
            return; // Para a execução se for inválido
        }

        // Se tudo estiver certo, exibe uma mensagem de sucesso
        alert('Cadastro enviado com sucesso! Entraremos em contato em breve.');
        formAdocao.reset(); // Limpa o formulário
    });
}


// Interatividade do FAQ
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' na pergunta
        item.classList.toggle('active');

        // Pega o painel de resposta que é irmão da pergunta
        const answer = item.nextElementSibling;

        // Verifica se o painel de resposta tem uma altura máxima definida
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null; // Recolhe (esconde) a resposta
        } else {
            // Define a altura máxima para o tamanho total do conteúdo
            answer.style.maxHeight = answer.scrollHeight + "px"; // Expande (mostra) a resposta
        }
    });
});