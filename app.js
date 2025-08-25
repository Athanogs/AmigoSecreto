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

//Funcion que recorre el array amigos, y agrega cada nombre como un elemento <li>
function actualizarLista(){
    lista=document.getElementById('listaAmigos');
    //Contenido inicia vacio
    contenidoLista='';
    //Limpiado de lista existente
    lista.innerHTML=contenidoLista;
    //Iteracion en cada nombre en la lista
    for (let i=0; i<amigos.length;i++){
        contenidoLista+= `<li>${amigos[i]}</li>`;
    }
    //Construccion final de la lista
    lista.innerHTML=contenidoLista;
}
