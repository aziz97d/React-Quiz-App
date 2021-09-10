import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const [loading, setLoading] = useState();

  const history = useHistory();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);

      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("failed to login!");
    }
  }

  return (
    <Form onSubmit={handleSubmit} style={{ height: "330px" }}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
      {error && <p className="error">{error}</p>}
    </Form>
  );
};

export default LoginForm;
