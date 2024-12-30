/*
  !Proceso
* 01🔻json-server --watch /carpeta 👉 consola
* 02🔻json 👉 convertir String a json JSON.parse()
* 03🔻código 👉 a ejecutar
* 04🔻catch 👉 capura los errores
* 05🔻finally 👉 ejecucion independiente a pesar de la promesa
! COMANDO EN CONSOLA
* json-server --watch data/db.json
* json-server -w -p 5555 data/db.json
*/
const puerto = 5555;
// const urlSantos = `http://localhost:${puerto}/santos`;
const url_api = `http://localhost:${puerto}/jugadores`;

const d = document,
  $form = d.querySelector(".crud-form"),
  $table = d.querySelector(".crud-table"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

//* 🔻Fn para get/post/edit/delete
const ajax = (options) => {
  // console.log(options);

  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(data));
};

// *🔻Optener todo - GET ALL
const getAll = () => {
  ajax({
    // method: "GET",
    url: url_api,
    // *🔻logica de peticion exitosa
    success: (res) => {
      res.forEach((el) => {
        const { jugador, equipo, id } = el;
        $template.querySelector(".player").textContent = jugador;
        $template.querySelector(".team").textContent = equipo;
        $template.querySelector(".edit").dataset.id = id;
        $template.querySelector(".edit").dataset.player = jugador;
        $template.querySelector(".edit").dataset.team = equipo;
        $template.querySelector(".delete").dataset.id = id;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
    // data: null,
  });
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      // *🔻Create/Insert - POST
      ajax({
        method: "POST",
        url: url_api,
        // *🔻logica de peticion exitosa
        success: (res) => location.reload(),
        error: () =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          jugador: e.target.jugador.value,
          equipo: e.target.equipo.value,
        },
      });
    } else {
      // *🔻Update - PUT
      ajax({
        method: "PUT",
        url: `${url_api}/${e.target.id.value}`,
        // *🔻logica de peticion exitosa
        success: (res) => location.reload(),
        error: () =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          jugador: e.target.jugador.value,
          equipo: e.target.equipo.value,
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  // *🔻Edit - EDITAR
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Jugador";
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
      ajax({
        method: "DELETE",
        url: `${url_api}/${e.target.dataset.id}`,
        // *🔻logica de peticion exitosa
        success: (res) => location.reload(),
        error: () => alert(err),
      });
    }
  }
});

// *🔻Poner titulos
const $titlePaginaAll = d.querySelectorAll(".title-comp");
$titlePaginaAll.forEach((title) => {
  title.innerHTML = 'CRUD API REST "AJAX"';
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
