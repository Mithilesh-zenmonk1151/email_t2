"use client"
import { sendCustomMail } from '@/slice/custommail/custommailAction';
import { useAppDispatch } from '@/store/hooks';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyComponent: React.FC = () => {
  const [mailTemplate, setMailTemplate] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean']
  ];
  const dispatch= useAppDispatch();

  const modules = {
    toolbar: toolbarOptions,
  };
  const mail= {subject,email,mailTemplate};
  

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Value===", mailTemplate);
    console.log("MAILLL==========",mail);


    try {
      // Your logic here
      dispatch(sendCustomMail(mail));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{
      display:"flex",

      flexDirection:"column",
      padding:"50px",
      gap:"30px"

    }}>
      <Typography>Design Your Mail Template And Send</Typography>
      <TextField type='text' placeholder='enter email  subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
      <ReactQuill 
        theme="snow" 
        value={mailTemplate} 
        onChange={setMailTemplate} 
        modules={modules} 
          style={{
            width: '100%', // Set width to 100% of the container
            height: '500px', // Set a fixed height, adjust as needed
          }}
          
      />
      <TextField
        type='text' 
        placeholder='Enter email where you want to send email' 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}

      />

      <Button onClick={handleOnClick} sx={{
        bgcolor:"#007FFF",
        color:"white",
        height:"fit-content",
        width:"fit-content"
      }}>Submit</Button>
      </Box>
  );
}

export default MyComponent;
