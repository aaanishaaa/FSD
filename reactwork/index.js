// console.log("Hello react");
// const div= document.createElement("div");
// const h2= document.createElement("h2");

// h2.textContent="Welcome to React Js";
// h2.style.color="red";

// div.appendChild(h2)
// document.body.appendChild(div)

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
//  const h2= React.createElement("h2",{style:{color:'red'}},"Welcome to React JS");
//  const li1 = React.createElement("li",{style:{color:"orange"}},"Orange");
//  const li2 = React.createElement("li",{style:{color:"yellow"}},"Mango");
//  const li3 = React.createElement("li",{style:{color:"green"}},"Kiwi");
//  const li4 = React.createElement("li",{style:{color:"red"}},"Apple");
// //  const ul = React.createElement("ul",{style:{backgroundColor:"pink"}},li1,li2,li3,li4);
//  const ul = React.createElement("ul",{style:{backgroundColor:"pink"}},[li1,li2,li3,li4]);

//  const h3= React.createElement("h3",{},"Bye");
//  const h4= React.createElement("h3",{},"Hiii");
//  const container = React.createElement("div", {}, h2, h3, h4);
// root.render(container)
//  root.render(ul);
// const div = React.createElement("h1", {}, "By React Create Element");
const hi = <h1>HELLO WORLD</h1>; //JSX
// const h12 = <h1>CREATED</h1>; //JSX
// const div1 = (
//   <div>
//     {h11}
//     {h12}
//   </div>
// );
// const li1 = <li>Orange</li>;
// const li2 = <li>Apple</li>;
// const li3 = <li>Banana</li>;
// const li4 = <li>Kiwi</li>;
// const ul = (
//   <ul>
//     {li1}
//     {li2}
//     {li3}
//     {li4}
//   </ul>
// );

// const mystyle={
//     color:"red",
//     backgroundColor:"pink",
//     padding: "20px",
// }

// const divstyle={
//     backgroundColor:"aqua",
//     color:"green",
//     padding: "10px",
//     margin:"10px",
// }

// const div2 = (
//   <div style={mystyle}>
//     <div>Welcome</div>
//     <div style={divstyle}>{ul}</div>
//     <div>{div1}</div>
//   </div>
// );
root.render(hi);
