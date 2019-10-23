const postFetch = (url, data) => {
  return window.fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(data),
  })
    .then(res => {
      return Promise.all([
        Promise.resolve(res),
        res.json(),
      ]);
    })
    .then(([response, json]) => {
      const status = response.status;
      const firstStatusChar = status.toString()[0];

      if (firstStatusChar === '4' || firstStatusChar === '5') {
        throw new Error(`${status}: ${JSON.stringify(json)}`);
      }

      return {
        data: json,
        meta: {
          status,
          err: null,
        },
      }
    })
    .catch(e => {
      throw e;
    })
};

export {
  postFetch,
}
