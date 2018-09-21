import React, { Component } from 'react';
import Post from '../components/post';
import { Form, Text, TextArea } from 'informed';
//import './main.css';

class NewGameForm extends Component {
  render() {
    return (
        <div className="NewGameForm">
            <Form id="game-form">
                <label htmlFor="game-title">Title:</label>
                <Text field="title" id="game-title" />
                <label htmlFor="game-subtitle">Subtitle:</label>
                <Text field="subtitle" id="game-subtitle" />
                <label htmlFor="game-description">Description:</label>
                <TextArea field="description" id="game-description" />
                <label htmlFor="game-image">Image Source:</label>
                <Text field="image" id="game-image" />
                <label htmlFor="game-music">Music Source:</label>
                <Text field="music" id="game-music" />
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
  }
}

export default NewGameForm;