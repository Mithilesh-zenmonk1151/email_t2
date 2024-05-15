"use client"
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
type layoutProp={
    value?:string,
    width?:string,
    width2?:string,
    color?:string,
    customClass?:string,
    setValue?: (value: string) => void

}

export default function InputFieldsForLayouts(props:layoutProp) {
    // console.log("PROPS====",props)
    const {value,width,setValue,width2,color,customClass} =props;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (setValue) {
          setValue(event.target.value);
        }
      };
    //   console.log("COOOLLOOR",color);
  return (
   <Box sx={{
    padding:"0px",
    margin:"0px"
   }}>
    <TextField value={value} onChange={handleChange} // Makes the TextField smaller
 
 color="secondary"
     sx={{
        '& .MuiOutlinedInput-root': {
          padding: 0, 
          '& input': {
            padding: '4px 8px', 
            width: {width}, 
          },
          '& fieldset': {
            border: 'none', 
          },
          '&:hover fieldset': {
            border: 'none', 
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiInputBase-root': {
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none', 
          },
          '&:before': {
            borderBottom: 'none', 
          },
          '&:after': {
            borderBottom: 'none', 
          },
        },
        display: 'inline-flex',
        width:{width2},
        overflow:"auto",
        color:`${color}`
      }}  className={customClass} />

   </Box>
  )
}



