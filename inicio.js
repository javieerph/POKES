const btnCrearCliente = document.querySelector('#clientes-crear');
const formClientes = document.querySelector('#form-clientes');

btnCrearCliente.addEventListener('click', (e) => {
	e.preventDefault();
	formClientes.classList.remove('oculto');
});
