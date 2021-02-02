import React, { useState } from 'react';
//import FormCard from '../FormCard/FormCard.js';
import dataCards from '../../dataSample/data.json';
import CardList from '../cardList/CardList.js';

const useCardList = () => {
    const [state, setState] = useState({
        dataCards : dataCards,
        toggleForm : false,
        id : 0,
        title : '',
        desc : '',
        imgUrl : '',
        isEditedCard : false 
    })

    return { state, setState }
}

const CardController = () => {
    
    const { state, setState } = useCardList()

    const eventHandlerDeleteCard = (id) => { // confirmation delete
        const newCards = state.dataCards.filter(card => card.id !== id);
        setState({
            dataCards: newCards
        })
    }
    
    const eventHandlerEditCard = (id) => { 
        console.log(`executing!!`)
    }

    return (
        <div className='container'>

           <CardList 
           dataCards={state.dataCards}
           eventHandlerDeleteCard={eventHandlerDeleteCard}
           eventHandlerEditCard={eventHandlerEditCard}
           />
        </div>
    );
    
}

export default CardController;
