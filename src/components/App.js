import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  return (
    <div className="root">
        <Header/>
        <Main/>
        <Footer/>
        <PopupWithForm/>
        <ImagePopup/>


{/*<!-- edit profile--> */}

<div className="popup popup_type_edit-form">
    <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__red-profile">Редактировать профиль</h2>
        <form className="popup__form popup__form_type-edit"
         name ="edit-profile-form" novalidate>
            <input 
                className="popup__input popup__input_name"
                type="text"
                value="Жак-Ив Кусто"
                id="name"
                name="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40" required />
            <span className="popup__input-error name-input-error"></span>
            <input 
                className="popup__input popup__input_job"
                type="text"
                value="Исследователь океана"
                id="about"
                name="about"
                placeholder="О себе"
                minlength="2"
                maxlength="200" required />
            <span className="popup__input-error about-input-error"></span>
            <button type="submit" className="popup__button popup__button-submit">Сохранить</button>
        </form>
    </div>
</div>

{/* <!--add new cards--> */}

<div className="popup popup_type_add-form">
    <div className="popup__container popup__container_place">
        <button type="button" className="popup__close-button popup__close-button_place"></button>
        <h2 className="popup__add-header">Новое место</h2>
        <form className="popup__form popup__form_type_add-card" name="add-card-form" novalidate>
            <input 
                className="popup__input popup__input_place-name"
                type="text"
                name="name"
                id="place-name"
                placeholder="Название"
                minlength="2"
                maxlength="30" required />
            <span className="popup__input-error place-name-input-error"></span>
            <input 
                className="popup__input popup__input_place-link"
                type="url"
                name="link"
                id="place-link"
                placeholder="Ссылка на картинку" required />
            <span className="popup__input-error place-link-input-error"></span>
            <button type="submit" className="popup__button popup__button-submit popup__button_disabled">Создать</button>
        </form>
    </div>
</div>

{/* <!-- popup of images --> */}

<div className="popup popup_type_fullscreen-photo">
    <div className="popup__photo-container">
      <button className="popup__close-button" type="button"></button>
      <img className="popup__fullscreen-photo" alt="" src="#" />
      <figcaption className="popup__fullscreen-caption"></figcaption>
    </div>
  </div>

{/* <!--template --> */}

<template className="card-template" id="card-template">
    <li className="elements__item card">
        <button type="button" className="elements__pic-bin"></button>
        <img className="elements__photo" src="#" alt="" />
        <div className="elements__container">
            <p className="elements__name"></p>
            <div className="elements__like">
                <button type="button" className="elements__like-button"></button>
                <p className="elements__like-count">0</p>
            </div>
        </div>
    </li>
</template>

{/* <!-- delete of card --> */}

<div className="popup popup_type_delete-card">
    <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="popup" className="popup__form popup__form_type_delete">
            <button type="submit" className="popup__button popup__button-submit">Да</button>
        </form>
    </div>
</div>

{/* <!-- avatar --> */}

<div className="popup popup_type_avatar-form">
    <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="popup" className="popup__form popup__form_type_avatar">
            <input 
                className="popup__input popup__input_avatar"
                type="url"
                name="avatar"
                id="avatar"
                required placeholder="Ссылка на картинку" />
            <span className="popup__input-error avatar-input-error"></span>
            <button type="submit" className="popup__button popup__button-submit">Сохранить</button>
        </form>
    </div>
</div>

</div>
)
}

export default App;