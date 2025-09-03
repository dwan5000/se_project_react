const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function postItems({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items${(name, imageUrl, weather)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems, postItems };
