import React from 'react';
import classes from './Header.module.scss';
import placeholder from '../../../assets/placeholder.png';
import newChatIcon from '../../../assets/newChatIcon.svg';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__avatar}>
        <img src={placeholder} alt="avatar" />
      </div>
      <div className={classes.header__title}>Messenger</div>
      <div className={classes.header__createChat}>
        <img src={newChatIcon} alt="newChat" />
      </div>
    </div>
  );
};

export default Header;
