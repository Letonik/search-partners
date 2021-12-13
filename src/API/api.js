import * as axios from "axios";

const $url = "http://search-partner.na4u.ru/"
export {$url};

const $instance = axios.create({
    crossDomain: true,
    withCredentials: true,
    baseURL: $url + 'api/',
    credentials: 'include'
});


export const typeAPI = {
    getType() {
        return $instance.get(`search`)
    },
    getPartners(company='', status) {
        if (status) {
            return $instance.get(`search/partners?company=${company}&status=${status}`)
        }
        return $instance.get(`search/partners?company=${company}`)
    }
}


