import logo from './images/logo__mesto.svg';

function App() {
  return (
<div class="root">

<header className="header">
    <img src={logo} className="header__logo" alt="Логотип надписью Место"/>
</header>

<main class="main">

    <section class="profile">
        <div class="profile__info">
            <img class="profile__avatar" src="./images/kusto.jpg" alt="Фотография пользователя"/>
            <button type="button" class="profile__edit-avatar-button"></button>
            <div class="profile__container">
                <div class="profile__container-wrapp">
                    <h1 class="profile__name">Жак</h1>
                    <button type="button" class="profile__edit-button"></button>
                </div>
                <p class="profile__about">Исс</p>
            </div>
            
        </div>
        <button type="button" class="profile__add-button"></button>
    </section>

    <section class="elements">
        <ul class="elements__card">
        </ul>
    </section>
</main>

<footer class="footer">
    <p class="footer__copyrights">&copy; 2020 Mesto Russia</p>
</footer>

{/* </div><!-- edit profile--> */}

<div class="popup popup_type_edit-form">
    <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h2 class="popup__red-profile">Редактировать профиль</h2>
        <form class="popup__form popup__form_type-edit"
         name ="edit-profile-form" novalidate>
            <input 
                class="popup__input popup__input_name"
                type="text"
                value="Жак-Ив Кусто"
                id="name"
                name="name"
                placeholder="Имя"
                minlength="2"
                maxlength="40" required />
            <span class="popup__input-error name-input-error"></span>
            <input 
                class="popup__input popup__input_job"
                type="text"
                value="Исследователь океана"
                id="about"
                name="about"
                placeholder="О себе"
                minlength="2"
                maxlength="200" required />
            <span class="popup__input-error about-input-error"></span>
            <button type="submit" class="popup__button popup__button-submit">Сохранить</button>
        </form>
    </div>
</div>

{/* <!--add new cards--> */}

<div class="popup popup_type_add-form">
    <div class="popup__container popup__container_place">
        <button type="button" class="popup__close-button popup__close-button_place"></button>
        <h2 class="popup__add-header">Новое место</h2>
        <form class="popup__form popup__form_type_add-card" name="add-card-form" novalidate>
            <input 
                class="popup__input popup__input_place-name"
                type="text"
                name="name"
                id="place-name"
                placeholder="Название"
                minlength="2"
                maxlength="30" required />
            <span class="popup__input-error place-name-input-error"></span>
            <input 
                class="popup__input popup__input_place-link"
                type="url"
                name="link"
                id="place-link"
                placeholder="Ссылка на картинку" required />
            <span class="popup__input-error place-link-input-error"></span>
            <button type="submit" class="popup__button popup__button-submit popup__button_disabled">Создать</button>
        </form>
    </div>
</div>

{/* <!-- popup of images --> */}

<div class="popup popup_type_fullscreen-photo">
    <div class="popup__photo-container">
      <button class="popup__close-button" type="button"></button>
      <img class="popup__fullscreen-photo" alt="" src="#" />
      <figcaption class="popup__fullscreen-caption"></figcaption>
    </div>
  </div>

{/* <!--template --> */}

<template class="card-template" id="card-template">
    <li class="elements__item card">
        <button type="button" class="elements__pic-bin"></button>
        <img class="elements__photo" src="#" alt="" />
        <div class="elements__container">
            <p class="elements__name"></p>
            <div class="elements__like">
                <button type="button" class="elements__like-button"></button>
                <p class="elements__like-count">0</p>
            </div>
        </div>
    </li>
</template>

{/* <!-- delete of card --> */}

<div class="popup popup_type_delete-card">
    <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h2 class="popup__title">Вы уверены?</h2>
        <form name="popup" class="popup__form popup__form_type_delete">
            <button type="submit" class="popup__button popup__button-submit">Да</button>
        </form>
    </div>
</div>

{/* <!-- avatar --> */}

<div class="popup popup_type_avatar-form">
    <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h2 class="popup__title">Обновить аватар</h2>
        <form name="popup" class="popup__form popup__form_type_avatar">
            <input 
                class="popup__input popup__input_avatar"
                type="url"
                name="avatar"
                id="avatar"
                required placeholder="Ссылка на картинку" />
            <span class="popup__input-error avatar-input-error"></span>
            <button type="submit" class="popup__button popup__button-submit">Сохранить</button>
        </form>
    </div>
</div>

</div>
)
}

export default App;