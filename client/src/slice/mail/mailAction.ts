import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendMailType } from "./mailType";
import type { FieldValues } from "react-hook-form";
import mailSendService from "@/service/premaildesigned/sendmailservice";
// import registerService  from '@/services/authServices/signupservice';
export const sendMail = createAsyncThunk(
  sendMailType,
  async (
    mail: {
      email: string;
      month: string;
      date: string;
      year: string;
      firstname: string;
      lastname: string;
      country: string;
      startMonth: string;
      startDate: string;
      startYear: string;
      numberOfMonth: string;
      lowestCtc: string;
      highestCtc: string;
      acceptanceMonth: string;
      acceptanceDate: string;
      role: string;
      subject: string;
      companyName: string;
      heading: string;
      content: string;
      contentL1: string;
      contentL2: string;
      belowBody: string;
      listItem1: string;
      listItem2: string;
      listItem3: string;
      listItem4: string;
      listItem5: string;
      acceptanceYear: string;
      selecteddvalue: string;
    },
    { rejectWithValue }
  ) => {
    try {
      console.log("Slice wala user During signup", mail);
      console.log("Hello world");

      const response = await mailSendService({
        email:mail.email,
      month:mail.month,
      date:mail.date,
      year:mail.year,
      firstname:mail.firstname,
      lastname:mail.lastname,
      country:mail.country,
      startMonth:mail.startMonth,
      startDate:mail.startDate,
      startYear:mail.startYear,
      numberOfMonth:mail.numberOfMonth,
      lowestCtc:mail.lowestCtc,
      highestCtc:mail.highestCtc,
      acceptanceMonth:mail.acceptanceMonth,
      acceptanceDate:mail.acceptanceDate,
      role:mail.role,
      subject:mail.subject,
      companyName:mail.companyName,
      heading:mail.heading,
      content:mail.content,
      contentL1:mail.contentL1,
      contentL2:mail.contentL2,
      belowBody:mail.belowBody,
      listItem1:mail.listItem1,
      listItem2:mail.listItem2,
      listItem3:mail.listItem3,
      listItem4:mail.listItem4,
      listItem5:mail.listItem5,
      acceptanceYear:mail.acceptanceYear,
      selecteddvalue:mail.selecteddvalue
      });
      const data = response?.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
