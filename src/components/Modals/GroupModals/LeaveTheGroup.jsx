import React, { useEffect, useRef } from 'react';
import '../CSS/LeaveTheGroup.css';

import Button from '../Components/Button';

const LeaveTheGroup = ({ getLeaveTheGroupState }) => {
	// 모달창 밖에 클릭했을 떄
	const wrapperRef = useRef(null);

	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			getLeaveTheGroupState(false);
		}
	};

	const CloseModal = () => {
		getLeaveTheGroupState(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => handleClickOutside(event);

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getLeaveTheGroupState]);

	return (
		<div className='LeaveTheGroup_Container' ref={wrapperRef}>
			<div className='LeaveTheGroup_Main'>
				<p>Leave The Group Modal</p>

				<p>
					You will not receive messages from this group unless
					<br />
					someone else adds you back to this chat.
				</p>

				<div className='LeaveTheGroup_Check'>
					<input type='checkbox' />
					<p>Do you agree with all of the above?</p>
				</div>
			</div>

			<div className='LeaveTheGroup_Buttons'>
				<Button text={'Cancel'} type={'White'} />
				<Button text={'Leave The Group'} type={'Red'} />
			</div>
		</div>
	);
};

export default LeaveTheGroup;
