import React, {FC} from 'react';
import classes from './Field.module.scss';
import Message from '../../UI/Message/Message';

const Field: FC = () => {
    const chatList = [
        {
            message: "первое",
            status: true,
            owner_id: '',
            owner_avatar: '',
            dateTime: ''
        },
        {
            message: "второе",
            status: true,
            owner_id: '123',
            owner_avatar: '',
            dateTime: '',
        },
        {
            message: "тертье",
            status: true,
            owner_id: '',
            owner_avatar: '',
            dateTime: ''
        }]
    return (
        <div className={classes.field}>
            <div className={classes.field__container}>

                {chatList.map((item) => {
                        const isOwner = item.owner_id === "123"
                        {
                            return <Message message={item.message} status={item.status} owner_id={item.owner_id}
                                            owner_avatar={item.owner_avatar} dateTime={item.dateTime} isOwner={isOwner}/>
                        }


                    }
                )}
                {/*<Message message={chatList[0].message} status={true} owner_id={chatList[0].owner_id} owner_avatar={''}*/}
                {/*         dateTime={''}/>*/}
                {/*<Message message={chatList[1].message} status={true} owner_id={chatList[1].owner_id} owner_avatar={''}*/}
                {/*         dateTime={''}/>*/}
                {/*<Message message={chatList[2].message} status={true} owner_id={chatList[2].owner_id} owner_avatar={''}*/}
                {/*         dateTime={''}/>*/}

            </div>
        </div>
    );
};

export default Field;
