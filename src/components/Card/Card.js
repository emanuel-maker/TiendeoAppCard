import React from 'react';
import Button from '../commons/Button.js';
import './Card.css';


const Card = (props) => {

    const setImage = () => {
        return {
            backgroundImage: props.card.imgUrl ? "url(" + props.card.imgUrl + ")" : `url("https://picsum.photos/200/300")`
        }   
    }
    
    return (
        <div className="card">
            <div className="front-card">
                <div style={setImage()} className="container-image">
                    <h4>{props.card.title}</h4>
                </div>
                <div className="desc">
                    {props.card.desc}
                </div>
            </div>
            <div className="back-card">
                <Button message="Eliminar" onClick={() => {props.eventHandlerDeleteCard(props.card.id)}}/>
                <Button message="Editar" onClick={() => {props.eventHandlerEditCard(props.card.id)}}/>
            </div>
        </div>  
    );
}

export default Card;
