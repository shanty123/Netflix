import Welcome from "./Components/Welcome";
import React, { useState } from "react";
import "./App.css";
import makeStyles from "@mui/styles/makeStyles";
import netflixLog from "./assets/netflix.png";
import Button from "@mui/material/Button";
import Signin from "./Components/Signin";

const useStyles = makeStyles({
  buttonRoot: {
    margin: "10px",
    align: "center",
  },
});
function App() {
  const classes = useStyles();

  const [login, setLogin] = useState();

  return (
    <div className="netflix">
      <div style={{ flexDirection: "row" }}>
        {/* <div> */}
        <img src={netflixLog} className="netflixLogo" alt="logo" />
        {/* </div> */}
        <div style={{ float: "right", marginRight: "10px" }}>
          <Button
            variant="contained"
            style={{
              background: "red",
              border: "#fff",
              textTransform: "capitalize",
            }}
            onClick={() => {
              setLogin(1);
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
      {/* {console.log("login", login)}
      {login ? (
        <div>
          <Signin />
        </div>
      ) : (
        ""
      )} */}
      
      <Welcome  login={login}/>
      {/* <Welcome name="shanty" age="24"/>
     
     <Welcome name="shalu" age="26"/> */}
    </div>
  );
}

export default App;
