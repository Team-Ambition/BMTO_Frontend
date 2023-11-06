import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

import { IoSettingsOutline } from 'react-icons/io5';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import EditProfile from '../../Modals/EditProfile';

const Header = () => {
	const [windowType, setWindowType] = useState(false);
	
	const changeWindowType = () => {
			localStorage.setItem('WindowType', !windowType);
			setWindowType(!windowType);
		
	};

	const [isOpenSettingModal, setIstOpenSettingModal] = useState(false);

	const SettingModal = () => {
		setIstOpenSettingModal(!isOpenSettingModal);
	};

	const getInfoState = (State) => {
		setIstOpenSettingModal(State);
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
						<label class='ChatHeader_Switch_Button'>
							<input type='checkbox' onClick={changeWindowType} checked={windowType}/>
							<span class='slider round'></span>
						</label>
				</div>
				<div>
					<IoSettingsOutline
						size={25}
						className='Chat_Header_SettingIcon'
						onClick={SettingModal}
					/>
				</div>
			</div>
			<div
				className={
					isOpenSettingModal
						? 'ChtaHeader_SettingModal_Open'
						: 'ChtaHeader_SettingModal_Close'
				}
			></div>
			{isOpenSettingModal ? (
				<EditProfile getInfoState={getInfoState} />
			) : (
				''
			)}
		</div>
	);
};

export default Header;
