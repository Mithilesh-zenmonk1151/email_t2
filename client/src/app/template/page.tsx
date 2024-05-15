"use client";
import InputFieldsForLayouts from "@/component/inputFieldForLayouts/InputFieldsForLayouts";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import style from "@/app/ui/tag.module.css";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { sendMail } from "@/slice/mail/mailAction";
import { Container, Link } from '@mui/material';

export default function EmailTemplate() {
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const handleChange = () => {
    // Perform any necessary logic
    // Then open the modal
    console.log("Change in FORM=========================")
    setShowModal(true);
  };
  const selecteddvalue = searchParams.get("selecteddvalue");
  const [companyName, setCompanyName] = useState("Company Name");
  const [date, setDate] = useState("12 March ,2024");
  const [firstname, setFirstName] = useState("Firstname");
  const [lastname, setLastname] = useState("lastname");
  const [country, setCountry] = useState("Country");
  const [heading, setHeading] = useState("Heading ");
  const [dear, setDear] = useState("dear");
  const [contentL1, setContentL1] = useState(
    `With reference to your application <br/> and the subsequent interview you had with us, <br/> we are pleased to offer you the position of in <br/> our organization at a stipend of INR 20,000 per month. Your internship is scheduled to start effective from , , for a period of months. On successful completion of the internship, your CTC will be between LPA – LPA on conversion to a full-time employee. You will also be eligible for standard benefits as per company policy. We believe that your skills, experience, and passion for administration and management skills will be a great asset to our team. Please confirm your acceptance of this offer by , . After the acceptance, please share the following documents within a week:`
  );
  const [contentL2, setContentL2] = useState(
    "Your appointment will be subject to background verification of your credentials and a formal letter of appointment will be issued upon your joining. We welcome you to the Zenmonk Team. If you have any questions, please feel free to reach out at any time."
  );
  const [listItem1, setListItem1] = useState("Item1");
  const [listItem2, setListItem2] = useState("Item2");
  const [listItem3, setListItem3] = useState("Item3");
  const [listItem4, setListItem4] = useState("Item4");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDipartment] = useState("Management Division,");
  const [companyFullName, setCompanyFullName] = useState(
    "Zenmonk Software and Services Pvt. Ltd."
  );
  const [companyEmail, setCompanyEmail] = useState("info@zenmonk.tech");
  const [corporateOfficeOne, setCorrporateOfficeOne] = useState(
    "Corporate Office India:"
  );
  const [corporateOfficeOneAddr, setCorrporateOfficeOneAddr] = useState(
    "Phase 8B, Industrial Area, Sahibzada Ajit Singh Nagar (Mohali), Punjab 160055"
  );
  const [corporateOfficeTwo, setCorrporateOfficeTwo] = useState(
    "Corporate Offices International:"
  );
  const [corporateOfficeTwoAddr, setCorrporateOfficeTwoAddr] = useState(
    "Spain (Barcelona), Spain (Cantabria), Brazil, Ecuador, Colombia, Perú"
  );
  const mail = {
    companyName,
    date,
    firstname,
    lastname,
    country,
    heading,
    dear,
    contentL1,
    contentL2,
    listItem1,
    listItem2,
    listItem3,
    listItem4,
    department,
    companyFullName,
    companyEmail,
    corporateOfficeOne,
    corporateOfficeOneAddr,
    corporateOfficeTwo,
    corporateOfficeTwoAddr,
    subject,
    email,
    selecteddvalue,
  };

  const handleOnClick = () => {
    try {
      console.log("MAIIILLLLLL=======", mail);
      dispatch(sendMail(mail));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Box sx={{
      display:'flex'

    }}>
    <Box sx={{display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      padding:"50px"
    }} onChange={handleChange}>
      <Box className={style.company} sx={{
        display:"flex",
        justifyContent:"space-around",
        paddingLeft:"30px",

      }}>
        <InputFieldsForLayouts
          value={companyName}
          color="red"
          setValue={setCompanyName}
          width=""
        />
        <Box>

        </Box>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"space-around"
      }}>
       <Box  sx={{
        paddingLeft:"30px"
       }}>
       <InputFieldsForLayouts value={date} setValue={setDate} width="" />
       </Box>
        <Box>

        </Box>
      </Box>
     <Box sx={{
      display:"flex",
      justifyContent:"space-around",
      paddingLeft:"100px"
     }}>
     <Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <InputFieldsForLayouts
            value={firstname}
            setValue={setFirstName}
            width="auto"
            width2="auto"
          />
          <InputFieldsForLayouts
            value={lastname}
            setValue={setLastname}
            width="auto"
          />
        </Box>
        <InputFieldsForLayouts value={country} setValue={setCountry} width="" />
      </Box>
      <Box>

      </Box>
     </Box>
     <Box sx={{
      display:"flex",
      position:"relative",
      left:"325px"
      
     }}>
        <InputFieldsForLayouts
          customClass={style.heading}
          value={heading}
          setValue={setHeading}
          width=""
        />
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"space-around",
        paddingLeft:"98px"
      }}>
      
      <Box
        sx={{
          display: "flex",
        }}
      >
        <InputFieldsForLayouts value={dear} setValue={setDear} width="" />
        <InputFieldsForLayouts
          value={firstname}
          setValue={setFirstName}
          width=""
        />
      </Box>
        <Box>

        </Box>
      </Box>
      <InputFieldsForLayouts width="" />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Textarea
  minRows={2}
  maxRows={50}
  value={contentL1}
  className={style.textArea}
  onChange={(e) => setContentL1(e.target.value)}
  sx={{
    border: "none",
    boxShadow: "none",
    width: "800px",
    "&:hover": {
      outline: "none",
      border: "none",
      boxShadow: "none",
    },
    "& fieldset": {
      outline: "none",
      border: "none",
      boxShadow: "none",
    },
    "&.Mui-focused": {
      outline: "none !important", 
      border: "none",
      boxShadow: "none",
    },
    "&:focus": {
      outline: "none !important", 
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    overflow: "hidden",
    resize: "none",
    height: "auto",
    "& textarea": {
      height: "auto",
      overflow: "hidden",
      outline: "none",
      border: "none",
      boxShadow: "none",
    },
  }}
/>

      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "62%",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"20px"
        }}
      >
        <ol>
          <li>
            <InputFieldsForLayouts
              value={listItem1}
              setValue={setListItem1}
              width=""
            />
          </li>
          <InputFieldsForLayouts
            value={listItem2}
            setValue={setListItem2}
            width=""
          />
          <InputFieldsForLayouts
            value={listItem3}
            setValue={setListItem3}
            width=""
          />
          <InputFieldsForLayouts
            value={listItem4}
            setValue={setListItem4}
            width=""
          />
        </ol>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop:"20px"
        }}
      >
        <Textarea
          minRows={2}
          maxRows={50}
          value={contentL2}
          onChange={(e) => setContentL2(e.target.value)}
          sx={{
            border: "none",
            boxShadow: "none",
            width: "800px",
            "&:hover": {
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
            "& fieldset": {
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
            "&.Mui-focused": {
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
            "&:focus": {
              outline: "none",
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            },
            overflow: "hidden",
            resize: "none",
            height: "auto",
            "& textarea": {
              height: "auto",
              overflow: "hidden",
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "84px",
          paddingTop: "40px",
        }}
      >
        <Box sx={{
          display:"flex",
          justifyContent:"space-around",
          paddingLeft:"15px"

        }}>
         <Box>
         <Typography>Sincerely</Typography>
       
        <Box>
        <InputFieldsForLayouts
          value={department}
          setValue={setDipartment}
          width=""
        />
        <InputFieldsForLayouts
          value={companyFullName}
          setValue={setCompanyFullName}
          width="400px"
        />
        <InputFieldsForLayouts
          value={companyEmail}
          setValue={setCompanyEmail}
          width=""
        />
        </Box>

         </Box>
         <Box>

         </Box>
         </Box>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"space-around",
        marginTop:"40px",
        marginRight:"40px"
      }}>
        <Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <InputFieldsForLayouts
            value={corporateOfficeOne}
            setValue={setCorrporateOfficeOne}
            width="200px"
          />
          <InputFieldsForLayouts
            value={corporateOfficeOneAddr}
            setValue={setCorrporateOfficeOneAddr}
            width="500px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <InputFieldsForLayouts
            value={corporateOfficeTwo}
            setValue={setCorrporateOfficeTwo}
            width="200px"
          />
          <InputFieldsForLayouts
            value={corporateOfficeTwoAddr}
            setValue={setCorrporateOfficeTwoAddr}
            width="500px"
          />
        </Box>
          <Box>

          </Box>
        </Box>
      </Box>

      {/* <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/> */}
      {/* <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/>
      <InputFieldsForLayouts value={firstname} setValue={setFirstName} width=''/> */}
     <Box sx={{
      display:"flex",
      justifyContent:"center",
      marginRight:"20px",
      marginTop:"20px"
     }}>
     <Box sx={{
      display:"flex",
      flexDirection:"column",
      width:"20%",
      gap:"60px",

     }}>
     <TextField
        value={subject}
        placeholder="enter Subject of Email"
        onChange={(e) => setSubject(e.target.value)}
        sx={{
          height:"20px",
          width:"300px"
        }}
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Where You want to send email"
        sx={{
          height:"20px",
          width:"300px"
        }}
      />
            <Button onClick={handleOnClick} sx={{
              bgcolor:"blue",
              color:"white",
              textTransform:"none"
            }}>Submit</Button>

     </Box>
     </Box>

    




    </Box>
     {showModal && <Container maxWidth="md" sx={{
      border:"1px solid black"
     }}>
     <Typography variant="h4" sx={{ color: 'rgb(236, 62, 9)' }}>
       {companyName}
     </Typography>
     <Typography variant="body1">
       {date}
     </Typography>
     <Typography variant="body1">
       {firstname} {lastname}
       <br />
       {country}
     </Typography>
     <Typography variant="h5" sx={{ fontWeight: 800 }}>
       {heading}
     </Typography>
     <Typography variant="body1">
       {dear} {firstname},
     </Typography>
     <Typography variant="body1">
       {contentL1}
     </Typography>
     <ol>
      <li>{listItem1}</li>
      <li>{listItem2}</li>
      <li>{listItem3}</li>
      <li>{listItem4}</li>
     </ol>
     <Typography variant="body1">
       {contentL2}
     </Typography>
     <Typography variant="h4">Sincerely,</Typography>
     <Typography variant="h5">
      {department}
     </Typography>
     <Typography variant="h5">
       {companyFullName}
     </Typography>
     <Link href="https://zenmonk.tech/" variant="body1">
       {companyEmail}
     </Link>
     <div>
       <Typography variant="h4">
        {corporateOfficeOne}
       </Typography>
       <Typography variant="body1">
        {corporateOfficeOneAddr}
       </Typography>
     </div>
     <div>
       <Typography variant="h4">
         {corporateOfficeTwo}
       </Typography>
       <Typography variant="body1">
         {corporateOfficeTwoAddr}
       </Typography>
     </div>
     <Typography variant="body1">
       If you have any further questions or need immediate assistance, please feel free to reach out to us at{' '}
       <Link href="https://zenmonk.tech/">zenmonk.tech</Link>. We are here to help!
     </Typography>
   </Container>}
   </Box>
    </>  
  );
}
