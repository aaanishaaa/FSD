import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Login({regdata}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function verification() {
    alert(name);
    alert(email);
    if(email==regdata.email){
      alert("Correct")
    }
    else{
      alert("User is invalid")
    }
  }

  return (
    <div>
      <form style={{ padding: "50px" }}>
      <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter Name</label>
          <input
            type="name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          onClick={verification}
          className="btn btn-primary"
          style={{ margin: "5px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
