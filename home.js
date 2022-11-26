import './home.css';
import {Paper, Box, Stack, TextField, MenuItem, Button, Typography} from '@mui/material';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
 
function Home(){

    const [dept,setDept] = useState("")
    const [name,setName] = useState("")
    const [gender,setGender] = useState("")
   

    const checkData =() =>{
        
    }
    
    return (
        <div>
            <h1>Home Page</h1>
            <div style={{height:'100vh',width:'100%',backgroundColor:'orange', display:'flex',justifyContent:'center',alignItems:'center'}}>
      
                <Paper elevation={24} sx={{height:'450px',width:'50%', padding:'30px'}} >
                <h4 align="center">Signup</h4>
                   <Stack direction="row">
                   
                        <Box flex={1}  >
                        <TextField  required className='textbox' size='small'  sx={{ width:'90%',marginTop:'30px'}}
                            id="standard-basic"
                            label="Username"
                            type="text"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            variant="standard" color='primary'
                             
                            />
                            <TextField  required className='textbox' size='small' sx={{width:'90%', marginTop:'30px'}}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            variant="standard" color='primary'
                            />
                             <TextField required className='textbox' size='small' sx={{width:'90%', marginTop:'30px'}}
                                id="standard-basic"
                                label="Select Department"
                                select
                                value={dept}
                                onChange={e=>setDept(e.target.value)}
                                variant="standard" color='primary'
                             >
                                <MenuItem value="ece">ECE</MenuItem>
                                <MenuItem value="eee">eee</MenuItem>
                                <MenuItem value="cse">cse</MenuItem>
                             </TextField>
                             <TextField required className='textbox' size='small' sx={{width:'90%', marginTop:'30px'}}
                                id="standard-basic"
                                label="Select Gender"
                                select
                                value={gender}
                                onChange={e=>setGender(e.target.value)}
                                variant="standard" color='primary'
                             >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                             </TextField>
                        </Box>
                        <Box flex={1} >
                        <TextField  required className='textbox' size='small' sx={{width:'90%', marginTop:'30px'}}
                            id="standard-basic"
                            label="Mobile"
                            type="number"
                            variant="standard" color='primary'
                            />
                            <TextField  required className='textbox' size='small' sx={{width:'90%', marginTop:'30px'}}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard" color='primary'
                            />
                            <TextField  required className='textbox' size='small' sx={{width:'90%', marginTop:'30px'}}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                           
                            variant="standard" color='primary'
                            />
                          
                        </Box>
                   </Stack>
                   <Button onClick={checkData} sx={{marginTop:'20px'}} fullWidth variant='contained'>Submit</Button>
                   <Typography sx={{marginTop:'20px'}} align="center">Already Account <a href="">Login</a></Typography>
                </Paper>
            </div>

            
        </div>



    )
}

export default Home;