import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


const URL = 'https://inspiration-board.herokuapp.com';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

// This loads all cards from the API
  componentDidMount() {
    const cardsURL = `${URL}/boards/LAYLA/cards`
    axios.get(cardsURL)
    .then((response) => {
      this.setState({cards: response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteCard = (cardID) => {
    const cardURL = `${URL}/cards/${cardID}`;
    axios.delete(cardURL)
    .then(() => {
      let cardsCopy = [...this.state.cards];
      let index = cardsCopy.findIndex(cardData => cardData.card.id === cardID);
      cardsCopy.splice(index, 1);

      this.setState({cards: cardsCopy});
    })
    .catch((error) => {
      console.log(error.message);
    });

  }

  addCard = (newCard) => {
    //   const cards = this.state.cards;
    //   cards.push(newCard);
    //   this.setState({cards: card});
    //   console.log(newCard, this.state.cards)
    //   console.log("im here bitches")
    const newURL = `${URL}/boards/LAYLA/cards`

    axios.post(newURL, newCard)
      .then((response) => {
        const cards = this.state.cards;
        cards.push(response.data);
        this.setState({cards: cards});
      })
      .catch((error) => {
        console.log(error.response);
      });
    }


  render() {
    const cardCollection = this.state.cards.map((card_obj, i) => {
      return <Card
                key={i}
                id={card_obj.card.id}
                text={card_obj.card.text}
                emoji={card_obj.card.emoji}
                deleteCardCallback={this.deleteCard}
              />
    });

    return (
      <div className="board">
        {cardCollection}
        <NewCardForm addCardCallback={this.addCard}/>

      </div>

    )
  }

}

Board.propTypes = {
  cardData: PropTypes.array.isRequired
};

export default Board;
