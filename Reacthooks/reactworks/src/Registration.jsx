import React, { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showData = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{ maxWidth: "400px", marginTop: "40px",margin:"auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h1>Register</h1>
      <form style={{ padding: "20px" }}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputName1">Enter Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputName1"
            placeholder="Enter name"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
          <small id="emailHelp" className="form-text text-muted" style={{ fontSize: "12px", marginTop: "5px" }}>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          onClick={showData}
          className="btn btn-primary"
          style={{ marginTop: "10px", padding: "10px 20px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
