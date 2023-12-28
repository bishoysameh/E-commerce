import { useState } from "react";
import "./Login.css";
import toast from "react-hot-toast";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);

        // Set the authentication token in the axios headers
        const authToken = res.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

        // Update the local state with user and token
        setAuth({ ...auth, user: res.data.user, token: authToken });

        // Store user information and token in local storage
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: res.data.user, token: authToken })
        );

        // Navigate to the desired page
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Email not registered");
    }
  };

  return (
    <div>
      <div className="bod">
        <div className="mai">
          <form onSubmit={handleSubmit}>
            <label className="chk" aria-hidden="true">
              log in
            </label>

            <input
              className="inpu"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="inpu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="b" type="submit">
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
