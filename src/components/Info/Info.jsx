import React, { useState } from 'react';
import '../Info/CSS/Info.css';
import { faker } from '@faker-js/faker';

import GroupMember from '../../Data/GroupMember';
import ChangeGroupImg from '../Modals/GroupModals/ChangeGroupImg';
import ChangeGroupName from '../Modals/GroupModals/ChangeGroupName';

const Info = () => {
	// 이미지 변경모달 State
	const [isOpenChageIMG, setOpenChangeIMG] = useState(false);
	const ChangeIMG = () => {
		setOpenChangeIMG(!isOpenChageIMG);
	};

	const getChangeImgState = (State) => {
		setOpenChangeIMG(State);
	};

	// 이름 변경모달 State
	const [isOpenChageName, setOpenChangeName] = useState(false);
	const ChangeName = () => {
		setOpenChangeName(!isOpenChageIMG);
	};

	const getChangeNameState = (State) => {
		setOpenChangeName(State);
	};

	return (
		<div className='Info_Container'>
			<div>
				<p className='Info_Title'>More Infomation</p>

				<div className='Info_Main'>
					{/* 이미지 */}
					<div className='Info_Group_IMG'>
						<img src={faker.image.avatar()} alt='' />
					</div>

					<div className='Info_GroupName'>
						<p>Group1</p>
					</div>

					{/* ChangeMdoals */}
					<div className='Info_Change_Group_IMG'>
						<p>Change Image</p>
						<button
							className='Info_Change_Hover'
							onClick={ChangeIMG}
						>
							Change
						</button>
					</div>

					<div className='Info_Change_Group_Name'>
						<p>Change Name</p>
						<button
							className='Info_Change_Hover'
							onClick={ChangeName}
						>
							Change
						</button>
					</div>

					{/* ADD Members */}
					<div>
						<div className='Info_Add_Member'>
							<p>Members</p>
							<button>Add</button>
						</div>
					</div>

					{/* Member List */}
					<div className='Info_Member_Container'>
						{GroupMember.map((item) => (
							<div className='Info_Member'>
								<img src={item.img} alt='' />
								<p>{item.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='Info_Divider'>
				<p>Leave The Group</p>
			</div>

			{/* 모달 백그라운드 */}
			<div
				className={
					isOpenChageIMG || isOpenChageName
						? 'Info_Modal_Background_Open'
						: 'Info_Modal_Background_Close'
				}
			></div>

			{/* 이미지 변경 모달 */}
			{isOpenChageIMG ? (
				<div>
					<ChangeGroupImg getChangeImgState={getChangeImgState} />
				</div>
			) : null}

			{/* 이름 변경 모달 */}
			{isOpenChageName ? (
				<div>
					<ChangeGroupName getChangeNameState={getChangeNameState}/>
				</div>
			) : null}
		</div>
	);
};

export default Info;
