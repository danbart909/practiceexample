import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import STORE from './STORE';

function Card(props) {
	return(
		<div classname="Card">
  		<button type="button">delete</button>
  		<h3>{props.title}</h3>
  		<p>{props.content}</p>
		</div>
	)
}

export default Card;