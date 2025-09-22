const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('ativo'); // mostra/esconde menu
    menuMobile.classList.toggle('aberto');  // anima o X
});

const form = document.getElementById('contato-formulario');
const nome = form.querySelector('.contato-nome');
const email = form.querySelector('.contato-email');
const mensagem = form.querySelector('.contato-mensagem');
const formMensagem = form.querySelector('.form-mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // previne envio automático

    // Limpa mensagens anteriores
    formMensagem.textContent = '';
    nome.style.borderColor = 'var(--vidro)';
    email.style.borderColor = 'var(--vidro)';
    mensagem.style.borderColor = 'var(--vidro)';

    let erro = false;

    if (nome.value.trim() === '') {
        erro = true;
        nome.style.borderColor = 'red';
    }
    if (email.value.trim() === '') {
        erro = true;
        email.style.borderColor = 'red';
    }
    if (mensagem.value.trim() === '') {
        erro = true;
        mensagem.style.borderColor = 'red';
    }

    if (erro) {
        formMensagem.textContent = 'Por favor, preencha todos os campos!';
        formMensagem.style.color = 'red';
    } else {
        formMensagem.textContent = 'Mensagem enviada com sucesso!';
        formMensagem.style.color = 'var(--primaria)';
        form.reset(); // limpa formulário
    }
});
