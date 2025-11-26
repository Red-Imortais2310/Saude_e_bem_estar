document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Previne o comportamento padrão de envio do formulário (recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const messageArea = document.getElementById('messageArea');

    // Validação simples (os campos "required" do HTML já fazem parte da validação)
    if (name && email && comments) {
        // Simulação de envio (em um ambiente real, você usaria fetch() para enviar para um servidor)
        console.log('Dados do formulário:', { name, email, comments });

        // Exibe mensagem de sucesso
        messageArea.textContent = 'Mensagem enviada com sucesso! (Dados no console)';
        messageArea.style.color = 'green';

        // Limpa o formulário após o envio
        this.reset();
    } else {
        // Exibe mensagem de erro se algo falhar na validação JS (embora o HTML required já ajude)
        messageArea.textContent = 'Por favor, preencha todos os campos.';
        messageArea.style.color = 'red';
    }
});
