const h1 = document.querySelector("h1");
const form = document.querySelector("#form"); 
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const Res = document.querySelector("#Res");



//para este metodo solo debemos agregar en el boton que es de type="button" y este automaticamente quitara su propiedad de type="submit" para funcionar como boton y no como envio de datos

btn.addEventListener("click",btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    Res.innerText = "Resultado: " + sumaInputs;
} 

//Forma 2

//De esta manera estamos escuchando el evento del formulario el cual espera un boton final de envio y hace que se recarge la pagina y no que se muestre colocamos el event.preventDefault(); el cual desactiva el envio por default del ultimo boton del formulario mostrandonos el resultado que esperamos

//form.addEventListener("submit", sumarInputValues);

//function sumarInputValues(event) {
//    console.log({event});
//    event.preventDefault();
//    const sumaInputs = input1.value + input2.value;
//    Res.innerText = "La concatenacion es : " + sumaInputs;
//} 


//Forma1

//Esta es la forma de escuchar un boton fuera de un formulario necesita una funcion para ejecutar lo que sea que necesitemos que haga mostrar mas informacion desplegar menus etc etc.


//este necesita su referencia de html (onclick="btnOnClick") el metodo addEventListener la descripcion del evento que esperamos y la funcion con la tarea que va ha realizar.
//btn.addEventListener("click",btnOnClick);

//esta es la funcion aqui lleva todo lo que el voton valla a ejecutar siempre y cuando este se encuentre fuera de un formulario
//function btnOnClick() {
//    const sumaInputs = input1.value + input2.value;
//    Res.innerText = "Resultado: " + sumaInputs;
//} 