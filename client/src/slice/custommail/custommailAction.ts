import { createAsyncThunk } from '@reduxjs/toolkit'
import { customMailSendType } from './custommailType';
import createDesignMailService from '@/service/createDesignMail/userdesignservice';
export const sendCustomMail = createAsyncThunk(customMailSendType, async(mail:{email:string,subject:string,mailTemplate :string}, {rejectWithValue}) => {
    try {
        console.log("Slice custom mail ",mail);
        console.log("Hello world");
      
        const response = await createDesignMailService({email:mail.email,subject:mail.subject,mailTemplate:mail.mailTemplate})
        const data = response?.data;
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})
