import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';

interface LogoutButtonProps {
  style?: React.CSSProperties;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ style }) => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate('/login');
  };

  return (
    <Button variant="contained" color="primary" fullWidth style={style} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;