var tareas = [""]


function inic(){
  vistaTareas = document.getElementById("vistaTareas");
  tarea_nueva = document.getElementById("tarea_nueva");
  
}

function generar_vista(){
	vistaTareas.innerHTML = "";
	for (var i = 1; i < tareas.length; i++) {
		vistaTareas.innerHTML += "<input type='checkbox' onclick='tachar()'" 
		+ "<p>" + tareas[i] + "<button class='glyphicon glyphicon-trash btnBorra' onclick='borrar(" + i + ")'></button></p>";
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



//Revisar esta funcion !! porfavor sandra del futuro. 
//tienes que poder tachar las tareas 
/*function tachar(){
	if (this.checked) {
		this.nextSibiling.style.textDecoration="line-through";
	}else{
		this.nextSibiling.style.textDecoration="none";
	}
}*/