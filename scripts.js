
var inputTitulo = document.querySelector(".a-titulo");
var inputDescripcion = document.querySelector(".a-descripcion");
var botonAgregar = document.querySelector(".agregar");


function Tarea (titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.contenedor;
}

function Lista (){
    this.ul = document.querySelector("ul");
    this.agregarTarea = function () {
        var lista = this;

        var titulo = inputTitulo.value;
        var descripcion = inputDescripcion.value;

        var tarea = new Tarea (titulo, descripcion);

        var li = document.createElement("LI");
        var h2 = document.createElement("H2");
        var p = document.createElement("P");
        var botonBorrar = document.createElement("BUTTON");

        botonBorrar.innerText = "Borrar tarea";
        h2.innerText = tarea.titulo;
        p.innerText = tarea.descripcion;

        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(botonBorrar);

        tarea.contenedor = li;

        this.ul.appendChild(li);


        botonBorrar.addEventListener("click", function() {
            lista.ul.removeChild(tarea.contenedor);
        })
    }
}

var miLista = new Lista();


botonAgregar.addEventListener("click", function() {
			miLista.agregarTarea();
		})
