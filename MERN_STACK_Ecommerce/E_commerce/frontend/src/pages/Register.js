import { useState } from "react";
import "./Login.css";
import toast from "react-hot-toast";

import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("wrong");
    }
  };

  return (
    <div>
      <div className="bod">
        <div className="mai">
          <form onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="inpu"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="txt"
              placeholder="User name"
              required
            />
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
