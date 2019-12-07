import React from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import Card from './Card';

export default function List(props) {
	return (
		<section className="List">
			<header className='List-header'>

			<div class="List-cards">
			</div>
			<button type="button" class="List-add-button">
      	+ Add Random Card
      </button>
			</header>
		</section>
	)
}

export default List;