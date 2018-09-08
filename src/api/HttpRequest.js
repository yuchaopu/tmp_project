import axios from 'axios';
import apis from './Apis';

const HTTP = {};

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
};

const instance = axios.create({
    headers: headers
});

for (let [k, v] of Object.entries(apis)) {
    HTTP[k] = (data, params) => {
        if (localStorage.getItem('authorization')) {
            instance.defaults.headers.common['Authorization'] =
                localStorage.getItem('authorization');
        }
        if (localStorage.getItem('lang')) {
            instance.defaults.headers.common['Language'] =
                {
                    'zh': 'zh-CN',
                    'en': 'en-US'
                }[localStorage.getItem('lang')];
        }
        if (localStorage.getItem('NECaptchaValidate')) {
            instance.defaults.headers.common['NECaptchaValidate'] =
                localStorage.getItem('NECaptchaValidate');
        }
        return new Promise((resolve, reject) => {
            if (v.method === 'post') {
                instance.post(v.url, data)
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
    
                instance.get(v.url, params)
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