const URL_API = "https://jsonplaceholder.typicode.com/users";
const $fragment = document.createDocumentFragment();

//TODO ::::: Objeto XML (HttpsResquest)

(() => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      console.log({ XMLHttpRequest: json });
    } else console.warn({ xhr, status: xhr.status });
  });

  xhr.open("GET", URL_API);
  xhr.send();
})();

//TODO ::::: API Fetch

(() => {
  fetch(URL_API)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => console.log({ Fetch: json }))
    .catch((err) => console.warn({ 0: "fetch", err, status: err.status }));
})();

//TODO ::::: API Fetch + Async-Await

(() => {
  async function getData() {
    try {
      let res = await fetch(URL_API);
      let json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      console.log({ Fetch_Async: json });
    } catch (err) {
      console.warn({ 0: "Fetch Async", err });
    }
  }
  getData();
})();

//TODO ::::: Axios libreria

(() => {
  axios
    .get(URL_API)
    .then((res) => console.log({ Axios_json: res.data }))
    .catch((err) => {
      console.warn({
        0: "axios",
        err,
        response: err.response,
        status: err.response.status,
      });
    });
})();

//TODO ::::: Axios + Async-Await

(() => {
  async function getData() {
    try {
      let res = await axios.get(URL_API);
      let json = await res.data;
      console.log({ Axios_Async: json });
    } catch (err) {
      console.warn({
        0: "axios async",
        err,
        response: err.response,
        status: err.response.status,
      });
    }
  }

  getData();
})();
