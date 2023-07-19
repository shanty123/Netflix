import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


function Signin() {
  return (
    <div>
      <React.Fragment>
        <Container
          maxWidth="sm"
          style={{
            background: "rgb(0 0 0 / 75%)",
            height: "70vh",
            marginTop: "20px",
            width: "100%",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
          <h4
            style={{
              color: "#fff",
              textAlign: "left",
              textTransform: "capitalize",
            }}
          >
            Sign In
          </h4>
          <div>
            <TextField
              style={{
                maxHeight: "8vh",
                width: "270px",
                // minWidth: "60%",
                background: "#c7c7cc",
              }}
              placeholder="Email or phone number"
              variant="outlined"
              // value={email}
              // onChange={(e) => {
              //   handleEmail(e);
              // }}
            />
          </div>
          <div>
            <TextField
              style={{
                maxHeight: "8vh",
                width: "270px",
                // minWidth: "50%",
                background: "#c7c7cc",
              }}
              placeholder="Password"
              variant="outlined"
              // value={email}
              // onChange={(e) => {
              //   handleEmail(e);
              // }}
            />
          </div>
          <Button
            variant="contained"
            style={{
              background: "red",
              textTransform: "capitalize",
              height: "auto",
              minHeight: "8vh",
              fontSize: "18px",
            }}
            // onClick={() => {
            //   setEmail("");
            // }}
          >
            Sign In
          </Button>
          <div style={{display:"flex",flexDirection:"row"}}>
          <div>
          <FormControlLabel
          value="end"
          style={{color:"#c7c7cc"}}
          control={<Checkbox  style={{color:"#c7c7cc"}}/>}
          label="Remember me"
          labelPlacement="end"
        />
        
        </div>
        <div style={{margin:"15px"}}>
          <p style={{fontSize:"15px",color:"#c7c7cc"}}>Need help</p>
        </div>
        </div>
        </Container>
      </React.Fragment>
    </div>
  );
}
export default Signin;
