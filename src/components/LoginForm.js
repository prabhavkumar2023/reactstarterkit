import React from 'react';
import ForgotPasswordLink from './ForgotPasswordLink';
import { useForm } from "react-hook-form"
import InputField from './InputField';
import { useDispatch ,useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions';
import {  toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { saveJWT } from  '../utils/localstore'


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { email: "", password: "" },
        mode: 'onSubmit'
    });
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { isAuthenticated , loding , error , jwt } = useSelector(state => state.login)
    const onSubmit = (data) => {
      
        dispatch(fetchUserData(data))
        if(loding){
            toast.success('Loading...')
        }
      
        if(error&&error.length>0&&isAuthenticated===false ){
            toast.error(error)
        }
       
       
    //    use Toaster
      
    }
  

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputField name="Email" type="email" placeholder="Enter your email" register={register} errors={errors} inputkey="email" />
            <InputField name="password" type="password" placeholder="6+ Characters, 1 Capital letter" register={register} errors={errors} inputkey="password" />
            <div className="mb-5">
                {loding && <div className="text-center">Loading...</div>}
                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                >
                    Sign In 
                </button>
            </div>

            <ForgotPasswordLink />
        </form>
    )
};

export default LoginForm;