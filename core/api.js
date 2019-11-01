const apiUrl = 'http://localhost:4040/api/';

const request = async (url) => {
  fetch(apiUrl + url)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
}

export default Api = {
  get: (url) => {
    return request(`get/${url}`);
  },
  post: (url, params) => {
    alert('yes post', params);
    return request(`post/${url}/${params}`);
  },
  delete: (url) => {
    return request(`delete/${url}`);
  },
  put: (url, params) => {
    return request(`put/${url}/${params}`);
  },
};
