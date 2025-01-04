export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = { accept: "application/json" };

    const controller = new AbortController();

    //* 🔻opciones de peticiones
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return { get, post, put, del };
};

//* Optimizado
export const helpHttpOptimizado = () => {
  const customFetch = async (endpoint, options = {}) => {
    const defaultHeader = { accept: "application/json" };

    const controller = new AbortController();
    const { signal } = controller;

    const fetchOptions = {
      method: options.method || "GET",
      headers: { ...defaultHeader, ...options.headers },
      signal,
      body: options.body ? JSON.stringify(options.body) : undefined,
    };

    try {
      const response = await fetch(endpoint, fetchOptions);
      if (!response.ok) {
        throw {
          err: true,
          status: response.status || "00",
          statusText: response.statusText || "Ocurrió un error",
        };
      }
      return await response.json();
    } catch (error) {
      return error;
      // } finally {
      // Limpieza: en caso de que desee realizar alguna acción después de completar la recuperación
    }
  };

  const get = (url, options = {}) =>
    customFetch(url, { ...options, method: "GET" });
  const post = (url, options = {}) =>
    customFetch(url, { ...options, method: "POST" });
  const put = (url, options = {}) =>
    customFetch(url, { ...options, method: "PUT" });
  const del = (url, options = {}) =>
    customFetch(url, { ...options, method: "DELETE" });

  return { get, post, put, del };
};
