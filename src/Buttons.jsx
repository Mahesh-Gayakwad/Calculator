import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

class Buttons extends React.Component {
  constructor() {
    super();
    
    this.state = {number : " "};
    

    this.handleClick = this.handleClick.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(val){
    
    const lastChar = this.state.number.slice(-1);

  // Check if the last character is an operator and the new value is also an operator
  if ((["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(val))) {
    // Replace the last character with the new operator
    this.setState(prevState => ({
      number: prevState.number.slice(0, -1) + val
    }), () => {
      this.props.handleResult(this.state.number); // Pass the updated state value to the callback
    });
  } else {
    // Append the new value to the existing state value
    this.setState(prevState => ({
      number: prevState.number + val
    }), () => {
      this.props.handleResult(this.state.number); // Pass the updated state value to the callback
    });
  }
    

  }

  handleCalculation(){

    try {
      const result = eval(this.state.number);
      this.setState(
        { number: result },
        () => {
          this.props.handleResult(result.toString()); // Pass the updated state value to the callback
        }
      );
      console.log(result);
    } catch (error) {
      console.error("Error in calculation:", error);
      this.setState({ number: "Error" });
      this.props.handleResult("Error"); 
    }

  }

  handleClear(){
    this.setState({ number: "" }, () => {
      this.props.handleResult(this.state.number);
    });
  }

  render() {
    return (
      <Box >
      <Box sx = {{display : "flex" , justifyContent : "space-around" , mt : "40px"}}>
        <Box onClick={() => this.handleClick("1")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>1</Typography>
        </Box>
        <Box onClick={() => this.handleClick("2")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>2</Typography>
        </Box>
        <Box onClick={() => this.handleClick("3")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>3</Typography>
        </Box>
        <Box onClick={() => this.handleClick("+")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>+</Typography>
        </Box>
      </Box>


      <Box  sx = {{display : "flex" , justifyContent : "space-around" , mt : "40px"}}>
        <Box onClick={() => this.handleClick("4")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>4</Typography>
        </Box>
        <Box onClick={() => this.handleClick("5")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>5</Typography>
        </Box>
        <Box onClick={() => this.handleClick("6")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>6</Typography>
        </Box>
        <Box onClick={() => this.handleClick("-")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>-</Typography>
        </Box>
      </Box>


      <Box sx = {{display : "flex" , justifyContent : "space-around" , mt : "40px"}}>
        <Box onClick={() => this.handleClick("7")}  sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>7</Typography>
        </Box>
        <Box onClick={() => this.handleClick("8")}  sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>8</Typography>
        </Box>
        <Box onClick={() => this.handleClick("9")}  sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>9</Typography>
        </Box>
        <Box onClick={() => this.handleClick("*")}  sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>x</Typography>
        </Box>
      </Box>


      <Box  sx = {{display : "flex" , justifyContent : "space-around" , mt : "40px"}}>
        <Box  onClick={this.handleClear} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>AC</Typography>
        </Box>
        <Box onClick={() => this.handleClick("0")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>0</Typography>
        </Box>
        <Box onClick={() => this.handleClick("/")} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>/</Typography>
        </Box>
        <Box onClick={this.handleCalculation} sx={{backgroundColor : "black" , color : "white" , width : "20px" , p:"15px"}}>
          <Typography>=</Typography>
        </Box>
      </Box>

    </Box>

    );
  }
}

export default Buttons;
