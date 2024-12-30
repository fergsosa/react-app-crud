const url_api_photos = "https://jsonplaceholder.typicode.com/photos";

//TODO ::::: Objeto XML (HttpsResquest)
(() => {
  const $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        if (el.id < 6) {
          // console.log(el);
          $li.innerHTML = `
          <div class="api-photos">
            <img src="${el.thumbnailUrl}" alt=""> 
            <div class="text">
              <p><b>titulo:</b> ${el.title}</p>
              <p><b>id:</b> ${el.id}</p>
              <p><b>Album-id:</b> ${el.albumId}</p>
            </div>
          </div>
          <hr/>
          `;
          $fragment.appendChild($li);
        }
      });
      $xhr.appendChild($fragment);
    } else {
      console.error(`Error n°${xhr.status}`);
      let message = xht.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", url_api_photos);
  // xhr.open("GET", "datosImg.json");
  xhr.send();
})();

//TODO ::::: API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch(url_api_photos)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        if (el.id < 6) {
          $li.innerHTML = `
          <div class="api-photos">
            <img src="${el.thumbnailUrl}" alt=""> 
            <div class="text">
              <p><b>titulo:</b> ${el.title}</p>
              <p><b>id:</b> ${el.id}</p>
              <p><b>Album-id:</b> ${el.albumId}</p>
            </div>
          </div>
          <hr/>
          `;
          $fragment.appendChild($li);
        }
        $fetch.appendChild($fragment);
      });
    })
    .catch((err) => {
      console.log("Estamos en el catch error n°", err.status, [err]);
      let message = xht.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    });
})();

//TODO ::::: API Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch(url_api_photos);
      let json = await res.json();
      // console.log(json.length);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        if (el.id < 6) {
          $li.innerHTML = `
          <div class="api-photos">
            <img src="${el.thumbnailUrl}" alt=""> 
            <div class="text">
              <p><b>titulo:</b> ${el.title}</p>
              <p><b>id:</b> ${el.id}</p>
              <p><b>Album-id:</b> ${el.albumId}</p>
            </div>
          </div>
          <hr/>
          `;
          $fragment.appendChild($li);
        }
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    }
  }
  getData();
})();

//TODO ::::: Axios libreria
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get(url_api_photos)
    .then((res) => {
      let json = res.data;
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        if (el.id < 6) {
          $li.innerHTML = `
          <div class="api-photos">
            <img src="${el.thumbnailUrl}" alt=""> 
            <div class="text">
              <p><b>titulo:</b> ${el.title}</p>
              <p><b>id:</b> ${el.id}</p>
              <p><b>Album-id:</b> ${el.albumId}</p>
            </div>
          </div>
          <hr/>
          `;
          $fragment.appendChild($li);
        }
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.status}: ${message}`;
    });
})();

//TODO ::::: Axios + Async-Await
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
  async function getData() {
    try {
      let res = await axios.get(url_api_photos);
      let json = await res.data;
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        if (el.id < 6) {
          $li.innerHTML = `
          <div class="api-photos">
            <img src="${el.thumbnailUrl}" alt=""> 
            <div class="text">
              <p><b>titulo:</b> ${el.title}</p>
              <p><b>id:</b> ${el.id}</p>
              <p><b>Album-id:</b> ${el.albumId}</p>
            </div>
          </div>
          <hr/>
          `;
          $fragment.appendChild($li);
        }
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.status}: ${message}`;
    }
  }
  getData();
})();
