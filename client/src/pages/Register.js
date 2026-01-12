import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/AuthStyles.css";


const Register = () => {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/api/v1/auth/register", {
      name,
      email,
      password,
      phone,
      address,
    });

    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/login");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};


  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER</h4>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-3"
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-3"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mb-3"
            required
          />

          <input
            type="text"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control mb-3"
            required
          />

          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control mb-3"
            required
          />

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
