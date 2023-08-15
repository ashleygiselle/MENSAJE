const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cifrarMensaje() {
    const mensajeInput = document.getElementById('mensaje');
    const claveInput = document.getElementById('claveInput');
    const mensajeCifrado = document.getElementById('mensajeCifrado');

    const mensajeOriginal = mensajeInput.value.toLowerCase(); 
    const clave = parseInt(claveInput.value);

    let mensajeCifradoText = '';

    for (let i = 0; i < mensajeOriginal.length; i++) {
        const letra = mensajeOriginal[i];
        const index = alphabet.indexOf(letra);
        if (index === -1) {
            mensajeCifradoText += letra;
        } else {
            const newIndex = (index + clave) % alphabet.length;
            mensajeCifradoText += alphabet[newIndex];
        }
    }

    mensajeCifrado.value = mensajeCifradoText;
}

function descifrarMensaje() {
    const mensajeCifradoInput = document.getElementById('mensaje2');
    const claveInput = document.getElementById('claveInput');
    const mensajeCifrado2 = document.getElementById('mensajeCifrado2');

    const mensajeCifrado = mensajeCifradoInput.value.toLowerCase(); 
    const clave = parseInt(claveInput.value);

    let mensajeDescifradoText = '';

    for (let i = 0; i < mensajeCifrado.length; i++) {
        const letra = mensajeCifrado[i];
        const index = alphabet.indexOf(letra);
        if (index === -1) {
            mensajeDescifradoText += letra;
        } else {
            let newIndex = (index - clave) % alphabet.length;
            while (newIndex < 0) {
                newIndex += alphabet.length;
            }
            mensajeDescifradoText += alphabet[newIndex];
        }
    }

    mensajeCifrado2.value = mensajeDescifradoText;
}

function reiniciarFormulario() {
    document.getElementById('mensaje').value = '';
    document.getElementById('mensajeCifrado').value = '';
    document.getElementById('mensaje2').value = '';
    document.getElementById('mensajeCifrado2').value = '';
    document.getElementById('claveInput').value = '';
}

function mostrarIntroducciones() {
    const mensaje = "                  Instrucciones para Cifrar y Descifrar Mensajes\n\nCifrar un Mensaje:\n\nMensaje Original: En la sección 'MENSAJE ORIGINAL', escribe el mensaje que deseas cifrar en el campo de texto provisto. Puede ser cualquier combinación de letras y caracteres.\n\nClave de Cifrado: Introduce un número en el campo 'CLAVE' para determinar el desplazamiento del cifrado. Este número indicará cuántas posiciones se moverá cada letra en el alfabeto para cifrar el mensaje.\n\nCifrado: Haz clic en el botón 'CIFRAR'. El mensaje original que ingresaste será cifrado utilizando el desplazamiento especificado por la clave. El mensaje cifrado resultante se mostrará en el campo 'MENSAJE CIFRADO'.\n\nDescifrar un Mensaje:\n\nMensaje Cifrado: En la sección 'MENSAJE CIFRADO', ingresa el mensaje cifrado que deseas descifrar en el campo de texto correspondiente. Asegúrate de ingresar el mensaje cifrado tal como se generó.\n\nClave de Descifrado: Ingresa la misma clave numérica que utilizaste para cifrar en el campo 'CLAVE'.Es esencial que utilices la misma clave que se utilizó para el cifrado original.\n\n Descifrado: Haz clic en el botón 'DESCIFRAR'. El mensaje cifrado que ingresaste se descifrará utilizando la clave proporcionada. El mensaje original se mostrará en el campo 'MENSAJE ORIGINAL'.\n";
    alert (mensaje);
}
