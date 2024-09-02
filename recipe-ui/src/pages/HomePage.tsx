import React from 'react';
import { Container } from '@mui/material';
import { Navigate } from 'react-router-dom';
import LogoutButton from '../components/shared/LogoutButton/LogoutButton';
import useAuthContext from '../hooks/useAuthContext';

const HomePage: React.FC = () => {

    const { user } = useAuthContext();

    return user ? 
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
            <LogoutButton/>
        </Container>
        : 
        <Navigate to="/login"/>
}; //end HomePage

export default HomePage;