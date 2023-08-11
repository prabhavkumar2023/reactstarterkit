// actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../apiurl/url';

// Example of using createAsyncThunk to define a thunk action creator
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (userdata) => {
    try {
       
        const response = await fetch(login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        });

        if (!response.ok) {
            if(response.status===401){
                throw new Error('Invalid Credentials')
            }else if(response.status===500){
                throw new Error('Server Error')
            }else if(response.status===400){
            //   get error message from server
                const data = await response.json();
                throw new Error(data.message)
            }else{
                throw new Error('Something went wrong')
            }

           
        }


        const data = await response.json();
        
        return data;
    } catch (error) {
        throw error;
    }
});