import React from 'react';
import classes from './Item.module.scss';
import placeholder from '../../../assets/placeholder.png';

const Item = () => {
  return (
    <div className={classes.item}>
      <div className={classes.item__avatar}>
        <img src={placeholder} alt="avatar" />
      </div>
      <div className={classes.item__info}>
        <div className={classes.item__name}>Ivan Ivanov</div>
        <div className={classes.item__message}>Lorem ipsum dolor sit.</div>
      </div>
    </div>
  );
};

export default Item;
