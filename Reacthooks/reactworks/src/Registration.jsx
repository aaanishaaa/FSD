import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Registration({regData}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userdata,setuserdata]=useState();


  function showData(e){
    e.preventDefault();
    const data={
      name,
      email,
      password
    };
    regData(data);
  }

  return (
    <div>
      {/* <div>{JSON.stringify(userdata)}</div> */}
      <form style={{ padding: "50px" }}>
        <h1>REGISTER</h1>
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
          onClick={showData}
          className="btn btn-primary"
          style={{ margin: "5px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
