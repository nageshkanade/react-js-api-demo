import React, { useEffect, useState } from 'react'
import style from './StudentData.module.scss'
import {axiosDelectData, axiosGetSingleUserData} from '../Service/api'
import { axiosGetCommentData } from '../Service/api'
import {comments}  from '../Constant/payloadConstant';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// import { CommonDate } from '../../App';
// import { useContext } from 'react';

const StudentData = () => {
    const[data,setData]=useState();
    const [comment,setComment]=useState(false);
    const [secondC,setSecondC]=useState()
    const [deleteData,setDelectData]=useState(true)
    const [open, setOpen] = useState(false);// snackbar
    const [openDilalog, setOpenDialog] = useState(false); //modol


    const id =localStorage.getItem('Student');   // post 
    console.log(id,'This is id data')
    console.log('this is second data : ', secondC)
    useEffect(()=>{
        GetUserData(id)  // This is the GetUserData funcing calling........

    },[])

    useEffect(()=>{
      if(comment){
        const payload={
          'id':id,
          'comments':comments,
        }
      GetCommentsData(payload) // This is GetCommentData function calling..............
      }
  },[comment])
/**************************/
  function handleClick() {
    setOpen(true);
  }  

  const handleClose = () => {
    setOpen(false);    
  };

  // modol
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseOpen = ()=>{
    setOpenDialog(false)
  }
/****************************/
//   useEffect(()=>{
// GetDelectData()
//   },[])
    const GetUserData= async (payload)=>{
        const Userdata = await axiosGetSingleUserData(payload) // first function id calling .......
        console.log(Userdata,'This is Userdata')
        if(Userdata){
        setData(Userdata)
        setComment(true)

        }
    };

    const GetCommentsData= async(payload)=>{
      const comment = await axiosGetCommentData(payload)
      console.log(comment,'This is comment api *************')
      setSecondC(comment)
    }
    
    const GetDelectData= async(payload)=>{
      const deleteData = await axiosDelectData(payload)
      console.log(deleteData,'%%%%%%%%%%%%') // This is Delect ap
      // setSecondC(comment)
      setDelectData(deleteData);
      setOpen(true)
      console.log(deleteData,'message has be Deleted')
      // setDelectValue(deleteData)
    }
    
    // const getUserName = useContext(CommonDate)
  return (
    <div>
       { (deleteData===true?data?.map((item,index)=>{
        return(<div key={index}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.address.city}</p>
            {/* <h1>{getUserName.userName}</h1> */}
            <button className='btn btn-danger' onClick={()=>{
              GetDelectData()
            }}>Delect</button>
            {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
            <Button variant="contained" endIcon={<AddIcon />}  onClick={handleClickOpen}> Add </Button>
        </div>)
      }): <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="warning"
        variant="filled"
        sx={{ width: '100%'}}
      >
        This Record Has been Deleted successfully....!
      </Alert>
    </Snackbar>)} 
     <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDilalog}
  
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseOpen}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseOpen}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default StudentData;
