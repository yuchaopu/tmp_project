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
instance.interceptors.request.use(config => {
    if (localStorage.getItem('authorization')) {
        config.headers.common['authorization'] =
            localStorage.getItem('authorization');
    }
    if (localStorage.getItem('lang')) {
        config.headers.common['language'] =
            {
                'zh': 'zh-CN',
                'en': 'en-US'
            }[localStorage.getItem('lang')];
    }
    if (localStorage.getItem('NECaptchaValidate')) {
        instance.defaults.headers.common['NECaptchaValidate'] =
            localStorage.getItem('NECaptchaValidate');
    }
    return config;
})


instance.interceptors.response.use(res=>{
    return res;
})
for (let [k, v] of Object.entries(apis)) {
    HTTP[k] = (data, params) => {
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