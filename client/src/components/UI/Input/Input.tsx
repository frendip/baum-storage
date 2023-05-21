import React, {FC, HTMLAttributes} from 'react';
import clsx from 'clsx';
import classes from './Input.module.scss';

interface BaseInputProps extends HTMLAttributes<HTMLInputElement> {
}

export const BaseInput: FC<BaseInputProps> = ({className, ...props}) => {
    return <input className={clsx(classes.baseInput, className)} {...props} />;
};

export const SearchInput: FC<BaseInputProps> = ({className, ...props}) => {
    return <BaseInput className={classes.searchInput} placeholder={'Search'} {...props} />;
};

export const ChatInput: FC<BaseInputProps> = ({className, ...props}) => {
    return <BaseInput className={classes.chatInput} placeholder={'Type a message...'} {...props} />;
};