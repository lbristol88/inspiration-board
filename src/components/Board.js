import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


const URL = 'https://inspiration-board.herokuapp.com/boards/LAYLA/cards';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      this.setState({cards: response.data});
    })
    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    const cardCollection = this.state.cards.map((card_obj, i) => {
      return <Card key={i} id={card_obj.card.id} text={card_obj.card.text} emoji={card_obj.card.emoji} />
    });

    return (
      <div className="board">
        {cardCollection}
      </div>
    )
  }

}

Board.propTypes = {
  cardData: PropTypes.array.isRequired

};

export default Board;
