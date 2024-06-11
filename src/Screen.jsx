import React from "react"
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";



class Screen extends React.Component{

    constructor(){
        super();
      }


      render(){
        
       return <>
       
            <Box sx={{display : "flex" , justifyContent : "center" , mt : "20px"}}>
                <Box sx = {{height : "40px" , width : "300px" , backgroundColor : "#9DB2BF" , borderRadius : "10px" , textAlign : "right" }}>
                  <Typography sx={{fontSize : "1.5rem" , pr : "10px" , p : "auto"}}>{this.props.ans}</Typography>
                </Box>
            </Box>

       </>


      }


}

export default Screen;
