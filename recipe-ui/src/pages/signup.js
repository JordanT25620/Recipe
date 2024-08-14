import React from "react";
import { Grid, Button, Typography, Container } from '@mui/material';
import { ButtonUsage, Username, Password, HoverTip } from "../components.js";

class signup extends React.Component {

    // What you want to be returned / rendered on the screen
    render (){
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center"
                        style={{ minHeight: '100vh', marginTop: '-35%' }}>
                        {/* Sign up Header */}
                        <Grid item>
                            <Typography variant="h4" component="h1">
                            Sign up
                            </Typography>
                        </Grid>

                        {/* Username Field */}
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center" style={{ marginLeft: '4%' }}>
                                <Grid item xs={10}>
                                    <Username />
                                </Grid>
                                <Grid item xs={2}>
                                    <HoverTip text={"Must be unique & at least 2 characters long"} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Password Field */}
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center" style={{ marginLeft: '4%' }}>
                                <Grid item xs={10}>
                                    <Password text="Password"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <HoverTip text={"Must be at least 7 characters long"} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Confirm Password Field */}
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center" style={{ marginLeft: '4%' }}>
                                <Grid item xs={10}>
                                    <Password text="Confirm Password"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <HoverTip text={"Make sure the password above matches this one"} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <ButtonUsage text="Sign up"/>
                        </Grid>

                        <Grid item xs={12} style = {{marginTop:"18%"}}>
                        <Typography variant="body2" align="center">
                            Already have an account?{' '}
                        </Typography>
                        </Grid>

                        {/* Link to take you to log in */}
                        <Grid item xs={12} style = {{marginTop:"-4%"}}>
                            <Button color="primary" size="large">
                                Log in
                            </Button>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        )


    }
}

export default signup;