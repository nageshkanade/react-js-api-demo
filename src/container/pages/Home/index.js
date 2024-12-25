import React, { useEffect, useState } from "react";
import style from "./Home.module.scss";
import "./Home.module.scss"
import Header from "../../../component/Header";
import Footer from "../../../component/Footer"
import { useNavigate } from "react-router-dom";
import { redirectpageDetails } from "../../../component/Helper";
import { axiosGetData,axiosUserData} from "../../../component/Service/api";

import { useContext } from "react";
import { CommonDate } from "../../../Context/GlobalContext";

const Home = () => {
  // This is state value
 const getuserName=useContext(CommonDate)
  const[name1,setname1]=useState()
  const[userDetails,setUserDetails]=useState([])
  const [clientData,setClientData]=useState([])
  const navigate =useNavigate()
 console.log('This is userDetails value:=>',userDetails)
 console.log(clientData,'****************************')
  // This is the Json Data

  const Student=[
    { 'student_Id':'91','name':'raj','Mob':7709458130,'Email':'raj121@gmail.com'},
    { 'student_Id':'92','name':'Dharm','Mob':7709458030,'Email':'raj121@gmail.com'},
    { 'student_Id':'93','name':'Gani','Mob':7709458030,'Email':'raj121@gmail.com'},
  //   {'name':'raj','Mob':7709458030,'Email':'raj121@gmail.com'},
  //   {'name':'raj','Mob':7709458030,'Email':'raj121@gmail.com'},
   ];

   const Details=[
    { 'student_Id':'91','name':'Bhairav','Mob':7709458130,'Email':'raj121@gmail.com'},
    { 'student_Id':'92','name':'Gorshnath','Mob':7709458030,'Email':'raj121@gmail.com'},
    { 'student_Id':'93','name':'Om','Mob':7709458030,'Email':'raj121@gmail.com'},
  //   {'name':'raj','Mob':7709458030,'Email':'raj121@gmail.com'},
  //   {'name':'raj','Mob':7709458030,'Email':'raj121@gmail.com'},
   ];

 // This is state console
  
//This is useEffect
 useEffect(()=>{
  console.log('Hello I am useEffect')
  getStudentDetails()
  setname1(Student)
 },[]);

 useEffect(()=>{

 },[]);

// This is condition methods

//Get Student Details Api
const getStudentDetails= async()=>{
 try{ //......................
// console.log(response)
  const response = await axiosGetData() // api calling.....
console.log('axios data is calling.@@@@@@@@@@@@@...',response)
//  const response =  345;
  if(response){
    // console.log(response);
    setUserDetails(response);

    getUserDetails() // <= This is seconde function callling api data  getUserDetails ..........
  }
  else{
    setUserDetails(Details);
  }
}
catch(error)
{
  console.log(error)      //..........
}
 
};
// seconde get user data structure
const getUserDetails= async ()=>{

  const responseUser = await axiosUserData();
  if(responseUser){
    console.log('This is Seconde UserDetails calling...',responseUser);
    setClientData(responseUser)
  }
  else{
    setClientData([])
  }
}
/*************************************/

  return (
    <>
      <div>
        <Header />
      </div>
      {/* inline +bootstrap */}
      <div className={`${style.Home}`} >  
      {/* bootstrap */}
        <h1 className="text-primary"> Welcome to {getuserName.userName}</h1> 
        { clientData?.length>0? clientData?.slice(0,3).map((item,index)=>{
          return(<div key={index}>
            <p>Name:<span>{item.name}</span></p>
            <p>Mobile:<span>{item.id}</span></p>
            <p>Email:<span>{item.address.city}</span></p>
            <button className="btn btn-primary" onClick={()=>{
              redirectpageDetails('Student',item.id,navigate,'/StudentData')
            }}>Button</button>
          </div>) 
        }):
        <h1>Recorde Not Founde</h1>
      }      
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
