import React, { Component } from 'react';
import './Card.css';

class Card extends Component{

  setImage() {
    return {
        backgroundImage: this.props.card.imgUrl ? "url(" + this.props.card.imgUrl + ")" : `url("https://picsum.photos/200/300")`
    }   
  }

  render(){
    return (
        
        <div className="card">
            <div className="front-card">
                <div style={this.setImage()} className="container-image">
                    <h4>{this.props.card.title}</h4>
                </div>
                <div className="desc">
                    {this.props.card.desc}
                </div>
            </div>
            <div className="back-card">
                <button className="btn-edit" onClick={this.props.eventHandlerEditCard.bind(this,this.props.card.id)}>Editar</button>
                <button className="btn-delete" onClick={this.props.deleteCard.bind(this,this.props.card.id)}>Eliminar</button>
            </div>
        </div>  
    )
  }
}

export default Card;