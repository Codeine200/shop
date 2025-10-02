import './Card.css'
import {Link} from "react-router";

export const Card = ({ card }) => {
    return (
        <Link to={`/product/${card.id}`} className="card-item">
            <div className="card--img">
                <img src={card.img} alt={card.title} />
            </div>
            <h5 className="card--title">{card.title}</h5>
            <strong className="card--price">{card.price}</strong>
            <div className="card--desc-box">
                <span className="card--desc">{card.address}</span>
                <span className="card--desc">{card.date}</span>
            </div>
        </Link>
)
}