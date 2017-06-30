
var tareas = [];
var id = 0;
var inputTitulo = document.querySelector(".a-titulo");
var inputDescripcion = document.querySelector(".a-descripcion");
var botonAgregar = document.querySelector(".agregar");
var botonBuscar = document.querySelector(".buscar");
var botonMostrarTodas = document.querySelector(".mostrar");

function Tarea (titulo, descripcion, id) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.id = id;
    this.contenedor;
}

function Lista (){
    this.divLista = document.querySelector(".lista1");
    this.inicializar = function (tarea, lista) {
    	var lista = this;

		botonAgregar.addEventListener("click", function() {
			lista.agregarTarea();
		})

		botonBuscar.addEventListener("click", function () {
			lista.buscarTarea(lista);
		});	

		botonMostrarTodas.addEventListener("click", function () {
			lista.divLista.innerHTML = "";

			for (tarea in tareas) {
				lista.imprimirTarea(tareas[tarea], lista);
			}

		});
    }
    this.agregarTarea = function () {
        var lista = this;

        id++
        var titulo = inputTitulo.value;
        var descripcion = inputDescripcion.value;

        var tarea = new Tarea (titulo, descripcion, id);

        tareas.push(tarea);

        lista.imprimirTarea(tarea, this);
                
    };
    this.imprimirTarea = function (tarea, lista) {
    	var h6 = document.createElement("H6");
		var li = document.createElement("DIV");
		var h2 = document.createElement("H2");
		var p = document.createElement("P");
		var botonBorrar = document.createElement("BUTTON");
		var botonEditar = document.createElement("BUTTON");
		var botonCompletado = document.createElement("BUTTON");

		h6.innerText = tarea.id;
		li.classList.add("tarea");
		li.classList.add("text-center");
		botonEditar.innerHTML = "<span class='ion-edit'></span>";
		botonBorrar.innerHTML = "<span class='ion-close-round'></span>";
		botonCompletado.innerText = "Done";
		h2.innerText = tarea.titulo;
		p.innerText = tarea.descripcion;

		li.appendChild(h6);
		li.appendChild(h2);
		li.appendChild(p);
		li.appendChild(botonBorrar);
		li.appendChild(botonEditar);
		li.appendChild(botonCompletado);

		tarea.contenedor = li;

		miLista.divLista.appendChild(li);

		botonCompletado.addEventListener("click", function() {
			li.classList.toggle("completado");
		})

		botonBorrar.addEventListener("click", function() {
		    lista.divLista.removeChild(tarea.contenedor);
		})

		botonEditar.addEventListener("click", function() {
			h2.innerText = prompt("Editar titulo");
		    p.innerText = prompt("Editar descripcion");
		})
    };
    this.buscarTarea = function (lista) {
    	var idABuscar = parseInt(prompt("Decime el ID."));

		lista.divLista.innerHTML = "";

		for (tarea in tareas) {
			if (tareas[tarea].id === idABuscar) {
				var tareaAMostrar = tareas[tarea];
				console.log(tareaAMostrar);
			} 
	 	}

		if (tareaAMostrar) {
			lista.imprimirTarea(tareaAMostrar, lista);
		} else {
			alert("No existe!");
		}
    }
}

var miLista = new Lista();
miLista.inicializar();