//! ::::::::::::::::::::::: AJAX

// TODO::: CONSUMIR APIS
// * XML.HttpsRequest  (con el nacion ajax)
// * Fetch (api moderna mas amigable)
// * Axios

/*
  ! métodos de solicitud HTTP
* 🔻GET 👉 SOLICITAR datos de un recurso específico.(URL)
* 🔻POST 👉 AGREGAR/ENVÍA datos al servidor para procesar.(CABEZERA)
* 🔻PUT 👉 ACTUALIZAR/GUARDAR un recurso existente en servidor.
* 🔻DELETE 👉 ELIMINAR un recurso específico del servidor.
* 🔻HEAD 👉 OBTNER solo encabezados de respuesta HTTP.
* 🔻OPTIONS 👉 DESCRIBE opciones de comunicación para un recurso.
* 🔻PATCH 👉 APLICA modificaciones PARCIALES a un recurso.
  ! estados
* 🔻100-199 💬 Respuesta INFORMATIVA.
* 🔻200-299 ✅ Respuesta SATISFACTORIA.
* 🔻300-399 ⤴️ REDIRECCIONES.
* 🔻400-499 ⛔ ERROR del cliente.
* 🔻500-599 ⛔ ERROR del servidor.
  !Proceso
* 01🔻get 👉 petición (recursos(URL/archivo))
* 02🔻json 👉 convertir String a json JSON.parse()
* 03🔻código 👉 a ejecutar
* 04🔻catch 👉 captura los errores
* 05🔻finally 👉 ejecucion independiente a pesar de la promesa

*/

const URL_API = "https://jsonplaceholder.typicode.com/users";

//TODO ::::: Objeto XML (HttpsResquest)
(() => {
  const $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //* 01🔻instanciar 👉 crear un variable de este tipo(objeto de AJAX)
  const xhr = new XMLHttpRequest();

  //* 02🔻código 👉 a ejecutar
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return; // estado completado
    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("éxito");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      // * 2A🔻json 👉 convertir String a json JSON.parse()
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `<i>${el.name}</i> * <b>${el.email}</b> * ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
      // * 2B🔻error 👉 captura los errores
    } else {
      console.error(`Error n°${xhr.status}`);
      let messsage = xhr.statusText || "ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${messsage}`;
    }
    // console.log("Este mensaje cargara de cualquier forma");
  });

  //* 03🔻open 👉 abrir la peticion por metodo (GET)
  xhr.open("GET", URL_API);
  // xhr.open("GET", "datos.json");
  //? xhr.open("METODO", "Recurso(ULR)");
  // xhr.open("GET", "datos.json");
  console.log();
  //* 04🔻sent 👉 Envia la peticionn
  xhr.send();
})();

//TODO ::::: API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //* 01🔻fetch 👉 petición (recursos(URL/archivo)) usa GET por defecto
  fetch(URL_API)
    // fetch("datos.json")
    //* 02🔻then 👉 convertir string a json / sino ejecuta error (catch)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    // $fetch.innerHTML = json;
    //* 04🔻then 👉 codigo a ejecutar
    .then((json) => {
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `<b>${el.name}</b> * <i>${el.email}</i> * ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    //* 04🔻catch 👉 captura los errores
    .catch((err) => {
      console.log("Estamos en el catch error n°", err.status, [err]);
      let messsage = err.statusText || "ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${messsage}`;
    });
  //* 05🔻finally 👉 ejecucion independiente a pesar de la promesa
  // .finally(() =>
  // console.log(
  //   "Esto se ejecutara independientemente del resultado de la Promesa Fetch"
  // )
  // );
})();

//TODO ::::: API Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  //* 🔻async/await
  async function getData() {
    try {
      //* 01🔻fetch 👉 petición (recursos(URL/archivo)) usa GET por defecto
      // let res = await fetch("datos.json");
      let res = await fetch(URL_API);
      //* 02🔻json 👉 metodo que convierte string a json
      let json = await res.json();
      // console.log(res, json);

      //* 03🔻confirmar 👉 sino throw enviar error al catch
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      // if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");

      //* 04🔻código 👉 Logica a ejecutar
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} * <b>${el.email}</b> * <i>${el.phone}</i>`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);

      //* 05🔻catch 👉 captura los errores
    } catch (err) {
      let message = err.statusText || "ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

      //* 06🔻finally 👉 ejecucion independiente a pesar de la promesa
    } finally {
      // console.log("Esto de ejecutará independientemente del try.. catch");
    }
  }
  getData();
})();

//TODO ::::: Axios libreria
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    //* 01🔻get 👉 petición (recursos(URL/archivo))
    .get(URL_API)
    //* 02🔻código 👉 logica a ejecutar
    .then((res) => {
      // console.log(res);
      //* 03🔻json 👉 convertir string a json
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `<b>${el.name}</b> * ${el.email} * <i>${el.phone}</i>`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    //* 04🔻catch 👉 captura los errores
    .catch((err) => {
      console.log({ err, response: err.response, status: err.response.status });
      let messsage = err.response.statusText || "ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${messsage}`;
    })
    //* 05🔻finally 👉 ejecucion independiente a pesar de la promesa
    .finally(() => {
      // console.log("Esto se ejecutará independientemente del resultado Axios");
    });
})();

//TODO ::::: Axios + Async-Await
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  //* 🔻async/await
  async function getData() {
    try {
      //* 01🔻get 👉 petición (recursos(URL/archivo))
      let res = await axios.get(URL_API);
      //* 02🔻data 👉  acceso donde esta el json
      let json = await res.data; // console.log(res, json);
      //* 03🔻código 👉 Logica ejecutar
      // res.data.forEach((el) => {
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `<i>${el.name}</i> * ${el.email} * <b>${el.phone}</b>`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
      //* 04🔻catch 👉 captura los errores
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;

      //* 05🔻finally 👉 ejecucion independiente a pesar de la promesa
    } finally {
      // console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();
