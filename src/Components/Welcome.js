import React, { useState } from "react";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Signin from "./Signin";

const useStyles = makeStyles({
  buttonRoot: {
    margin: "10px",
    align: "center",
  },
});
function Welcome(props) {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [loginned, setLoginned] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setLoginned(props.login);
  }, [props]);
  return (
    <>
     {loginned === 1 ? 
     <div  style={{zIndex: "1", position:"absolute", top: "0",left:"40%"}}>
      <Signin /> 
     </div>: ""}
      <div>
        {/* <Button variant="contained" onClick={alertPop}>
        start {props.name}
      </Button> */}
        <h3 style={{ color: "#fff", textAlign: "center" }}>
          Unlimited films,
          <br />
          TV programmes and more.
        </h3>
      </div>
      <div>
        <body style={{ color: "#fff", textAlign: "center" }}>
          Watch anywhere.Cancel at any time
        </body>
      </div>
      <div>
        <body style={{ color: "#fff", textAlign: "center", fontSize: "0.5em" }}>
          {" "}
          Ready to watch? Enter your email to create or restart your membership.
        </body>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "35ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ color: "#fff", textAlign: "center" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TextField
              style={{
                background: "#fff",
                maxHeight: "8vh",
                width: "auto",
                minWidth: "40%",
              }}
              placeholder="Email address"
              variant="outlined"
              value={email}
              onChange={(e) => {
                handleEmail(e);
              }}
            />

            <Button
              variant="contained"
              style={{
                background: "red",
                textTransform: "capitalize",
                height: "auto",
                minHeight: "8vh",
                fontSize: "18px",
              }}
              onClick={() => {
                setEmail("");
              }}
            >
              Get Started
            </Button>
          </div>
        </Box>
      </div>
     
    </>
  );
}
export default Welcome;
