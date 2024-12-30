/*
! COMANDO EN CONSOLA
* json-server --watch data/db.json
* json-server -w -p 5555 data/db.json
*/
import { helpHttp } from "./helpers/helpHttp.js";

const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const puerto = 5555;
const url_api = `http://localhost:${puerto}/jugadores`;
let api = helpHttp();

// *🔻Selec - GET
const getAll = () => {
  api.get(url_api).then((res) => {
    console.log(res);

    if (!res.err) {
      res.forEach((el) => {
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
    } else {
      let message = res.err.statusText || "Ocurrió un error";
      $table.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${res.err.status}: ${message}</b></p>`
      );
    }
  });
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    console.log(e.target.id.value);
    if (!e.target.id.value) {
      // *🔻Create/Insert - POST
      const data = {
        // id: Date.now(),
        jugador: e.target.jugador.value,
        equipo: e.target.equipo.value,
      };
      // console.log(data);

      let options = {
        body: data,
        headers: { "Content-type": "application/json; charset=utf-8" },
      };

      //* 🔻🔻
      api.post(url_api, options).then((res) => location.reload());

      // api.post(url_api, options).then((res) => {
      //   if (!res.err) location.reload();
      //   else {
      //     let message = res.err.statusText || "Ocurrió un error";
      //     $table.insertAdjacentHTML(
      //       "afterend",
      //       `<p><b>Error ${res.err.status}: ${message}</b></p>`
      //     );
      //   }
      // });
    } else {
      // *🔻Update - PUT
      const data = {
        jugador: e.target.jugador.value,
        equipo: e.target.equipo.value,
      };

      let options = {
        body: data,
        headers: { "Content-type": "application/json; charset=utf-8" },
      };

      let endpoint = `${url_api}/${e.target.id.value}`;
      //* 🔻🔻
      api.put(endpoint, options).then((res) => location.reload());
      // api.put(endpoint, options).then((res) => {
      //   if (!res.err) location.reload();
      //   else {
      //     let message = res.err.statusText || "Ocurrió un error";
      //     $table.insertAdjacentHTML(
      //       "afterend",
      //       `<p><b>Error ${res.err.status}: ${message}</b></p>`
      //     );
      //   }
      // });
    }
  }
});

d.addEventListener("click", (e) => {
  // *🔻Edit - EDITAR
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.jugador.value = e.target.dataset.player;
    $form.equipo.value = e.target.dataset.team;
    $form.id.value = e.target.dataset.id;
    $form.jugador.focus();
  }

  // *🔻Delete - DELETE
  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      let options = {
        headers: { "Content-type": "application/json; charset=utf-8" },
      };
      let endpoint = `${url_api}/${e.target.dataset.id}`;

      //* 🔻🔻
      // api.del(endpoint, options).then((res) => location.reload());
      api.del(endpoint, options).then((res) => {
        if (!res.err) location.reload();
        else {
          let message = res.err.statusText || "Ocurrió un error";
          alert(`Error ${res.err.status}: ${message}`);
        }
      });
    }
  }
});

// *🔻Poner titulos
const $titlePaginaAll = d.querySelectorAll(".title-comp");
$titlePaginaAll.forEach((title) => {
  title.innerText = 'CRUD API REST "HTTP_HELP"';
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
