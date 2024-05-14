import {createSlice} from '@reduxjs/toolkit'
import { sendCustomMail} from "./custommailAction"
type initialStateProps = {
    isLoading: boolean;
    isLoggedIn: boolean
    content: {
      message: string;
      mail: {
        email: string;
        subject: string;
        mailTemplate: string;
       
      };
    } 
    error: Object | null;
  };
  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    isLoggedIn: false,
    content: {
      message: '',
      mail: {
        email: '',
        subject:'',
        mailTemplate:''
       
      },
    
    },
  };

export const  sendCustomMailSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase( sendCustomMail.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase( sendCustomMail.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase( sendCustomMail.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default  sendCustomMailSlice.reducer