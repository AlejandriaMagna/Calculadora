const display = document.querySelector("#display"); // Lo primero es crear dos contanstes , en primer lugar esta, que selecciona todos los componentes del ID display
const buttons = document.querySelectorAll(".button"); // En segundo lugar esta, que selecciona todos los componentes de la clase button

let currentOperation = ""; // Se crea una variable vacía que se va a utilizar para guardar la operación actual

//Ahora se agrega un evento a cada botón

buttons.forEach(button => { // Se crea un bucle forEach para recorrer todos los botones
    button.addEventListener("click", () => { 
        const buttonId = button.id; // Se añade un evento de escucha al click en cada uno de los botones
       
        if (button.id === "=") { // Si el id del botón es igual a "="
            try {
                currentOperation = eval(currentOperation); // Se evalúa el valor de la operación actual, la calculadora va a reconocer que es una operación
                display.value = currentOperation; // Se muestra el resultado en el display
            } catch (error) {
                display.value = "Error"; // Si hay un error en la operación, se muestra "Error" en el display
                currentOperation = ""; // Se limpia la operación actual
            }
        } else if (button.id === "AC") { // Si el id del botón es igual a "AC"
            display.value = ""; // Se limpia TODO el display
            currentOperation = ""; // También se limpia la operación actual
        } else if (button.id === "DE") { // Si el id del botón es igual a "DE"
            currentOperation = currentOperation.slice(0, -1); // Se elimina el último carácter de la operación actual
            display.value = currentOperation; // Se actualiza el display con la operación modificada
        } else {
            // Agrega el valor del botón al display
            currentOperation += button.textContent; // Se concatena el texto del botón a la operación actual
            display.value = currentOperation; // Se actualiza el display con la operación actualizada
        }
    });
}); // Se cierra el bucle forEach