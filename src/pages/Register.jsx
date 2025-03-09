import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createToken,
} from "../store/actionCreator";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tokenJWT, setTokenJWT] = React.useState('')

  const [newKaryawan, setNewKaryawan] = React.useState({
    name: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      setTokenJWT(token)
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    dispatch(createToken(newKaryawan));
  };

  return (
    <>
      {
        tokenJWT ? (
          <Home />
        ) : (
          <main style={{ padding: '50px' }}>
            <h1>Login </h1>
            <br />

            <form className="form-control">
              <input className="input-group-lg"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setNewKaryawan({
                    ...newKaryawan,
                    name: e.target.value,
                  });
                }}
              />
              <br />
              <br />

              <button className="btn btn-primary" onClick={() => {
                handleLogin();
              }} type="submit">Submit</button>
            </form>
          </main>
        )
      }
    </>
  )
}

export default Register;
