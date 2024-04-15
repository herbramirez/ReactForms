import { useState } from "react";
import PropTypes from "prop-types";
export default function Authenticate() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick(token) {
    console.log("Authenticate");

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setSuccessMessage("Authenticated!");
    } catch (error) {
      setError(error.message);
      setSuccessMessage("INVALID");
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {setError && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}

Authenticate.propTypes = {
  token: PropTypes.string.isRequired,
};
