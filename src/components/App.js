import { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  //states
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEdtitProfilePopupOpen, setIsEdtitProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpened] = useState(false);
  const [selectedCard, setSelectedCards] = useState(null);
  // open popups
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEdtitProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpened(true);
  };

  const handleCardClick = (card) => {
    setSelectedCards(card);
  };
  // close popups
  const closeAllPopup = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEdtitProfilePopupOpen(false);
    setIsAddPlacePopupOpened(false);
    setSelectedCards(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
        <Header/>
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer/>
{/* avatar */}
        <PopupWithForm
          name="avatar-form"
          title="Обновить фото"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}>

          <input 
            className="popup__input popup__input_avatar"
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на картинку"
            required
           />
           <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
{/* profile */}
        <PopupWithForm
          name="edit-form"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEdtitProfilePopupOpen}
          onClose={closeAllPopup}>

          <input 
            className="popup__input popup__input_name"
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required />
          <span className="popup__input-error name-input-error"></span>

          <input 
            className="popup__input popup__input_job"
            type="text"
            id="about"
            name="about"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>
{/* add card */}
        <PopupWithForm
          name="add-form"
          title="Новое место"
          buttonText="Добавить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}>
          
          <input 
            className="popup__input popup__input_place-name"
            type="text"
            name="name"
            id="place-name"
            placeholder="Название"            
            minLength="2"
            maxLength="30" 
            required />
          <span className="popup__input-error place-name-input-error"></span>
          <input 
            className="popup__input popup__input_place-link"
            type="url"
            name="link"
            id="place-link"
            placeholder="Ссылка на картинку"
            required />
          <span className="popup__input-error place-link-input-error"></span>  
        </PopupWithForm>
{/* delete confirmation */}
        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          buttonText="Удалить"
          onClose={closeAllPopup}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopup} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;