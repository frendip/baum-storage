import { FC, HTMLAttributes } from 'react';
import classes from './Button.module.scss';
import clsx from 'clsx';

interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const BaseButton: FC<BaseButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(classes.baseBtn, className)} {...props}>
      {children}
    </button>
  );
};

export const AuthButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton className={clsx(classes.authBtn)} {...props}>
      {children}
    </BaseButton>
  );
};
