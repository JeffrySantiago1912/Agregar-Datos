const personas = [
    
];



function mostrarPersonas(){

    console.log("Ejecutando metodo mostrar persona...");
    let texto = "";
    for(let persona of personas){

        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`; //La variable texto contiene los objectos de tipo persona//
    }

    document.getElementById("personasUL").innerHTML = texto;
}



function agregarPersona(){

    const forma = document.forms["forma"]; //Recuperando el formulario//
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];

    //Para que no agregue datos sin nombre o apellido//
    if(nombre.value != "" && apellido.value != ""){

        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona); //Lo agregamos al arreglo de personas//
    
        //Necesitamos volver a mostrar todo el arreglo que esta dentro de la funcion "mostrarPersonas()//
        mostrarPersonas();

        //Limpiar inpunt
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";

    } else { 
        console.log("No hay informacion que agregar");
        alert("Nombre y Apellido en blanco, favor de llenar campos.")
    } 

}