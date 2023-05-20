import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import Loading from '../../components/Loading/Loading';
import RegistrationFrom from '../../components/UI/Form/RegistrationFrom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { IRegistration } from '../../types/types';
import { fetchRegistration } from '../../store/slices/authSlice';
import classes from './Auth.module.scss';
import logo from '../../assets/logo.png';

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [messageError, setMessageError] = useState<string>('');

  const onSubmitHandler: SubmitHandler<IRegistration> = async (data) => {
    const { username, password, email } = data;
    const val = await dispatch(fetchRegistration({ username, password, email }));
    if (val.type.endsWith('fulfilled')) {
      const token = val.payload;
      window.localStorage.setItem('token', token as string);
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
          <RegistrationFrom messageError={messageError} onSubmitHandler={onSubmitHandler} />
        </div>
      )}
    </div>
  );
};

export default Registration;
