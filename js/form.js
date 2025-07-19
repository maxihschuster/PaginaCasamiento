
    document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página

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

    // Validación de campos vacíos
    for (let key in campos) {
      if (campos[key] === "" || campos[key] === "-") {
        alert("Por favor, completá todos los campos.");
        return;
      }
    }

    // Envío con FormSubmit (reemplazá por tu correo real)
    fetch("https://formsubmit.co/ajax/maxihschuster@gmail.COM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(campos)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("¡Formulario enviado con éxito!");
        formulario.reset();
      })
      .catch(error => {
        console.error(error);
        alert("Ocurrió un error al enviar el formulario.");
      });
  });
});


