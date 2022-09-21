function Card({card, onCardClick}) {
    const handleCardClick = () => {
        onCardClick(card);
    };

    return (
        <li className="elements__item card">
            <button
              type="button"
              className="elements__pic-bin"
              aria-label="Удалить фото">
            </button>
            <img
              className="elements__photo"
              src={card.link}
              alt={card.name}
              onClick={handleCardClick} />
            <div className="elements__container">
                <p className="elements__name">{card.name}</p>
                <div className="elements__like">
                    <button
                      type="button"
                      className="elements__like-button"
                      arial-lable="Like">
                    </button>
                    <p className="elements__like-count">
                        {card.likes.length > 0 ? card.likes.length : null}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Card;