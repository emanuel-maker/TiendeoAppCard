import React from 'react';
import Card from '../card/Card.js'
import './CardList.css';

const CardList = (props) => {
    return (   
        <div className="container-cards">
            {props.dataCards.map((card) => 
            <Card  
            eventHandlerDeleteCard={props.eventHandlerDeleteCard} 
            eventHandlerEditCard={props.eventHandlerEditCard} 
            card={card} key={card.id} />
            )}
        </div>          
    );
}

export default CardList;

