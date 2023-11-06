import React, { useEffect, useState } from 'react';
import { fa, faker } from '@faker-js/faker';

import { IoSettingsOutline } from 'react-icons/io5';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const Header = () => {
	const [windowType, setWindowType] = useState(localStorage.getItem('WindowType'))

	const changeWindowType = () => {
		if (windowType == 'white') {
			localStorage.setItem('WindowType', 'dark')
			setWindowType('dark')
		} else {
			localStorage.setItem('WindowType', 'white')
			setWindowType('white')
		}
	};

	return (
		<div className='Chat_Header'>
			<img src={faker.image.avatar()} alt='' />
			<div className='Chat_UserInfo'>
				<p className='UserName'>{faker.internet.userName()}</p>
				<p className='Abracadabra'>{faker.commerce.productName()}</p>
			</div>
			<div className='ChtaHeader_Icons'>
				<div>
					{windowType == 'dark' ? (
						<div onClick={changeWindowType}>
							<BsToggleOn size={28} />
						</div>
					) : (
						<div onClick={changeWindowType}>
							<BsToggleOff size={28} />
						</div>
					)}
				</div>
				<div>
					<IoSettingsOutline size={25} className='Chat_Header_SettingIcon' />
				</div>
			</div>
		</div>
	);
};

export default Header;
