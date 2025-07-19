;(function () {

  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página
      console.log("Enviando..."); // 💡 Esto debería aparecer en consola


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
      console.log("campos cargados..."); // 💡 Esto debería aparecer en consola

    // Validación de campos vacíos



const formData = new FormData();
for (let key in campos) {
  formData.append(key, campos[key]);
}

          console.log("campos revisados..."); // 💡 Esto debería aparecer en consola


    // Envío con FormSubmit (reemplazá por tu correo real)
    fetch("https://script.google.com/macros/s/AKfycbzzWYMIND9J-LA2ohQeOQkL7MkqRIKTHh98a4ktx1lde01KlC6wCo50dQtRQFTWkyrGSw/exec", {
      method: "POST",
      //headers: {        "Content-Type": "application/json"      },
      //body: JSON.stringify(campos)
      body: FormData
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



}());