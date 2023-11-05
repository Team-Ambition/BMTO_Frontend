import React from 'react';
import '../Info/CSS/Info.css';
import { faker } from '@faker-js/faker';

import GroupMember from '../../Data/GroupMember';

const Info = () => {
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
						<button>Change</button>
					</div>

					<div className='Info_Change_Group_Name'>
						<p>Change Name</p>
						<button>Change</button>
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
		</div>
	);
};

export default Info;
