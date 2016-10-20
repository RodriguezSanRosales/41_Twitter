var tareas = [""]

function inic(){
  vistaTareas = document.getElementById("vistaTareas");
  tarea_nueva = document.getElementById("tarea_nueva");
  
}

function generar_vista(){
	vistaTareas.innerHTML = "";
	for (var i = 0; i < tareas.length; i++) {
		vistaTareas.innerHTML +=  + "<p>" + tareas[i]
		+ "<button onclick='borrar(" + i + ")'>Borrar</button></p>";
	}
} 

function introducir_tarea(){
  tareas.push(tarea_nueva.value);
  generar_vista();
}

function borrar(i){
  tareas.splice(i,1) ;
  generar_vista();
}
