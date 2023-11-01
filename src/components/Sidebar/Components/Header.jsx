import React from 'react';
import { faker } from '@faker-js/faker';

const Header = () => {
	return (
		<div className='Chat_Header'>
			<img src={faker.image.avatar()} alt='' />
			<div className='Chat_UserInfo'>
				<p className='UserName'>{faker.internet.userName()}</p>
				<p className='Abracadabra'>{faker.commerce.productName()}</p>
			</div>
		</div>
	);
};

export default Header;
