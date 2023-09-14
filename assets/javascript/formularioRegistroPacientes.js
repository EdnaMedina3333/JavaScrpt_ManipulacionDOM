/*
DOM (Document Object Model)

Cuando creamos páginas que usan HTML + CSS estamos creando páginas estáticas (no tienen interactividad), cuando agregamos JS (JavaScript) nuestras páginas se convierten en dinámicas (tienen interactividad).

El navegador lee el documento HTML de arriba a abajo y de izquierda a derecha (renderización) 

Para que una página se renderice correctamente se toma en cuenta el contenido, peso de las imagenes, la conexión a internet, etc.

Cuando el documento se renderiza se crea un "árbol", tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran hojas (nodos).

Cuando hablamos del DOM y entendemos que se representa como un árbol con ramas y hojas, entendemos que cada una de éstas es un nodo.

Un nodo es la representación más básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

Tipos de nodos:
 - Document: Nodo raíz a partir del cual se derivan los demás nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de él. Todos los nodos derivan de éste.
 - Element: Son nodos definidos por etiquetas HTML (div,h1,img,head,script,etc), ya sea que se vean o no se vean (etiquetas que interpreta el navegador).
 - Text: Es el texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo.
 - Atribbutes: Los atributos de las etiquetas también se convierten en nodos, son nodos que están asociados a un elemento y se pueden considerar también nodos hijos.
 - Comment: Los comentarios también son un nodo porque forma parte del documento.

¿Para qué utilizamos JS en un DOM?
 - Agregar elementos HTML
 - Modificar elementos HTML
 - Borrar elementos HTML

*/


//Comenzamos a trabajar con los nodos de mi documento HTML

//Paso 1. Guardar los elementos HTML en variables de JS (let, var, const)

/*Métodos selectores o de selección de elementos, permiten traer una etiqueta de HTML y guardara para su uso posterior

Métodos tradicionales:
  - getElementById
  - getElementsByTagName
  - getElementsByClassName

*/

//Aquí obtengo un elemento por ID
const nombrePaciente = document.getElementById ("nombrePaciente");
console.log (nombrePaciente);

//Aquí obtengo varios elementos por clase
const columnas = document.getElementsByClassName ("col");
console.log (columnas);

//Aquí obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName ("input");
console.log (inputs);


/* Métodos actuales
  - document.querySelector
  - document.querySelectorAll

La única diferencia entre el query selector y el get element es que tenemos que especificar el tipo de selector que usaremos(. para clases y # para id).
*/

//Aquí obtengo un elemento por el selector #
let containerPadre = document.querySelector ("#containerPadre");
console.log (containerPadre);

//Aquí obtengo un elemento por el selector .
let container = document.querySelectorAll (".container");
console.log (container);


/* Métodos para modificar elementos
  - innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto (ya existe un texto).
    
  - textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo).


*/

//Modificando el texto de un h1 con innerHTML
let titulo = document.getElementById ("titulo");

titulo.innerHTML = "Nuevo texto de mi titulo";

//Creando un nuevo texto con innerHTML
titulo.innerHTML = "<p>Bienvenido(a)</p>"




let mensajeConfirmacion = document.getElementById ("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmacion</p>";


/*
Crear elementos:
  - Crear el elemento
    - createElement
    - createTextNode
    - createComment

  - Poner el elemento
    - append
    - appendChild
*/


//Creando un elemento con createElement
let imagen = document.createElement ("img");

//Creando los atributos del elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "foto de perrito feliz";

//Poner mi imagen en el container mensajeConfirmacion
mensajeConfirmacion.appendChild (imagen);
