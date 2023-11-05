import React, { useState } from 'react';
import './CSS/Home.css';

import Header from '../components/Header/Header';
import Chat from '../components/Sidebar/Chat';
import Info from '../components/Info/Info';

const Home = () => {
	const [isInfoOpen, setIsInfoOpen] = useState(false);
	return (
		<div className='Home_Container'>
			<Chat />

			<div className='Home_Main'>
				<Header />
			</div>

			<div className='Home_Chat_Info'>
				<Info />
			</div>
		</div>
	);
};

export default Home;
