window.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector("#form-ux");
  const $text = document.querySelector("#text");

  $form[0].form[0].focus();

  $form.addEventListener("keypress", (e) => {
    if (e.code == "Enter") {
      if ($form.nombres.value !== "") {
        $form.documento.focus();
      }
      if ($form.documento.value !== "") {
        $form.correo.focus();
      }
      if ($form.correo.value !== "") {
        $form.mensaje.focus();
      }
      if ($form.mensaje.value !== "") {
        $form.submit.focus();
      }
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (
          $form.nombres.value !== "" &&
          $form.documento.value !== "" &&
          $form.correo.value !== "" &&
          $form.mensaje.value !== ""
        ) {
          $text.innerText = "Completo";
          $text.style.color = "green";
          setTimeout(() => {
            $text.innerText = "";
            $form.reset();
            $form.nombres.focus();
          }, 3000);
        }
      });
    }
  });
});
