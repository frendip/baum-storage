import React, { FC } from 'react';
import classes from './Field.module.scss';
import Message from '../../UI/Message/Message';

const Field: FC = () => {
  return (
    <div className={classes.field}>
      <div className={classes.field__container}>
        <Message Message={''} status={true} owner_id={''} owner_avatar={''} dateTime={''} />
        <Message Message={''} status={true} owner_id={''} owner_avatar={''} dateTime={''} />
      </div>
    </div>
  );
};

export default Field;
