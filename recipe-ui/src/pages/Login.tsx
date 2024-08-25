import { Grid, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/shared/CustomButton/CustomButton";

const Login = () => {
  const navigate = useNavigate();

  const handleRedirect = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  const handleSubmit = () => {
    //fill out however
    alert("Boom bow bang");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container component="main" maxWidth="xs">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh", marginTop: "-35%" }}
        >
          <Grid item>
            <Typography variant="h4" component="h1">
              Log in
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Username name="username" id="username" />
          </Grid>

          <Grid item xs={12}>
            <Password text="Password" id="password" name="password" />
          </Grid>

          <Grid item xs={12}>
            <CustomButton text="Login" />
          </Grid>

          <Grid item xs={12} style={{ marginTop: "18%" }}>
            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Button color="primary" onClick={handleRedirect}>
                Create Account
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Login;
