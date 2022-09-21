function PopupWithForm({name, title, children, buttonText, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ""}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form
                    className={`popup__form popup__form_type_${name}`}
                    action="#"
                    method="POST"
                    name={`${name}-form`}
                    >
                    {children}
                    <button className="popup__button" type="submit">
                      {buttonText}    
                    </button>
                </form>
                <button
                    className="popup__close-button"
                    type="button"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    );
}

export default PopupWithForm;