;(function () {
  const formulario = document.getElementById("miFormulario");
  const btn = document.getElementById("submitForm");
  const spinner = document.getElementById("spinner");
  const btnText = document.getElementById("btnText");

  function mostrarMensaje(mensaje, esError = false) {
    const div = document.getElementById("mensaje-usuario");
    div.textContent = mensaje;
    div.style.backgroundColor = esError ? "#D9534F" : "#F69D9D";
    div.style.display = "block";

    setTimeout(() => {
      div.style.display = "none";
    }, 4000);
  }

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campos = {
      nombre: document.getElementById("nombre").value.trim(),
      apellido: document.getElementById("apellido").value.trim(),
      email: document.getElementById("email").value.trim(),
      fechaNac: document.getElementById("fechaNac").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      dni: document.getElementById("dni").value.trim(),
      asistencia: document.getElementById("asistencia").value.trim(),
      comida: document.getElementById("comida").value.trim()
    };

    // Validación de campos
    for (let key in campos) {
      if (campos[key] === "" || campos[key] === "-") {
        mostrarMensaje("Por favor, completá todos los campos.", true);
        return;
      }
    }

    // Mostrar spinner y desactivar botón
    btn.disabled = true;
    spinner.style.display = "inline-block";
    btnText.textContent = "Enviando...";

    fetch("/.netlify/functions/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(campos)
    })
      .then(response => response.text())
      .then(text => {
        console.log("Respuesta:", text);
        formulario.reset();
        mostrarMensaje("¡Formulario enviado con éxito!");
      })
      .catch(error => {
        console.error(error);
        mostrarMensaje("Ocurrió un error al enviar el formulario.", true);
      })
      .finally(() => {
        // Restaurar botón
        btn.disabled = false;
        spinner.style.display = "none";
        btnText.textContent = "Enviar";
      });
  });
})();


/*;(function () {
  const formulario = document.getElementById("miFormulario");

  function mostrarMensaje(mensaje, esError = false) {
    const div = document.getElementById("mensaje-usuario");
    div.textContent = mensaje;
    div.style.backgroundColor = esError ? "#D9534F" : "#F69D9D"; // Rojo para error, rosa si no
    div.style.display = "block";

    setTimeout(() => {
      div.style.display = "none";
    }, 4000);
  }

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campos = {
      nombre: document.getElementById("nombre").value.trim(),
      apellido: document.getElementById("apellido").value.trim(),
      email: document.getElementById("email").value.trim(),
      fechaNac: document.getElementById("fechaNac").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      dni: document.getElementById("dni").value.trim(),
      asistencia: document.getElementById("asistencia").value.trim(),
      comida: document.getElementById("comida").value.trim()
    };

    for (let key in campos) {
      if (campos[key] === "" || campos[key] === "-") {
        mostrarMensaje("Por favor, completá todos los campos.", true);
        return;
      }
    }

    fetch("/.netlify/functions/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(campos)
    })
    .then(response => response.text())
    .then(text => {
      console.log("Respuesta:", text);
      formulario.reset();
      mostrarMensaje("¡Formulario enviado con éxito!");
    })
    .catch(error => {
      console.error(error);
      mostrarMensaje("Ocurrió un error al enviar el formulario.", true);
    });
  });
})();


*/
