import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import './CSS/Header.css';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle, AiFillInfoCircle } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';

const Header = ({ getInfoState, isDirectGroup }) => {
	const [isInfoModal, setIsInfoModal] = useState(true);

	const setInfoStateTrue = () => {
		setIsInfoModal(false);
		getInfoState(isInfoModal);
	};

	const setInfoStateFalse = () => {
		setIsInfoModal(true);
		getInfoState(isInfoModal);
	};

	return (
		<div
			className='Header_Container'
			id={
				isInfoModal || isDirectGroup === 'Direct'
					? 'StateInfoFalse'
					: 'StateInfoTrue'
			}
		>
			<div className='Header_Profile'>
				<img src={faker.image.avatar()} alt='' className='Header_Img' />
				<p className='Header_P'>{faker.internet.userName()}</p>
			</div>
			<div className='Header_Options'>
				<IoCallOutline size={30} className='Header_Icon' />
				<FiVideo size={30} className='Header_Icon' />
				{isDirectGroup === 'Direct' ? (
					''
				) : isInfoModal ? (
					<AiOutlineInfoCircle
						size={30}
						className='Header_Icon'
						onClick={setInfoStateTrue}
					/>
				) : (
					<AiFillInfoCircle
						size={30}
						className='Header_Icon'
						onClick={setInfoStateFalse}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
