import React, {FC} from 'react';
import classes from './Input.module.scss';
import {ChatInput} from "../../UI/Input/Input";
import clip from '../../../assets/clipIcon.svg'

const Input: FC = () => {
    return <div className={classes.input}>
        <div className={classes.input__container}>
            <div className={classes.input__clip}>
                <img src={clip} alt="clip"/>
            </div>
            <ChatInput/>
        </div>
    </div>;
};

export default Input;
