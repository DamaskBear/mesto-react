import React from "react";
import api from "../utils/api";
import Card from "./Card";


function Main({onCardClick, onAddPlace, onEditAvatar, onEditProfile}) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useInsertionEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cardData]) => {
            setUserName(userData.name)
            setUserAvatar(userData.avatar);
            setUserDescription(userData.about)
            setCards(cardData);
        })
        .catch((err) => console.error(err));
    }, []);

    const cardItems = cards.map((item) => {
        return (
            <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
            />
        )
    });

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__info">
                    <img 
                    className="profile__avatar"
                    src={userAvatar}
                    alt="Фотография пользователя"
                    />
                    <button
                    type="button" 
                    className="profile__edit-avatar-button"
                    onClick={onEditAvatar}>
                    </button>

                    <div className="profile__container">
                        <div className="profile__container-wrapp">
                            <h1 className="profile__name">{userName}</h1>
                            <button
                              type="button"
                              className="profile__edit-button"
                              onClick={onEditProfile}>
                            </button>
                        </div>
                        <p className="profile__about">{userDescription}</p>
                    </div>  
                </div>
                <button
                   type="button"
                   className="profile__add-button"
                   onClick={onAddPlace}>
                </button>
            </section>

            <section className="elements">
                <ul className="elements__card">
                    {cardItems}
                </ul>
            </section>
        </main>
    );
}

export default Main;