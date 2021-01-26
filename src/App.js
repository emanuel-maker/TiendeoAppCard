import React, { Component } from 'react';
import './App.css';

import Card from './components/Card/Card.js'
import FormCard from './components/FormCard/FormCard.js';
import dataCards from './dataSample/data.json';

class App extends Component{

  state = {
    dataCards : dataCards,
    toggleForm : false,
    id : 0,
    title : '',
    desc : '',
    imgUrl : '',
    isEditedCard : false,
  }

  toggleForm = () => {
    this.setState({
      toggleForm : !this.state.toggleForm
    })
  }

  eventHandlerNewCard = () => {
    this.toggleForm()
    this.setState({
      title : '',
      desc : '',
      imgUrl : '',
      isEditedCard : false
    })
  }

  eventHandlerEditCard = (id) => { 
    this.toggleForm()
    const cardEdit = this.state.dataCards.filter(card => card.id === id);
    const { title, desc, imgUrl } = cardEdit[0];

    this.setState({
      id : id,
      title : title,
      desc : desc,
      imgUrl : imgUrl,
      isEditedCard : true
    })
  }

  saveNewCard = (ncard) => { // confirmation add
    const card = {
      id : this.state.dataCards.length,
      title : ncard.title,
      desc: ncard.desc,
      imgUrl : ncard.imgUrl
    }

    this.setState({
      dataCards: [...this.state.dataCards,card]
    })

  } 

  saveEditedCard = (ncard) => { // confirmation edit
    this.state.dataCards.splice(this.state.id,1,{id:this.state.id,title:ncard.title,desc:ncard.desc,imgUrl:ncard.imgUrl});
    this.toggleForm()
  }

  deleteCard = (id) => { // confirmation delete
    const newCards = this.state.dataCards.filter(card => card.id !== id);
    this.setState({
      dataCards: newCards
    })
  }

  render(){
    return (
        <div className='container'>
            <div className='main-menu'>
               <button onClick={this.eventHandlerNewCard}>Nueva</button>
            </div>

            {this.state.toggleForm &&  
              <div className="container-modal">
                <FormCard
                id={this.state.id} 
                title={this.state.title} 
                desc={this.state.desc}
                imgUrl={this.state.imgUrl}  
                isEditedCard={this.state.isEditedCard}
                toggleForm={this.toggleForm} 
                saveNewCard={this.saveNewCard}
                saveEditedCard={this.saveEditedCard}/>
              </div>
            }
            <div className="container-cards">
              {this.state.dataCards.map((e) => 
                <Card 
                eventHandlerEditCard={this.eventHandlerEditCard} 
                deleteCard={this.deleteCard} 
                card={e} key={e.id} />
              )}
            </div>         
        </div>
    )
  }
}

export default App;
