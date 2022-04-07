import ResponsiveAppBar from "./appBar"
import C1 from "./c1";
import C2 from "./c2";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from "react";
const register =()=>{
    const [registerdata,setRegisterData]=useState({
      Name:{error:false,errorMsg:'',value:'tester'},
      Email:{error:false,errorMsg:'',value:'tester@playcub.com'},
      age:{error:false,errorMsg:'',value:'14'},
      fetching:{value:false,success:false,failure:false},
    })
    const fetchData=async()=>{
      try{
        const serverStatus= await fetch('https://playcub.deta.dev/ping')

        console.log(serverStatus,"status")
        if (serverStatus.statusText=='OK'){
        const response= await fetch('https://playcub.deta.dev/form/submit/demoClass',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            name:registerdata['Name'].value,
            email:registerdata['Email'].value,
            childAge:parseInt(registerdata['age'].value)
          })
      }).then(e=>{
        if (e.status===201){
          setRegisterData({...registerdata,fetching:{...registerdata.fetching,success:true,value:false}})

        }else{
        setRegisterData({...registerdata,fetching:{...registerdata.fetching,failure:true,value:false}})

        }
        
        return e
      }).catch(e=>{
        console.log(e,"fail")
        setRegisterData({...registerdata,fetching:{...registerdata.fetching,failure:true,value:false}})
        return e
      })
          console.log(response,"response.data")
        }
      }catch(err){
        console.log(err);
      }
    }
    const handleChange=(e,id)=>{
      setRegisterData({...registerdata,[id]:{...registerdata[id],value:e.target.value}})
    }
    const onSubmit=(e)=>{
      var error=false
      var register=registerdata
      console.log(register['age'].value<8,"submited");
      if (register['Name'].value.length<=2){
        error=true
        register['Name'].error=true
        register['Name'].errorMsg='Enter Name'
      }else{
        register['Name'].error=false
        register['Name'].errorMsg=''
      }
      if (!register['Email'].value.includes('@') || !register['Email'].value.includes('.')){
        error=true
        register['Email'].error=true
        register['Email'].errorMsg='Enter correct mail id'
      }else{
        register['Email'].error=false
        register['Email'].errorMsg=''
      }
      if (register['age'].value<8 || register['age'].value>15){
        error=true
        register['age'].error=true
        register['age'].errorMsg='betwee 8 and 12'
      }else{
        register['age'].error=false
        register['age'].errorMsg=''
      }
      if (!error){
        register.fetching.value=true
        fetchData()
      } 
      setRegisterData({...register})
      
    }
    return (<>
        
        <ResponsiveAppBar/>
    <Box sx={{flexGrow: 1, m:10,display: { xs: "none", md: "flex" } }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={10}>
            <C1 data={registerdata} onChange={handleChange} onSubmit={onSubmit}/>
        </Grid>
        <Grid item xs={6}>
          <C2/>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{flexGrow: 1,margin:"1%", display: { xs: "flex", md: "none" } }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
        <C1 data={registerdata} onChange={handleChange}  onSubmit={onSubmit}/>
        </Grid>
        <Grid item xs={16}>
        <C2/>
        </Grid>
      </Grid>
    </Box>
        </>
    )
}
export default register;