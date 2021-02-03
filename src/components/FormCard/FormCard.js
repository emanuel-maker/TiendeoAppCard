import React, { useState } from 'react';
import Input from '../commons/Input.js';
import Button from '../commons/Button.js';
import './FormCard.css';

const FormCard = (props) => {

  const [state, setState] = useState({
    id : props.id,
    title : props.title,
    desc : props.desc,
    imgUrl : props.imgUrl,
    isEditedCard : props.isEditedCard
  }) 

  const [messageError, setMessageError] = useState('')

  function showMessageError(){
    setMessageError('Campos Titulo y Descripción requeridos') 
  }

  function hideMessageError(){
    setMessageError('')
  }

  function resetValues(){
    setState({
      ...state,
      title : '',
      desc : '',
      imgUrl : '',
    }) 
  }

  function validate(){
    return (state.title !== '' && state.desc !== '')
  }

  function updateState(nameInput,value){
    setState({
      ...state,
      [nameInput]:value
    })
  }

  function eventHandlerSaveData(e){

    const card = {
      id : state.id,
      title : state.title,
      desc : state.desc,
      imgUrl : state.imgUrl
    }

    if(validate()){
      e.target.name === 'saveNewCard' ? 
      props.saveNewCard(card) : props.saveEditedCard(card)

      hideMessageError()
      resetValues()
    }else{
      showMessageError()
    }
  }

  return (
    <div className='form'>
           {!state.isEditedCard ? 
           <h2>Nueva Tarjeta</h2> : 
           <h2>Modifica Tarjeta</h2> }
            <form className="container-inputs">
              <p>{messageError}</p>
              <Input 
              name="title" 
              value={state.title}
              updateState={updateState}
              maxLength="100" 
              placeholder="Titulo"
              /> 

              <Input 
              name="desc" 
              value={state.desc}
              updateState={updateState}
              maxLength="100" 
              placeholder="Descripción"
              /> 

            <Input 
              name="imgUrl" 
              value={state.imgUrl}
              updateState={updateState}
              maxLength="100" 
              placeholder="Imagen URL"
              />
              
            </form> 
            <div className="container-btn">
            
            {!state.isEditedCard ?  
            <Button message="Añadir" name="saveNewCard" onClick={eventHandlerSaveData}/> : 
            <Button message="Confirmar" name="saveEditedCard" onClick={eventHandlerSaveData}/>}
            <Button message="Cancelar" onClick={props.toggleForm}/>
            </div>
      </div>
  );

}

export default FormCard;




