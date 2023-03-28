import React  from "react";
import star from '../assets/images/star.png'

const Card = (props) => {
    const {img, rating, reviewCount, country, title, price} = props
    return (
        <div className="card">
            <img src={img} className='card--photo' />

            <div className="card--stats">
                <img src={star} className='card--star' />
                <span >{rating}</span>
                <span className="gray">({reviewCount}) - </span>
                <span className="gray">{country}</span>
            </div>
                <p className="card--title">{title}</p>
                <p className="card--price"><span className="bold">From {`$ ${price}`}</span>/ persons</p>
        </div>
    )
}

export default Card;