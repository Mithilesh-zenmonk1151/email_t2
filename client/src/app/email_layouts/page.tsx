"use client"
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


export default function EmailLayoutPage() {
    const router= useRouter();
    const mainInfo={layoutInfo:[
        {
            layoutName:"first",
            selecteddvalue:"1",
            imageSrc:"/images/templateOne.png"
        },
        {
            layoutName:"second",
            selecteddvalue:"2",
            imageSrc:"/images/templateTwo.png"
        },
        {
            layoutName:"third",
            selecteddvalue:"3",
            imageSrc:"/images/templateThree.png"
        },
        {
            layoutName:"fourth",
            selecteddvalue:"4",
            imageSrc:"/images/templateFour.png"
        },
    ],
};

    
const layOut= mainInfo.layoutInfo;
console.log("Layout", layOut);
const handleOnTestClick = (selecteddvalue: string): void => {
    console.log("selecteddvalue==============================",selecteddvalue);
    // router.push("/add-question")
    console.log("BUTTOONNsdfgd");
    router.push(`/sendmail?selecteddvalue=${selecteddvalue}`);

  };
  return (
    <div className='flex flex-col gap-[20px] p-[30px]'>
        <Typography variant='h5' sx={{

        }}>Email Layouts</Typography>
        <Box sx={{
            display:"flex",
            width:"100%",
            justifyContent:"space-around"

        }}>
         {layOut?.map(
        (lay: {
            selecteddvalue:string,
            layoutName:string,
            imageSrc:string

        }) => (
          <Box key={lay.selecteddvalue}>
            <Image src={lay.imageSrc} alt='layoutOutsImage'  width={200} height={200}/>
            <Button onClick={() => handleOnTestClick(lay?.selecteddvalue)}>Use Layout</Button>
          
          </Box>
        )
      )}
      </Box>

     
    </div>
  )
}
