import React from 'react';

import './CSS/DirectChat.css';

import Header from './Components/Header';
import Searchbar from './Components/Searchbar';

const DirectChat = () => {
	return (
		<div className='DirectChat_Container'>
			<Header />

			<Searchbar/>

			<div className='DirectChat_To_GroupChat'></div>

			<div className='DirectChat_FriendList'></div>
		</div>
	);
};

export default DirectChat;
