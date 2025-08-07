;(function () {
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





/*;(function () {
  const formulario = document.getElementById("miFormulario");

  function mostrarMensaje(mensaje) {
  const div = document.getElementById("mensaje-usuario");
  div.textContent = mensaje;
  div.style.display = "block";

  setTimeout(() => {
    div.style.display = "none";
  }, 4000); // se oculta después de 4 segundos
}


  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página
    console.log("Enviando...");

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

    console.log("campos cargados...");

    // Validación de campos vacíos
    for (let key in campos) {
      if (campos[key] === "" || campos[key] === "-") {
        alert("Por favor, completá todos los campos.");

        return;
      }
    }

    console.log("campos revisados...");

    // Envío a Netlify Function (proxy a Google Apps Script)
    fetch("/.netlify/functions/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(campos)
    })
        .then(response => response.text()) // 👈 primero .text()
      .then(text => {
        console.log("Respuesta:", text);
        alert("¡Formulario enviado con éxito!");
        formulario.reset();
        })
        
      .catch(error => {
        console.error(error);
        alert("Ocurrió un error al enviar el formulario.");
      });
  });
})();*/ 
