import React from "react";
import { Grid, TextField, Button, Typography, Container } from '@mui/material';
import { ButtonUsage, Floater, Username, Password } from "../components.js";

class Login extends React.Component {
    
    // What you want to be returned / rendered on the screen
    render (){
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center"
                        style={{ minHeight: '100vh', marginTop: '-35%' }}>
                        {/* Log in Header */}
                        <Grid item>
                            <Typography variant="h4" component="h1">
                            Log in
                            </Typography>
                        </Grid>

                        {/* Username Field */}
                        <Grid item xs={12}>
                            <Username/>
                        </Grid>

                        {/* Password Field */}
                        <Grid item xs={12}>
                            <Password text="Password"/>
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <ButtonUsage text="Login"/>
                        </Grid>

                        {/* Account Creation Link */}
                        <Grid item xs={12} style = {{marginTop:"18%"}}>
                        <Typography variant="body2" align="center">
                            Don't have an account?{' '}
                        </Typography>
                        </Grid>

                        
                        <Grid item xs={12} style = {{marginTop:"-4%"}}>
                            <Button color="primary">
                                Create Account
                            </Button>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        )


    }
}

export default Login;