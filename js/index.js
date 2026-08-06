let idTipos = [
	"Cedula de ciudadania",
	"Cedula de extranjeria",
	"Pasaporte"
];

const btnCrearCliente = document.querySelector('#clientes-crear');
const formClientes = document.querySelector('#form-clientes');
const selectIdTipo = document.querySelector('#id-tipo');

//Evento de carga

document.addEventListener('DOMContentLoaded', () => {
	listarIdTipos();
});

//Mostrar formulario
btnCrearCliente.addEventListener('click', (e) => {
	e.preventDefault();
	formClientes.classList.remove('oculto');
});

//Renderizar idTipos

const listarIdTipos = () => {
	idTipos.forEach(tipo => {
		const option = document.createElement('option');
		option.value = tipo;
		option.textContent = tipo;
		selectIdTipo.appendChild(option);
	});
};
