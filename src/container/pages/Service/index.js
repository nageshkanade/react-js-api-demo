import React, { useEffect, useState } from "react";
import style from'./Service.module.scss';
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';
import Box from '@mui/material/Box';
import { Grid, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ThirdParty from "../../../component/ThirdParty";
import { Directions, Height } from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


 
const Value=[
  {
    'Name':'raju Bhai',
    'Email':'raju@gmail.com',
    'Mobile':'111111111111',
  },
  {
    'Name':'Dharm Daring',
    'Email':'Dharm@gmail.com',
    'Mobile':'222222222222',
  },
  {
    'Name':'Bhairav sattal',
    'Email':'Bhairav@gmail.com',
    'Mobile':'33333333333',
  },

 ];

const Service = () => {

  useEffect(()=>{
    console.log(Value)
  },[])
 
  
    return (
      <>
        <Header />
        <Box className={style.Service}>
         <Box component="section" sx={{ p: 2,background:'red' }}  className={style.Box1}> 

        <Typography variant="h4" align="center" >
      React Js Introduction
       </Typography>
    <Typography noWrap='true'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae exercitationem eaque ratione fuga, perspiciatis, pariatur quo minus ex eius, dolorem quis voluptatibus rerum minima facilis nemo. Asperiores, esse quam?

    </Typography>
    <Typography noWrap='true'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae exercitationem eaque ratione fuga, perspiciatis, pariatur quo minus ex eius, dolorem quis voluptatibus rerum minima facilis nemo. Asperiores, esse quam?

    </Typography> 
    <Stack spacing={2} direction={'row'}>
      <Box sx={{bgcolor:'green',padding:2,}}>
        <Typography style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, enim.</Typography>
      </Box>
      <Box sx={{bgcolor:'yellow',padding:2}}>
        <Typography style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, enim.</Typography>
      </Box>
      <Box sx={{bgcolor:'blue',padding:2}}>
        <Typography style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, enim.</Typography>
      </Box>
    </Stack>
    </Box>
    <Box component="section" sx={{ p: 2,background:'green'}} className={style.Box2}>
      <Typography variant="h3" align="center" className="text-white" >
      This is second Box
      </Typography>
      <Divider variant="middle" sx={{border:'1px solid black',margin:'15px'}}></Divider>
      <Typography >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae exercitationem eaque ratione fuga, perspiciatis, pariatur quo minus ex eius, dolorem quis voluptatibus rerum minima facilis nemo. Asperiores, esse quam?

    </Typography>
    </Box>
        </Box>
        <Box className={style.main}>
          <Box className={style.Box3}>
          {/* This is card section  */}
          <Box className={style.Box31} sx={{padding:"5px",gap:2}}>
        {Value.map((item,index)=>{
       return  <Card sx={{bgcolor:'orange',minWidth:'250px',maxWidth:'350px',height:'200px'}} key={index}>
           <CardContent>
           <Grid container spacing={2}>
             <Grid xs={3} sx={{align:'left'}}>
               <Typography>Name :</Typography>
               <Typography>Email :</Typography>
               <Typography>Mobile:</Typography>
               
             </Grid>
             <Grid xs={9} sx={{align:'right'}}>
             <Typography>{item.Name}</Typography>
             <Typography>{item.Email}</Typography>
             <Typography>{item.Mobile}</Typography>
             </Grid>
           </Grid>
           </CardContent>
         </Card>
        })

        }

          </Box>
          </Box>
          <Box className={style.Box4}>
            <ThirdParty />
          </Box>
        
        </Box>
        {/* <Footer /> */}
      </>
    );
  };
  
  export default Service;