import React from 'react';
import { ToastContainer } from 'react-toastify';
import config from '../../../config/Config';

const CustomToastContainer: React.FC = () => {
  return (
    <ToastContainer
        position="top-center"
        autoClose={config.toastSettings.lifespanInMs}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        limit={1}
    />
  );
};

export default CustomToastContainer;