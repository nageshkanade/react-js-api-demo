
import React from 'react'
import style from './ThirdParty.module.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


const ThirdParty = () => {
  return ( 
  <Box sx={{width:'100%'}}>
   <Stack spacing={2}>
      <Box sx={{bgcolor:'purple',padding:'30px',borderRadius:'10px'}}><Typography>sfjswfjworjwern wqhnr iwjer</Typography></Box>
      <Box  sx={{bgcolor:'green',padding:'30px',borderRadius:'10px'}}><Typography>sfjswfjworjwern wqhnr iwjer</Typography></Box>
      <Box  sx={{bgcolor:'black',padding:'30px',borderRadius:'10px'}}><Typography>sfjswfjworjwern wqhnr iwjer</Typography></Box>
   </Stack>
 </Box>
 )


}

export default ThirdParty
