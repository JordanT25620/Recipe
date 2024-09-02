import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFoundPage: React.FC = () => {
  return (
    <Container
      maxWidth={false}  //Allows the Container to expand to full width
      sx={{
        height: '100vh',  //Force full height to match the viewport
        width: '100vw',   //Force full width to match the viewport
        display: 'flex',
        backgroundColor: '#f5f5f5',
        padding: 4
      }}
    >
      <div style={{textAlign: "center", margin: "auto"}}>
        <Typography variant="h1" color="initial">How'd you get here?</Typography>
        <Typography variant="h4">It looks like this page doesn't exist.</Typography>
      </div>
    </Container>
  ); //end return
}; //end NotFoundPage

export default NotFoundPage;