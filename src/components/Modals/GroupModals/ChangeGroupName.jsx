import React, { useEffect, useRef } from 'react';
import '../CSS/ChangeGroupName.css';
import Input from '../Components/input';
import Button from '../Components/Button';

const ChangeGroupName = ({ getChangeNameState }) => {
	// 모달창 밖에 클릭했을 떄
	const wrapperRef = useRef(null);

	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			getChangeNameState(false);
		}
	};

	const CloseModal = () => {
		getChangeNameState(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => handleClickOutside(event);

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getChangeNameState]);

	return (
		<div className='ChangeGroupName_Container' ref={wrapperRef}>
			<div className='ChangeGroupName_Main'>
				<p>Change Group Image</p>

				<div>
					<Input />
				</div>
			</div>

			<div className='ChangeGroupName_Buttons'>
        <Button text={'Cancel'} type={'White'} onClickMethod={CloseModal}/>
        <Button text={'Done'} type={'Blue'}/>
      </div>
		</div>
	);
};

export default ChangeGroupName;
