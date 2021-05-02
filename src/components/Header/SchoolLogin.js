import React from "react";
import useForm from "./customHook/useForm";
import validate from "./customHook/validateInfo";
import styled from "styled-components";
import { TextField, Button, Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SchoolLoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #43cea2, #185a9d);
  box-sizing: border-box;
  position: relative;
  overflow-y: hidden;
`;
const SvgContainer = styled.div`
  width: 50%;
  height: 50%;
  img {
    width: 50%;
    height: 50%;
    position: absolute;
    bottom: 5%;
    right: 1%;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;

  form {
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    height: auto;
    border-radius: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: all -0.2s ease;
    display: flex;
    flex-direction: column;

    p {
      font-family: "Open sans condensed", sans-serif;
      font-weight: 700;
      color: #fff;
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 4rem;
    }
    a {
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      text-align: start;
    }

    .MuiFilledInput-root {
      margin-bottom: 1rem;
    }

    .error-info p{
      padding: 0;
      padding-bottom:0.4rem;
      margin: 0;
      color: #ff0000;
      font-size: 1rem;
    }
  }
`;

const SchoolLogin = () => {
  const btnstyle = {
    margin: "0.5rem 0rem",
    outline: "none",
  };

  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <SchoolLoginPageContainer>
      <SvgContainer>
        <img src="./images/schoollogin.svg" />
      </SvgContainer>

      <LoginBox>
        <form onSubmit={handleSubmit}>
          <p>SCHOOL PORTAL</p>
          <TextField
            id="filled-basic"
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            variant="filled"
          />
          <div className="error-info">
            {errors.username && <p>{errors.username}</p>}
          </div>
          <TextField
            id="filled-password-input"
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <div className="error-info">
            {" "}
            {errors.password && <p>{errors.password}</p>}
          </div>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnstyle}
          >
            Login
          </Button>
          <a href="#">Forgot Password?</a>
        </form>
      </LoginBox>
    </SchoolLoginPageContainer>
  );
};

export default SchoolLogin;
