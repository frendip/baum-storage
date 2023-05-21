import React, { FC } from 'react';
import classes from './Header.module.scss';
import search from '../../../assets/searchIcon.svg';
import trash from '../../../assets/trashIcon.svg';

const Header: FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__info}>
          <div className={classes.header__avatar}></div>
          {/*<img src={''} alt="avatar" className={classes.header__avatar} />*/}
          <h2 className={classes.header__title}>Кабанчики</h2>
        </div>
        <div className={classes.options}>
          <div className={classes.options__item}>
            <img src={search} alt="search" />
          </div>
          <div className={classes.options__item}>
            <img src={trash} alt="trash" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
