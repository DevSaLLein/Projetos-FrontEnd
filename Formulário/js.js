const button = document.querySelector('#button');

click = (name, email, num, dados) => {
    name = document.querySelector('#name').value;
    email = document.querySelector('#email').value;
    num = document.querySelector('#num').value;

    dados = document.querySelector('.dados');

    dados.innerHTML = `Seu nome é ${name}, seu email é ${email} e seu telefone de contato é ${num}`;

}
button.addEventListener('click', click);