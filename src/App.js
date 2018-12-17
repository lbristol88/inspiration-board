import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import CARD_DATA from './data/card-data.json';


class App extends Component {

  constructor() {
     super();
      this.state = {
       value: 'LAYLA',
       boards: []
     };
   }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={this.state.value}
          cardData={CARD_DATA.cards}
          />
      </section>
    );
  }
}

export default App;
