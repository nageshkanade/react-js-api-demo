import logo from './logo.svg';
import './App.css';
import Routers from './container/pages/Routers';
import { GlobalContext } from './Context/GlobalContext.js';
// import { createContext} from 'react';
// import { parsePath } from 'react-router-dom';
// import Home from './container/pages/Home';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

//  export const CommonDate = createContext();
const App=()=> {
  // const {count,setCount}=useContext(CommonDate)
  // const name ='Developer Guru';
  return (
      // <CommonDate.Provider value={{ userName:name }}>
      <GlobalContext>
    <div className="App">
      
      {/* <Home /> */}
      <Routers/>
    </div>
      </GlobalContext>
    // {/* </CommonDate.Provider> */}
  );
}

export default App;
