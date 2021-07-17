const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('name').value;
  let celular = document.getElementById('celular').value;
  let email = document.getElementById('email').value;
  
  let data = {
    nome,
    celular,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let pronto = `<p>CADASTRO REALIZADO COM SUCESSO - VERIFIQUE SEU EMAIL OU ATUALIZE A PÁGINA PARA UM NOVO CADASTRADO </p>`

  setTimeout(() => {
    content.innerHTML = pronto
  }, 500)

})