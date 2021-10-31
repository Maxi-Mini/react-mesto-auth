 class Api {
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
    }

    _getResponse(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

// загружаем карточки с сервера

    getCards(){
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
        .then(this._getResponse)
    }

// загружаем данные о пользователе с сервера

    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(this._getResponse)
    }

// отправка данных профиля на сервер

    setUserInfo(data){
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.description
              })
        })
        .then(this._getResponse)
    }

// обновление аватара

    setUserAvatar(data){
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._getResponse)
    }
    
// добавляем новую карточку на сервер

    postCard(data){
        console.log(data)
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
              })
        })
        .then(this._getResponse)
    }

// ставим лайк на карточку

    setLike(data){
        return fetch(`${this._url}/cards/likes/${data}`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._getResponse)
    }

// удаляем лайк с карточки

    deleteLike(data){
        return fetch(`${this._url}/cards/likes/${data}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._getResponse)
    }

// удаление карточки

    deleteCard(data){
        return fetch(`${this._url}/cards/${data}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._getResponse)
    }

// данные для отрисовки страницы

    getAllInfo(){
        return Promise.all([this.getCards(), this.getUserInfo()])
    }
// проверяем наличие лайка

    changeLikeCardStatus(data, isLiked) {
        console.log(data);
        return fetch(`${this._url}/cards/likes/${data}`, {
          method: `${isLiked ? 'DELETE' : 'PUT'}`,
          headers: this._headers,
        })
          .then(this._getResponse);
      }
}

export const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-27',
    headers:{
      authorization: '6b82b3a4-6e0d-4189-9884-5cc4086ad63c',
      'Content-Type': 'application/json'
    }
  })