import {createSlice} from '@reduxjs/toolkit'
import { sendMail } from './mailAction';

type initialStateProps = {
    isLoading: boolean;
    isLoggedIn: boolean
    content: {
      message: string;
      mail: {
        email:string,
        month:string,
      date:string,
      year:string,
      firstname:string,
      lastname:string,
      country:string,
      startMonth:string,
      startDate:string,
      startYear:string,
      numberOfMonth:string,
      lowestCtc:string,
      highestCtc:string,
      acceptanceMonth:string,
      acceptanceDate:string,
      role:string,
      subject:string,
      companyName:string,
      heading:string,
      content:string,
      contentL1:string,
      contentL2:string,
      belowBody:string,
      listItem1:string,
      listItem2:string,
      listItem3:string,
      listItem4:string,
      listItem5:string,
      acceptanceYear:string,
      selecteddvalue:string
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
      month: '',
      date: '',
      year: '',
      firstname: '',
      lastname: '',
      country: '',
      startMonth: '',
      startDate: '',
      startYear: '',
      numberOfMonth: '',
      lowestCtc: '',
      highestCtc: '',
      acceptanceMonth: '',
      acceptanceDate: '',
      role: '',
      subject: '',
      companyName: '',
      heading: '',
      content: '',
      contentL1: '',
      contentL2: '',
      belowBody: '',
      listItem1: '',
      listItem2: '',
      listItem3: '',
      listItem4: '',
      listItem5: '',
      acceptanceYear: '',
      selecteddvalue: ''
      },
    
    },
  };

export const sendMailSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(sendMail.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(sendMail.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(sendMail.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default sendMailSlice.reducer