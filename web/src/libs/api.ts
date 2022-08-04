import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

// axios.defaults.baseURL = 'http://myurl';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.get(serviceUrl, onSuccess, onFailure)
// .then(resp => {
//       let result = resp.data;
//       onSuccess(result);
// })
// .catch(error => {
//       if(onFailure) {
//           return onFailure(error);
//       }
// })
// }
