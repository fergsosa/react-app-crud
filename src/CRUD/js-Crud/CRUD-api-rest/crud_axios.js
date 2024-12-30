/*
! COMANDO EN CONSOLA
* json-server --watch data/db.json
* json-server -w -p 5555 data/db.json
*/
const puerto = 5555;
const url_api = `http://localhost:${puerto}/jugadores`;

const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

// *🔻Selec - GET
const getAll = async () => {
  try {
    let res = await axios.get(url_api);
    let json = await res.data;
    // console.log(json);
    json.forEach((el) => {
      $template.querySelector(".player").textContent = el.jugador;
      $template.querySelector(".team").textContent = el.equipo;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.player = el.jugador;
      $template.querySelector(".edit").dataset.team = el.equipo;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // *🔻Create/Insert - POST
      try {
        let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          data: JSON.stringify({
            jugador: e.target.jugador.value,
            equipo: e.target.equipo.value,
          }),
        };
        await axios(url_api, options);

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      // *🔻Update - PUT
      try {
        let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          data: JSON.stringify({
            jugador: e.target.jugador.value,
            equipo: e.target.equipo.value,
          }),
        };
        await axios(`${url_api}/${e.target.id.value}`, options);

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  // *🔻Edit - EDITAR
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.jugador.value = e.target.dataset.player;
    $form.equipo.value = e.target.dataset.team;
    $form.id.value = e.target.dataset.id;
  }

  // *🔻Delete - DELETE
  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        };
        await axios(`${url_api}/${e.target.dataset.id}`, options);

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});

// *🔻Poner titulos
const $titlePaginaAll = d.querySelectorAll(".title-comp");
$titlePaginaAll.forEach((title) => {
  title.innerText = 'CRUD API REST "AXIOS"';
});

// *🔻Componente copiar texto
const copyLinkTxt = (txt) => navigator.clipboard.writeText(txt);
d.addEventListener("click", (e) => {
  if (e.target.matches(".copyBtn")) {
    copyLinkTxt(e.target.parentNode.innerText);
    // console.log({
    //   e: e,
    //   e_target: e.target,
    //   innerText: e.target.parentNode.innerText,
    // });
  }
});
