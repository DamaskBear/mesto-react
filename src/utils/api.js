import {api_url, token} from './utils';

class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                "authorization": this._token,
            },
          })
          .then((res) => this._checkResponse(res));
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: {
                "authorization": this._token,
            }
         })
        .then((res) => this._checkResponse(res));
    }
}

const api = new Api(api_url, token);

export default api;