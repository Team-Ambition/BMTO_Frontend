import React from 'react';
import { faker } from '@faker-js/faker';

import { BsCheckCircleFill } from 'react-icons/bs';

const DirectChatList = () => {
	return (
		<div className='DirectChat_FriendList_Container'>
			<div className='DirectChat_FriendList'>
				<div className='DirectChat_Left'>
					<img
						src={faker.image.avatar()}
						alt=''
						className='Avatar_Img'
					/>
					<div className='FriendList_Info'>
						<p className='Info_Name'>Direct</p>
						<p className='Info_LastMessage'>Hey, Kris wayd?</p>
					</div>
				</div>

				<div className='DirectChat_Right'>
					<div className='MessageState'>
						<p className='MessageState_Time'>12:45 PM</p>
						<div className='MessageState_Time_Icon'>
							<BsCheckCircleFill size={20} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DirectChatList;
