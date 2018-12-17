import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]



class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      emoji: ""
    }
  }

  onTextChange = (event) => {
    console.log('text was changed!', event);
    this.setState({
      text: event.target.value, //will be whatever input was changed (even.target), value will be the new piece
      });
  }

  onEmojiChange = (event) => {
    this.setState({
      emoji: event.target.value,
    });
  }

  onInputchange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState)
  }

  onFormSubmit = (event) =>{
    event.preventDefault();

    const newCard = {
      text: this.state.text,
      emoji: this.state.emoji,
    };

    this.setState({
      text: "",
      emoji: "",
    });

    if (newCard.text !== "" && newCard.emoji !== ""){
      this.props.addCardCallback(newCard);
    }
      else {
        alert("please enter text and emoji")
      }
   }

  render() {
    return (
      <div>
        <form
          className="new-card-form__form "
          onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="text">Text:</label>
            <input
            name="text"
            value={this.state.text}
            onChange={this.onTextChange}
             />
          </div>
          <div>
            <label htmlFor="emoji">Emoji:</label>
            <input
            name="emoji"
            value={this.state.emoji}
            onChange={this.onEmojiChange} />
          </div>
          <input
            className="new-card-form__form-button"
            type="submit"
            value="Add Text"
          />
        </form>
      </div>
    );
  }
}
export default NewCardForm;
