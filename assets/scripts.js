const display = document.querySelector("#display"); // Lo primero es crear dos contanstes , en primer lugar esta, que selecciona todos los componentes del ID display
const buttons = document.querySelectorAll(".button"); // En segundo lugar esta, que selecciona todos los componentes de la clase button

let currentOperation = ""; // Se crea una variable vacía que se va a utilizar para guardar la operación actual

//Ahora se agrega un evento a cada botón

buttons.forEach (button => { // Se crea un bucle forEach para recorrer todos los botones
    button.addEventListener("click",  () => { 
        const buttonId = button.id; // Se añade un evento de escucha al click en cada uno de los botones
       
        if(button.id === "="){ // Si el id del botón es igual a "="
            display.value = eval(display.value); // Se evalua el valor del display, la calculadora va a reconocer que es una operación
        }else if(button.id === "AC"){ // Si el id del botón es igual a "AC
            display.value = ""; // Se limpia TODO el display
        }
        else if(button.id === "DE"){ // Si el id del botón es igual a "DE"
            display.value = display.value.slice(0, -1); // Se elimina el último caracter del display, posicionado en el 0.
            try {
                currentOperation = eval(currentOperation); // Usa eval con precaución
                display.value = currentOperation;
            } catch (error) {
                display.value = "Error";
                currentOperation = "";
            }
        } else {
            // Agrega el valor del botón al display
            currentOperation += buttonId;
            display.value = currentOperation;
        }
    });}) // Se cierra el bucle forEach
