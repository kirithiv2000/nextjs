import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { green,red } from '@mui/material/colors';
import { FilledInput } from '@mui/material';
export default (props)=>{
  
  const buttonSx = {
    ...(props.data.fetching.success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
    ...(props.data.fetching.failure && {
      bgcolor: red[500],
      '&:hover': {
        bgcolor: red[700],
      },
    }),
  };
    return <>
        <Typography variant="h1" component="h1" align="left">
                Help your child learn code
            </Typography>
            
            <Typography variant="h5" component="h5" align="left">
                Register and our team will reach out to you to connect you with a teacher
            </Typography>
          <TextField style={{marginTop:40}} fullWidth 
          value={props.data.Name.value} 
          helperText={props.data.Name.errorMsg}
          error={props.data.Name.error}
          onChange={(e)=>{props.onChange(e,"Name")}} label="Name" id="Name" variant="filled"/>
          <TextField style={{marginTop:40}} fullWidth value={props.data.Email.value} onChange={(e)=>{props.onChange(e,"Email")}} label="Email" id="Email" 
          helperText={props.data.Email.errorMsg}
          variant="filled"
          // helperText="Incorrect email"
          error={props.data.Email.error}
          />
          <TextField style={{marginTop:40}} fullWidth value={props.data.age.value} onChange={(e)=>{props.onChange(e,"age")}} label="Child age" id="age" 
          variant="filled"
          helperText={props.data.age.errorMsg}
          // helperText="only children between age 12 and 15 are allowed to register"
          error={props.data.age.error}/>
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
           
          <Box sx={{ 
                marginTop:"40px",
                background: "#FFFFFF",
                border: "1px solid #000000",
                boxSizing: "border-box",
                // height: "68px",
                position: 'relative' 
              }}>
               
              <Button fullWidth onClick={()=>props.onSubmit()}
                  key={"submit reqeust"}
                  disabled={props.data.fetching.value}
                  sx={{ 
                    ...buttonSx,

                    my: 2,
                    fontFamily: 'Work Sans',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: "20px",
                    lineHeight: "23px",
                    textAlign: "center",
                    margin:"0 0px", 
                    color: props.data.fetching.success?"#fff":props.data.fetching.failure?"#fff":"#000000", display: "block" }}
                >
                  {
                  props.data.fetching.success?
                  "Succesfully submited":
                  props.data.fetching.failure?
                  "Failed to Submit":
                  "Submit request"
                  }
                </Button>
                {props.data.fetching.value && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
                </Box>
      
     
    {/* </Box> */}
                </>
}