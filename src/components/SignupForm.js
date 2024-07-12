import { Link } from "react-router-dom";
import Form from "./Form";
import TextInput from "./Textinput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [agree , setAgree] = useState("");
    const [error , setError] = useState("");
    const [loading, setLoading] = useState(true);

    const {signup} = useAuth();
    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("password dont match");
        }
    }
  return (
    <Form style={{ height: "500px" }}>
      <TextInput type="text" placeholder="Enter name" required icon="person" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextInput
        type="email"
        placeholder="Enter email"
        required
        icon="alternate_email"
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput type="password" placeholder="Enter password" required icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextInput
        type="password"
        placeholder="Confirm password"
        required
        icon="lock_clock"
        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox text={"I agree to the Terms &amp; Conditions"} required value={agree} onChange={(e) => setAgree(e.target.value)} />
      <Button>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
