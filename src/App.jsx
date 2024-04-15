import { useState } from "react";
import "./App.css";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);
  console.log("setToken State", setToken);

  return (
    <>
      <Authenticate token={token} />
      <SignUpForm setToken={setToken} />
    </>
  );
}
