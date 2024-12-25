import React from "react";
import { createContext } from "react";
import { parsePath } from "react-router-dom";

 export const CommonDate = createContext()

 export const GlobalContext = ({children}) =>{

     const name ='DeveloperGuru';
      return(
     <CommonDate.Provider value={{userName:name}}>
        {children}
     </CommonDate.Provider>
      );
}

