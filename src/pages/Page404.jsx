import React, { useEffect, useState } from 'react';

const Page404 = () => {
	const [randomIcon, setRandomIcon] = useState(1);

	const IconArray = [
		'../..//Img/icon404/1.avif',
		'../..//Img/icon404/2.avif',
		'../..//Img/icon404/3.avif',
		'../..//Img/icon404/4.avif',
		'../..//Img/icon404/5.avif',
		'../..//Img/icon404/6.avif',
		'../..//Img/icon404/7.avif',
		'../..//Img/icon404/8.avif',
		'../..//Img/icon404/9.avif',
		'../..//Img/icon404/10.avif',
	];

	useEffect(() => {
		const ImgNum = Math.round(Math.random() * 10);
		setRandomIcon(IconArray[ImgNum]);
	}, []);

	return (
		<div className='Page404_Container'>
			<img src={randomIcon} alt='' height='100%' />
		</div>
	);
};

export default Page404;
