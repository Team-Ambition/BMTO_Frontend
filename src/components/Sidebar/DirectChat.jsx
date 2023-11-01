import React from 'react';
import { faker } from "@faker-js/faker";
import './CSS/DirectChat.css'

const DirectChat = () => {
  return (
    <div className='DirectChat_Container'>
      <div className='DirectChat_Header'>
        <img src={faker.image.avatar()} alt="" />
        <div className='DirectChat_UserInfo'>
          <p className='UserName'>{faker.internet.userName()}</p>
          <p className='Abracadabra'>{faker.commerce.productName()}</p>
        </div>
      </div>

      <div className='DirectChat_Searchbar'>

      </div>

      <div className='DirectChat_To_GroupChat'>

      </div>

      <div className='DirectChat_FriendList'>

      </div>
    </div>
  );
}

export default DirectChat;
