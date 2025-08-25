// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creación de variables
let amigos=[];

//Creacion de funciones
//Funcion para capturar el nombre ingresado por el usuario
function agregarAmigo(){
    let nombreAmigo=document.getElementById('amigo').value;
    if (nombreAmigo.trim()===''){
        //En caso de haberse dejado en blanco
        alert('Por favor, inserte un nombre.');
    }else{
        //En caso de si haber ingresado un nombre
        amigos.push(nombreAmigo);
    }
    //Para borrar el texto que se escribio
    document.getElementById('amigo').value='';
    actualizarLista();
}
