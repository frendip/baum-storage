import React from 'react';
import classes from './EmptyChat.module.scss'

const EmptyChat = () => {
    return <div className={classes.wrapper}>
        <div className={classes.container}>
            <span>Select a chat to start messaging</span>
        </div>
    </div>;
};

export default EmptyChat;