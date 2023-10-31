import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CSS/Register.css';

const Register = () => {
	const history = useNavigate();
	return (
		<div className='Register_Container'>
			<div className='Register_ProfileImg'>
				<img src='../../Img/LoginProfile.svg' alt='' />
			</div>

			<div className='Register_Form'>
				<div className='Register_Title'>User Sign Up!</div>
				<input type='text' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<input type='text' placeholder='Name' />
				<button>Sign Up</button>
			</div>

			<div className='Register_Divider'>
				<div className='Register_Divider_InnerText'>OR</div>
			</div>

			<div className='Register_Auth_Form'>
				<img
					src='../../Img/GitHubAuthIcon.svg'
					alt=''
					className='Register_Auth_Left'
				/>
				<img
					src='../../Img/GoogleAuthIcon.svg'
					alt=''
					className='Register_Auth_Right'
				/>
			</div>

			<div
				className='Register_To_Register'
				onClick={() => {
					history('/auth/login');
				}}
			>
				Already have an account?
			</div>
		</div>
	);
};

export default Register;
