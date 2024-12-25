// 1.axiosGetData2
// 2.axiosPostData
// 3.axiosPutdat         
// 4.axiosDeletedate

import axios from "axios";



export const axiosGetData= async()=>{
                                                 
    console.log('Funtion is calling.....!');
    try{
    const response=  await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(response.data,'This is axios data from api');
    return response.data;
    }
    catch(error)
    {
        console.log(error)
    }
    
    // const response = await axiosGetData();
    //  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json)=>{return json})    
    //   console.log(response,'this is api data')   

//     if(response){

//         return response;
//     }
};

// Second api data structure
export const axiosUserData= async()=>{
                                                 
    console.log('Funtion is calling.....!');
    try{
    const response=  await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(response.data,'This is axios data from api');
    return response.data;

    }
    catch(error)
    {
        console.log(error)
    }
    
};
export const axiosGetSingleUserData= async(id)=>{
                                                 
    console.log('Funtion is calling.....!'); // This is id function 
    try{
    const response=  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(response.data,'This is axios data from api');
    return [response.data];

    }
    catch(error)
    {
        console.log(error)
    }
    
};

export const axiosGetCommentData= async (payload)=>{ // This is Third api 
try{
    console.log(payload,'#############')
    console.log('this is comment value : ', payload.comments)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${payload.id}/${payload.comments}`)

    
    return response.data
}
catch(error)
{
    console.log(error);
}
}

export const axiosDelectData= async (payload)=>{ // This is Third api 
    try{
        console.log(payload,'#############')
        // console.log('this is comment value : ', payload.comments)
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload}`)
    console.log(response,'Recored Has Deen Deleted *********')
        
        return response
    }
    catch(error)
    {
        console.log(error);
    }
    }


// Second Api Data
// export const axiosPostData=()=>{

//     const response = axiosPostData.get('');

//     if(response){                                   // post frontend data

//         return response;
//     }

// };


export const  axiosFormDate = async (data)=>{
    const response = axios.post ('https://jsonplaceholder.typicode.com/posts',data) // form data 

    return response 
}