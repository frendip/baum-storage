import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import LoginForm from '../../components/UI/Form/LoginForm';
import Loading from '../../components/Loading/Loading';
import { fetchLogin } from '../../store/slices/authSlice';
import { SubmitHandler } from 'react-hook-form';
import { ILogin } from '../../types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import classes from './Auth.module.scss';
import logo from '../../assets/logo.png';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [messageError, setMessageError] = useState<string>('');
  const onSubmitHandler: SubmitHandler<ILogin> = async (data) => {
    const { email, password } = data;

    const val = await dispatch(fetchLogin({ email, password }));
    if (val.type.endsWith('fulfilled')) {
      navigate('/');
    } else {
      setMessageError(val.payload as string);
    }
  };

  const status = useAppSelector((state) => state.auth.status);
  return (
    <div className={classes.auth}>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className={classes.content}>
          <div className={classes.content__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.content__title}>Sign in to Get Started</div>
          <LoginForm messageError={messageError} onSubmitHandler={onSubmitHandler} />
        </div>
      )}
    </div>
  );
};

export default Login;
