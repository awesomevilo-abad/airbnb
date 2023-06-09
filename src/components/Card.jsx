import React  from "react";
import star from '../assets/images/star.png'

const Card = (props) => {

    const {coverImg, stats, reviewCount, location, title, price, openSpots} = props

    let badgeText;
    if(openSpots === 0 ){
        badgeText = "SOLD OUT"
    }else if (location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={`../assets/images/${coverImg}`} className='card--photo' />

            <div className="card--stats">
                <img src={star} className='card--star' />
                <span >{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) - </span>
                <span className="gray">{location}</span>
            </div>
                <p className="card--title">{title}</p>
                <p className="card--price"><span className="bold">From {`$ ${price}`}</span>/ persons</p>
        </div>
    )
}

export default Card;