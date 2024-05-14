"use client"
import { sendCustomMailSlice } from "@/slice/custommail/customMailSlice"
import { sendMailSlice } from "@/slice/mail/mailSlice"
import { combineReducers } from "@reduxjs/toolkit"


const rootReducer = combineReducers({
    
     mail:sendCustomMailSlice,
     sendmail:sendMailSlice
   
}
)
export default rootReducer

