import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  const [rdata, setrdata] = useState();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div style={{ margin: "20px" }}>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/registration")}>Registration</button>
        </div>

        <Routes>
          <Route path="/login" element={<Login regdata={rdata} />} />
          <Route path="/registration" element={<Registration regData={setrdata} />} />
        </Routes>
      </div>
    </>
  );
}

function WrapperApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrapperApp;
