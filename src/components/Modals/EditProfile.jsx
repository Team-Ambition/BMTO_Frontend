import React, { useEffect, useRef, useState } from 'react';
import './CSS/EditProfile.css';
import Input from './Components/input';
import { faker } from '@faker-js/faker';
import Button from './Components/Button';

const EditProfile = ({ getInfoState }) => {

	// IMG 저장
	const imgRef = useRef();
	const [imgFile, setImgFile] = useState(faker.image.avatar())
	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	// 모달창 밖에 클릭했을 떄
	const wrapperRef = useRef(null);

	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			getInfoState(false);
		}
	};

	const CloseModal = () => {
		getInfoState(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => handleClickOutside(event);

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getInfoState]);

	return (
		<div className='EditProfile_Container' ref={wrapperRef}>
			<p className='EditProfile_Title'>Edit Profile</p>

			<div className='EditProfile_Main'>
				<div className='EditProfile_ProfileImg'>
					<img src={imgFile} alt='' />
					<label for='Input_File'>Upload</label>
					<input id='Input_File' type='file' onChange={saveImgFile} ref={imgRef} />
				</div>

				<div className='EditProfile_Inputs'>
					<Input label={'Name'} />
					<Input label={'Abracadabra'} />
					<Input
						label={'Email'}
						readonly
						email={faker.internet.email()}
					/>
				</div>

				<div className='EditProfile_Buttons'>
					<Button text={'Delete Account'} type={'Red'} />
					<div className='EditProfile_Buttons'>
						<Button text={'Cancel'} onClickMethod={CloseModal} />
						<Button text={'Done'} type={'Blue'} ml={'36px'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
