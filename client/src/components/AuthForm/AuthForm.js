import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleLogin } from "react-google-login";

import InputField from "./InputField";
import { AUTH } from "../../constants/ActionTypes";
import useStyles from "./AuthFormStyles";

const AuthForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const toggleSignUp = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const handleChange = () => {};

  const googleLoginRender = (renderProps) => (
    <Button
      className={classes.googleButton}
      color="primary"
      fullWidth
      onClick={renderProps.onClick}
      disabled={renderProps.disabled}
      startIcon={<GoogleIcon />}
      variant="contained"
    >
      Sign in using Google
    </Button>
  );

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log(" The Google sign in attempt failed. Please try again later.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={2}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="h4">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <InputField
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <InputField
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <InputField
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <InputField
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}{" "}
          </Button>
          <GoogleLogin
            clientId="1048972997810-qtoim3lj60gdtrsc0a37ljkncuq1l5uu.apps.googleusercontent.com"
            render={googleLoginRender}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={toggleSignUp}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account yet? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthForm;
