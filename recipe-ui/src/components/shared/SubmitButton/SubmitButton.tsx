import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ style, children }) => {
  return (
    <Button type="submit" variant="contained" color="primary" fullWidth style={style}>
      {children}
    </Button>
  );
};

export default SubmitButton;