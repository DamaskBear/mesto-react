import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import DeleteCardPopup from "./DeleteCardPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";


function App() {
  //states
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEdtitProfilePopupOpen, setIsEdtitProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpened] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [deletedCard, setDeletedCard] = useState("");
  const [isRenderLoading, setIsRenderLoading] = useState(false);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardsData, userData]) => {
        setCards(cardsData);
        setCurrentUser(userData);
      })
      .catch((err) => console.error(err));
  }, []);

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

  const handleDeleteCardClick = (card) => {
    setIsDeleteCardPopupOpen(true);
    setDeletedCard(card);
  };
  // close popups
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEdtitProfilePopupOpen(false);
    setIsAddPlacePopupOpened(false);
    setSelectedCard(null);
    setIsDeleteCardPopupOpen(false);
    setDeletedCard(null);
  };

  //actions with card

  //Рендер загрузки
  const renderLoading = () => {
    setIsRenderLoading((isRenderLoading) => !isRenderLoading);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardLike = () => {
    if (card.isLiked()) {
        api.deleteLike(card._id)
            .then((data) => {
                card.deleteLike();
                card.setLike(data.likes);
            })
            .catch((err) => {
                console.log(err);
            })

    } else {
        api.addLike(card._id)
            .then((data) => {
                card.addLike();
                card.setLike(data.likes);
            })
            .catch((err) => {
                console.log(err);
            })
    }
};

  // const handleCardLike = (card) => {
  //   const isLiked = card.likes.some((item) => item._id === currentUser._id);
  //   api
  //     .changeLikeCardStatus(card._id, isLiked)
  //     .then((newCard) => {
  //       setCards((state) =>
  //         state.map((card) => (card._id === newCard._id ? newCard : card))
  //       );
  //     })
  //     .catch((err) => console.error(err));
  // };

  const handleCardDelete = () => {
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        setCards((state) =>
          state.filter((item) => item._id !== deletedCard._id)
        );
      })
      .then(() => closeAllPopups())
      .catch((err) => console.log(err))
      .finally(() => renderLoading());
  };

  const handleAddPlaceSubmit = (cardData) => {
    api
      .addCard(cardData)
      .then((data) => setCards([data, ...cards]))
      .then(() => closeAllPopups())
      .catch((err) => console.error(err))
      .finally(() => renderLoading());
  };

  const handleUpdateAvatar = (data) => {
    api
      .changeUserAvatar(data)
      .then((newData) => setCurrentUser(newData))
      .then(() => closeAllPopups())
      .catch((err) => console.log(err));
      // .finally(() => renderLoading());
  };

  const handleUpdateUser = (data) => {
    api
      .updateUserInfo(data)
      .then((newData) => setCurrentUser(newData))
      .then(() => closeAllPopups())
      .catch((err) => console.log(err));
      //.finally(() => renderLoading())
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
        <Header/>
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCardClick}
        />
        <Footer/>

        <EditProfilePopup
          isOpen={isEdtitProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isRenderLoading={isRenderLoading}
          // renderLoading={renderLoading}
          // renderLoadingButtonText={"Сохранение..."}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          //isRenderLoading={isRenderLoading}
          //renderLoading={renderLoading}
          //renderLoadingButtonText={"Обновление..."}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddNewCard={handleAddPlaceSubmit}
          //isRenderLoading={isRenderLoading}
          //renderLoading={renderLoading}
          //renderLoadingButtonText={"Добавление..."}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          //isRenderLoading={isRenderLoading}
          //renderLoading={renderLoading}
          onDeleteCard={handleCardDelete}
        />        

        <ImagePopup
         card={selectedCard}
         onClose={closeAllPopups} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;