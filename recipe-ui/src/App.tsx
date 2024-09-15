import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import CreateAccount from "./pages/CreateAccountPage.tsx";
import { ThemeProvider } from '@emotion/react';
import LoginPage from './pages/LoginPage.tsx';
import theme from './config/Theme.ts';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AuthProvider from './context/auth/AuthProvider.tsx';
import HomePage from './pages/HomePage.tsx';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={< Navigate to="/home" />} />
              <Route path="/register" element={< CreateAccount />} />
              <Route path="/login" element={< LoginPage />} />
              <Route path="/home" element={< HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
