import React from 'react'

function Card(props) {
    return (
        <>
            <div className="grid__item">
                <div className="card"><img className="card__img" src={props.imgsrc} alt="Snowy Mountains" />
                    <div className="card__content">
                        <h1 className="card__header">{props.title}</h1>
                        <p className="card__text">{props.para}</p>
                        <button className="card__btn">Explore <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card