import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface AuthLinkProps {
  questionText: string;
  linkText: string;
  linkTo: string;
}

const AuthLink: React.FC<AuthLinkProps> = ({ questionText, linkText, linkTo }) => {
  return (
    <Typography variant="body2" sx={{ marginTop: 2 }}>
      {questionText}{' '}
      <Link to={linkTo} style={{ textDecoration: 'none', color: '#1976d2' }}>
        {linkText}
      </Link>
    </Typography>
  );
};

export default AuthLink;