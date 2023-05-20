import React from 'react';
import classes from './ChatHeader.module.scss';

const ChatHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__info}>
          <img src={''} alt="avatar" className={classes.header__avatar} />
          <h2 className={classes.header__title}>Кабанчики</h2>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
