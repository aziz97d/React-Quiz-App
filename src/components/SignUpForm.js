import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState();
  const [error, setError] = useState();

  const [loading, setLoading] = useState();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // Password Validate
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);

      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("failed to create an account!");
    }
  }

  const { signup } = useAuth();
  return (
    <Form onSubmit={handleSubmit} style={{ height: "500px" }}>
      <TextInput
        type="text"
        placeholder="Enter  name"
        icon="person"
        required
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <TextInput
        type="text"
        placeholder="Enter  email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <TextInput
        type="password"
        placeholder="Enter  password"
        icon="lock"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <TextInput
        type="password"
        placeholder="Confirm  password"
        icon="lock_clock"
        required
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />

      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => {
          setAgree(e.target.value);
        }}
      />

      <Button disabled={loading} type="submit">
        <span> Submit Now </span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
