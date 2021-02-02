import React, { useState } from 'react';
import './FormCard.css';

FormCard = () => {

  return (
    <div>
      
    </div>
  );

}

export default FormCard;

/*class FormCard extends Component{

  state = {
    id : this.props.id,
    title : this.props.title,
    desc : this.props.desc,
    imgUrl : this.props.imgUrl,
    isEditedCard : this.props.isEditedCard,
    messageError : ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  showMessageError = () => {
    this.setState({
      messageError : 'Campos Titulo y Descripción requeridos'
    }) 
  }

  hideMessageError = () => {
    this.setState({
      messageError : ''
    }) 
  }

  resetValues = () => {
    this.setState({
      title : '',
      desc : '',
      imgUrl : '',
    }) 
  }

  validate = () => {
    return (this.state.title !== '' && this.state.desc !== '')
  }

  eventHandlerSaveData = (e) => {

    const card = {
      id : this.state.id,
      title : this.state.title,
      desc : this.state.desc,
      imgUrl : this.state.imgUrl
    }

    if(this.validate()){
      e.target.name === 'saveNewCard' ? this.props.saveNewCard(card) :
      this.props.saveEditedCard(card)
      this.hideMessageError()
      this.resetValues()
    }else{
      this.showMessageError()
    }
  }

  render(){
    return (
        <div className='form'>
           {!this.state.isEditedCard ? 
           <h2>Nueva Tarjeta</h2> : 
           <h2>Modifica Tarjeta</h2> }

            <form className="container-inputs">
                  <p>{this.state.messageError}</p>
                  <input name="title" type="text" 
                  value={this.state.title} 
                  onChange={this.onChange} 
                  maxLength="40" placeholder="Titulo"/>

                  <input name="desc" type="text" 
                  value={this.state.desc} 
                  onChange={this.onChange} 
                  maxLength="100" placeholder="Descripción"/>

                  <input name="imgUrl" type="text" 
                  value={this.state.imgUrl} 
                  onChange={this.onChange} placeholder="Imagen(URL)"/>
            </form> 
            <div className="container-btn">
            
            {!this.state.isEditedCard ?  
            <button name="saveNewCard" onClick={this.eventHandlerSaveData}> Añadir</button> : 
            <button name="saveEditedCard" onClick={this.eventHandlerSaveData}> Confirmar</button>}
            <button onClick={this.props.toggleForm.bind(this)}> Cancelar</button>
            </div>
        </div>
    )
  }
}

export default FormCard; */



