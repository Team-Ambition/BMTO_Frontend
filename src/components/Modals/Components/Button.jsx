import React from 'react';
import './CSS/Button.css';

const Button = ({ type, text, onClickMethod}) => {
	return (
		<div>
			{type === 'Red' ? (
				<button className='RedButton' onClick={onClickMethod}>{text}</button>
			) : type === 'Blue' ? (
				<button className='BuleButton' onClick={onClickMethod}>{text}</button>
			) : (
				<button className='WhiteButton' onClick={onClickMethod}>{text}</button>
			)}
		</div>
	);
};

export default Button;
