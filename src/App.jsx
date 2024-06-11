import React from "react";
import Box from '@mui/material/Box';
import Buttons from "./Buttons";
import Screen from "./Screen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {result : ""};
    this.setResult = this.setResult.bind(this);
  }

  setResult(result){

    this.setState({ result });

  }

  render() {
    return (

      <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center"  }}>
        <Box sx = {{height : "450px" , width : "350px" , backgroundColor : "#F1F1F1"}}>

        <Screen  ans = {this.state.result} />
        <Buttons handleResult = {this.setResult} />
        </Box>
      </Box>
    );
  }
}

export default App;
