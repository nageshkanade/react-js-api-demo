import React, { useEffect, useState } from "react";
import style from'./About.module.scss';
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useForm } from 'react-hook-form';
import { TextField } from "@mui/material";
import { Margin } from "@mui/icons-material";
import { axiosFormDate } from "../../../component/Service/api";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];


const About = () => {
// const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };
/************************ validation from start **********************/

 const [formDate,setFormDate]=useState()


 useEffect(()=>{
  saveDate(formDate)
 })

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
 
const onSubmit=(data)=>{
  console.log(data)
  setFormDate(data)
}

const saveDate= async(data)=>{
         const response = await axiosFormDate(data)
        console.log(response)
}

    return (
      <>
        <Header />
        <div className={style.About}>

          
          {/* <h1>This is About Page</h1> */}

           {/* <Box sx={{ maxWidth: 1200, flexGrow: 1 }}> */}
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      {/* <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  maxWidth: 1200,
                  overflow: 'hidden',
                  width: '100%',                         
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}

      />
    </Box>  */}
    <Box sx={{margin:'30px 0px'}}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <TextField
      size="small"
      placeholder="First Name"
      type="text"
      error={!!errors?.name}
      helperText={errors?.name?.message}
      {... register('name', {required:{value:'true',message:'Please check you name'},maxLength :{value:10,message:'Check you faild name'}})}
      /><br></br>
      <button type="submit">Save</button>
    </form>
    </Box>
             </div>
        <Footer />
      </>
    );
  };
  
  export default About;