function Card({ imgSrc, h2Text, pText, h2Class, pClass, buttonClass }) {
    return (
        <div>
            <img src={imgSrc} alt="COMIDAS" className="w-full h-48 object-cover" />
            <div className="px-6 py-6">
                <h2 className={h2Class}>{h2Text}</h2>
                <p className={pClass}>{pText}</p>
                <button className={buttonClass}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Card;
;