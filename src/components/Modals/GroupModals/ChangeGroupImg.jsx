import React, { useEffect, useRef, useState } from 'react';
import '../CSS/ChangeGroupImg.css';
import { faker } from '@faker-js/faker';
import Button from '../Components/Button';

const ChangeGroupImg = ({ getChangeImgState }) => {
	// IMG 저장
	const imgRef = useRef();
	const [imgFile, setImgFile] = useState(faker.image.avatar());
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
			getChangeImgState(false);
		}
	};

	const CloseModal = () => {
		getChangeImgState(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => handleClickOutside(event);

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getChangeImgState]);

	return (
		<div className='ChangeGroupImg_Container' ref={wrapperRef}>
			<div className='ChangeGroupImg_Main'>
				<p>Change Group Image</p>

				<div className='ChangeGroupImg_ProfileImg'>
					<img src={imgFile} alt='' />
					<label for='Input_File'>Upload</label>
					<input
						id='Input_File'
						type='file'
						onChange={saveImgFile}
						ref={imgRef}
					/>
				</div>
			</div>

			<div className='ChangeGroupImg_Buttons'>
				<Button type={'White'} text={'Cancel'} onClickMethod={CloseModal}/>
				<Button type={'Blue'} text={'Done'} />
			</div>
		</div>
	);
};

export default ChangeGroupImg;
