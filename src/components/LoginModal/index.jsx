import React, { useEffect } from 'react';
import socials from "/social.png"
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import TextField from "../FormElements/TextField"
import PasswordField from "../FormElements/PasswordField"
import CheckBox from '../FormElements/CheckBox';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/auth.slice';

export default function LoginModal({openModal,handleClose}) {
    const {control, handleSubmit} = useForm({
      mode: "onChange"
    })

    const dispatch = useDispatch()



    const handleLogin = ({username, password})=> {
        axios.post("https://dummyjson.com/auth/login", {
            username, //"kminchelle"
            password  // "0lelplR"
        })
        .then((res)=> {
            console.log(res)
            dispatch(login(res.data))
            handleClose()
        })
        .catch((error)=> console.log(error))
    }

  return (
    <div className='relative'>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-6 items-center w-[450px] bg-white rounded-lg p-8 outline-none' >
            <h2 className='text-xl font-bold'>Войдите в свой аккаунт</h2>
            <img src={socials}/>

            <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(handleLogin)}>
                <TextField label="Login"  fullWidth control={control} name="username" rules = {{validate: value => value === 'kminchelle'|| 'Please enter "kminchelle" to enter' }} required/>
                <PasswordField rules = {{validate: value => value === '0lelplR'|| 'Please enter "0lelplR" to enter' }} label="Password" fullWidth control={control} name="password" required/>

                <div className='flex flex-col'>
                    <a href='#' className='text-[#8EE901]'>Вспомнить логин или пароль?</a>
                    <div>
                        <CheckBox control={control} name="password_save" label="Запомнить пароль для последующего входа" />
                    </div>
                </div>
                <div className='w-[200px] flex  flex-col self-center gap-4'>
                <button className="flex-1 px-6 py-2 text-white bg-gradient-to-b from-[#8EE902] to-[#4F9C2C] font-semibold text-base text-nowrap shadow-md shadow-[#8EE902] rounded-3xl">Войти</button>
                <button className='flex-1 px-6 py-2 bg-white font-semibold text-base text-nowrap shadow-xl rounded-3xl'>Регистрация</button>
                </div>
            </form>
            <span onClick={handleClose} className='absolute top-[-5px] right-[-10px] w-[24px] h-[24px] flex items-center justify-center bg-black text-white font-semibold rounded-full cursor-pointer'>x</span>
        </div>
      </Modal>
    </div>
  );
}