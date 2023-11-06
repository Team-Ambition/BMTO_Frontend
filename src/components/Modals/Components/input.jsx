import React from 'react';
import './CSS/input.css';

const Input = ({ label, readonly, email }) => {
	return (
		<div className='Input_Container'>
			<label htmlFor=''>{label}</label>

			{readonly ? (
				<input type='text' disabled className='Input_Disable' value={email} />
			) : (
				<input type='text' />
			)}
		</div>
	);
};

export default Input;
