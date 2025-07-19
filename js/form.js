;(function () {

  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página
    console.log("Enviando..."); // 💡 Esto debería aparecer en consola

    // Crear el FormData y agregar los valores de los campos
    const formData = new FormData();
    formData.append('nombre', document.getElementById("nombre").value.trim());
    formData.append('apellido', document.getElementById("apellido").value.trim());
    formData.append('email', document.getElementById("email").value.trim());
    formData.append('fechaNac', document.getElementById("fechaNac").value.trim());
    formData.append('telefono', document.getElementById("telefono").value.trim());
    formData.append('dni', document.getElementById("dni").value.trim());
    formData.append('asistencia', document.getElementById("asistencia").value.trim());
    formData.append('comida', document.getElementById("comida").value.trim());

    console.log("campos cargados..."); // 💡 Esto debería aparecer en consola

    // Validación de campos vacíos
    for (let key of formData.keys()) {
      if (formData.get(key) === "" || formData.get(key) === "-") {
        alert("Por favor, completá todos los campos.");
        return;
      }
    }

    console.log("campos revisados..."); // 💡 Esto debería aparecer en consola

    // Envío con FormData (reemplazado por JSON)
    fetch("https://script.google.com/macros/s/AKfycbw7_o2mLZQRnwC81AhKDakBMlzpSfC2t17AFfgOaGny5LFYFK_5J3MbPlZ1Zyd-VPYj6g/exec", {
      method: "POST",
      body: formData  // Usamos FormData en lugar de JSON
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
