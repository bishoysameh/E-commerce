import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

function Profile() {
  const [auth] = useAuth();
  // const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/profile/`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        console.log("Profile API Response:", res.data);
        setProfile((prevProfile) => ({
          ...prevProfile,
          name: res.data.name,
          email: res.data.email,
          address: res.data.address,
        }));
      })
      .catch((err) => console.error("Profile API Error:", err));
  }, [auth.token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (auth.token) {
      axios
        .put("http://localhost:8080/api/profile/", profile, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((res) => {
          toast.success("Profile updated successfully");
        })
        .catch((err) => console.error("Update Profile Error:", err));
    }
  };

  return (
    <div>
      <div>
        <div className="bod">
          <div className="maii">
            <form onSubmit={handleSubmit}>
              <label className="addprodd" aria-hidden="true">
                Update Profile
              </label>
              <input
                className="inpu"
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile((prevProfile) => ({
                    ...prevProfile,
                    name: e.target.value,
                  }))
                }
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="inpu"
                type="text"
                value={profile.email}
                onChange={(e) =>
                  setProfile((prevProfile) => ({
                    ...prevProfile,
                    email: e.target.value,
                  }))
                }
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="inpu"
                type="text"
                value={profile.address}
                onChange={(e) =>
                  setProfile((prevProfile) => ({
                    ...prevProfile,
                    address: e.target.value,
                  }))
                }
                name="address"
                placeholder="Address"
              />

              <button className="bbb" type="Submit">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
