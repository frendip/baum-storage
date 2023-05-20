import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILogin } from '../../../types/types';
import classes from './formCard.module.scss';
import { CommonButton } from '../Button/Button';

interface LoginFormProps {
  messageError: string;
  onSubmitHandler: SubmitHandler<ILogin>;
}

const LoginForm: FC<LoginFormProps> = ({ messageError, onSubmitHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>({
    mode: 'onBlur',
  });

  return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
        {messageError && <div className={classes.form__error}>{messageError}</div>}
        <label className={classes.form__label}>
          <input
            className={classes.form__input}
            {...register('email', {
              required: 'Enter email.',
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: 'Enter correct email.',
              },
            })}
            placeholder={"Email"}

          />
          {errors?.email && <div className={classes.form__error}>{errors.email.message}</div>}
        </label>
        <label className={classes.form__label}>
          <input
            type={'password'}
            className={classes.form__input}
            {...register('password', {
              required: 'Enter password',
              minLength: {
                value: 6,
                message:
                  'Password must contain at least 6 characters.',
              },maxLength: {
                value: 20,
                message: "Password length cannot exceed 20 characters.",
              }
            })}
            placeholder={"Password"}

          />
          {errors?.password && <div className={classes.form__error}>{errors.password.message}</div>}
        </label>
        <div className={classes.form__submit}>
          <CommonButton size={'large'}>Войти!</CommonButton>
        </div>
      </form>
  );
};

export default LoginForm;
