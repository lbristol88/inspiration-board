import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  render() {
    const cards = this.props.cardData

    const cardCollection = cards.map((card, i) => {
      return <Card key={i} text={card.text} emoji={card.emoji} />
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
