import React from "react";


function Main() {

    // function handleEditAvatarClick() {

    // }



    // handleEditProfileClick
    // handleAddPlaceClick


    return(
        <main className="main">
            <section className="profile">
                <div className="profile__info">
                <img className="profile__avatar" src="./images/kusto.jpg" alt="Фотография пользователя"/>
                <button type="button" className="profile__edit-avatar-button"></button>
                <div className="profile__container">
                    <div className="profile__container-wrapp">
                    <h1 className="profile__name">Жак</h1>
                    <button type="button" className="profile__edit-button"></button>
                    </div>
                    <p className="profile__about">Исс</p>
                </div>
                
                </div>
                <button type="button" className="profile__add-button"></button>
            </section>

            <section className="elements">
                <ul className="elements__card">
                </ul>
            </section>
        </main>
    )
}

export default Main;