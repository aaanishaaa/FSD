import React from "react";
import Student from "./Student";

function Home() {
  const h1 = <h1>Hello World</h1>;
  const mystyle = {
    color: "red",
    backgroundColor: "yellow",
  };
  return (
    <div style={{ backgroundColor: "black", padding:"50px", margin:"0"}}>
      {h1}
      <div>
        <Student college="ABES ENGINEERING COLLEGE" name="Rahul" branch="CSE" roll="21" section="A" />
      </div>
    </div>
  );
}

export default Home;
