import React, { useState } from 'react';
import '../Info/CSS/Info.css';
import { faker } from '@faker-js/faker';

import GroupMember from '../../Data/GroupMember';
import ChangeGroupImg from '../Modals/GroupModals/ChangeGroupImg';

const Info = () => {
	const [isOpenChageIMG, setOpenChangeIMG] = useState(false);
	const ChangeIMG = () => {
		setOpenChangeIMG(!isOpenChageIMG);
	};

	const getChangeImgState = (State) => {
		setOpenChangeIMG(State);
	};

	return (
		<div className='Info_Container'>
			<div>
				<p className='Info_Title'>More Infomation</p>

				<div className='Info_Main'>
					<div className='Info_Group_IMG'>
						<img src={faker.image.avatar()} alt='' />
					</div>

					<div className='Info_GroupName'>
						<p>Group1</p>
					</div>

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
						<button className='Info_Change_Hover'>Change</button>
					</div>

					<div>
						<div className='Info_Add_Member'>
							<p>Members</p>
							<button>Add</button>
						</div>
					</div>

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
					isOpenChageIMG
						? 'Info_Modal_Background_Open'
						: 'Info_Modal_Background_Close'
				}
			></div>

			{isOpenChageIMG ? (
				<div>
					<ChangeGroupImg getChangeImgState={getChangeImgState} />
				</div>
			) : null}
		</div>
	);
};

export default Info;
