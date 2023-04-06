
const url = 'http://api-test.tdera.ru';

export const getdocumentlist = (login, password) => {
  return fetch(`${url}/api/getdocumentlist`, {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + btoa(`${login}:${password}`),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
};




export const getdocument = (login, password, idRecord) => {
  return fetch(`${url}/api/getdocument?id=${idRecord}`, {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + btoa(`${login}:${password}`),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
};