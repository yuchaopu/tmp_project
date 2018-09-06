import axios from 'axios';
import apis from './Apis';

const HTTP = {};

for (let [k, v] of Object.entries(apis)) {
    HTTP[k] = (data, params) => {
        return new Promise((resolve, reject) => {
            if (v.method === 'post') {
                axios.post(v.url, data)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            }
            if (v.method === 'get') {
                v.url = v.url.replace(/\/:(\w+)/, ($1, $2) => {
                    if ($2 && data[$2]) {
                        return `/${data[$2]}`;
                    }
                    return $1;
                });
    
                axios.get(v.url, params)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            }
        });
    }
}

export default HTTP;