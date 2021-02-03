import React, { useState, useEffect } from 'react';
import FormCard from '../formCard/FormCard.js';
import dataCards from '../../dataSample/data.json';
import CardList from '../cardList/CardList.js';
import Button from '../commons/Button.js';
import OrderCardsByTitle from '../../services/orderCards.js';
import './CardController.css';

const CardController = () => {
    
    const [state, setState] = useState({
        id : 0,
        title : '',
        desc : '',
        imgUrl : '',
        isEditedCard : false 
    }) 

    const [stateToggle, setStateToggle] = useState(false);
    const [stateAscDesc, setStateAscDesc] = useState(false);
    const [stateDataCards, setStateDataCards] = useState(OrderCardsByTitle(dataCards,true))

    useEffect(() => {
       let data = localStorage.getItem('data');
       if (data != null){
            setStateDataCards(JSON.parse(data))
       }
    }, []);

    useEffect(() => {
        localStorage.setItem('data',JSON.stringify(OrderCardsByTitle(stateDataCards,true)));
    }, [stateDataCards]); 

    function toggleForm(){
        setStateToggle(!stateToggle);
    }

    function orderByTitle(cards,changeAscDesc){

        let newStateAscDesc = false
        if (changeAscDesc){
            newStateAscDesc = stateAscDesc;
            setStateAscDesc(!stateAscDesc);
        }else{
            newStateAscDesc = !stateAscDesc; // we need before value to order and show, no next value.
        }

        const cardsOrdered = OrderCardsByTitle(cards,newStateAscDesc);
        
        setState({
            ...state,
            isEditedCard : false
        }); 

        setStateDataCards(cardsOrdered);
    }

    function eventHandlerNewCard(){
        
        setState({
            ...state,
            id : 0,
            title: '',
            desc : '',
            imgUrl : '',
            isEditedCard : false
        });
        
        toggleForm();
    }

    function eventHandlerDeleteCard(id){ 
        const newCards = stateDataCards.filter(card => card.id !== id);
        setStateDataCards(newCards)
    }

    function eventHandlerEditCard(id){ 

        const cardEdit = stateDataCards.filter(card => card.id === id)
        const { title, desc, imgUrl } = cardEdit[0];  

        setState({
            ...state,
            id : id,
            title : title,
            desc : desc,
            imgUrl : imgUrl,
            isEditedCard : true
        })
        
        toggleForm();
    }

    function saveNewCard(ncard){ // confirmation add

        let newId = 0;
        if(stateDataCards.length > 0){
            let ids = stateDataCards.map( card => {
                return card.id
            })
            newId = Math.max(...ids) + 1;
        }

        const card = {
          id : newId, 
          title : ncard.title,
          desc: ncard.desc,
          imgUrl : ncard.imgUrl
        }

        orderByTitle([...stateDataCards,card],false)
    
    } 
    
    function saveEditedCard(ncard){ // confirmation edit
        const objIndex = stateDataCards.findIndex((obj => obj.id === state.id));
        const cpDataCards = [...stateDataCards];
        cpDataCards[objIndex].title = ncard.title;
        cpDataCards[objIndex].desc = ncard.desc;
        cpDataCards[objIndex].imgUrl = ncard.imgUrl;
        orderByTitle(cpDataCards,false);
        toggleForm();
    }


    return (
        <div className='container'>
            <div className='main-menu'>
                <Button name="newCard" message="Nueva" onClick={eventHandlerNewCard}/>
                <Button name="orderCardByTitle" message="Asc/Desc" onClick={() => {orderByTitle(stateDataCards,true)}} />
            </div>

            {stateToggle &&  
            <div className="container-modal">
                <FormCard
                id={state.id} 
                title={state.title} 
                desc={state.desc}
                imgUrl={state.imgUrl}  
                isEditedCard={state.isEditedCard}
                toggleForm={toggleForm} 
                saveNewCard={saveNewCard}
                saveEditedCard={saveEditedCard}/>
            </div>
            }
            
           <CardList 
           dataCards={stateDataCards}
           eventHandlerDeleteCard={eventHandlerDeleteCard}
           eventHandlerEditCard={eventHandlerEditCard}
           />

        </div>

    );
    
}

export default CardController;
