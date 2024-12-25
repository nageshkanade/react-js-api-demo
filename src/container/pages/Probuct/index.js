import React from "react";
import style from "./Probuct.module.scss";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
// import { Box } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Product = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header />
      <div className={style.Product}>
        {/* <h1>This is Product Page</h1> */}
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
            width: "100%",
            //  bgcolor:'red',
          }}
          noValidate
          autoComplete="off"
        >
          <label>Name:</label>
          <TextField size="small" required label="Name"  variant='filled' sx={{ margin: "0px 10px" }} />
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
            width: "100%",
            //  bgcolor:'red',
          }}
          noValidate
          autoComplete="off"
        >
          <label>Email:</label>
          <TextField size="small"   disabled label="Disabled"  sx={{ margin: "0px 10px" }} />
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
            width: "100%",
            //  bgcolor:'red',
          }}
          noValidate
          autoComplete="off"
        >
          <label>Mobile</label>
          <TextField size="small"
                        id="standard-number"
                        label="Number"
                        type="number"
                        variant="standard"
                        InputProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
          sx={{ margin: "0px 10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
            width: "100%",
            // bgcolor:'red',
            marginLeft: "-20px",
          }}
        >
          <label>Gender</label>
          <RadioGroup row sx={{ margin: " 0px 10px" }}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
            width: "100%",
            // bgcolor:'red',
            marginLeft: "10px",
          }}
        >
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ width: "240px", margin: "20px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
            width: "100%",
            // bgcolor:'red',
            marginLeft: "10px",
          }}>
          <label>Address</label>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Nagesh Kanade"
          // variant='standard'
          variant='filled'
        />
        </Box>
        <Box>
        < Checkbox /> Term and Conditional
        </Box>
        <Box>
        <Button variant="contained">Contained</Button>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Product;
