import React, {FC} from 'react';
import classes from "./Message.module.scss"
import clsx from "clsx";

interface MessageProps {
    message: string;
    status: boolean;
    owner_id: string;
    owner_avatar: string;
    dateTime: string;
    isOwner: boolean
}

const Message: FC<MessageProps> = (props) => {

    return <div className={clsx(props.isOwner ? classes.myMessage : classes.message)}>
        <div className={classes.container}>
            {props.message}
        </div>
    </div>;
};

export default Message;