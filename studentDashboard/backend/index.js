const express = require('express');
const fs = require('fs').promises;
const cors=require('cors');
const app = express();
const port = process.env.PORT || 3007;

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Dashboard');
});

app.post('/login', (req, res) => {
  try{
    const {name,email}=req.body;
    console.log(name+" "+ email);
    res.status(200).json({msg:"Successfully Login"});
  }
  catch(e){
    res.status(500).json({msg:e});
  }
});

app.post("/register", async (req, res) => {
  try {
    let arr = [];
    const { name, email, password } = req.body;
    console.log(name,email,password);
    try{
    const fdata = await fs.readFile("student.json", "utf-8");
    if (typeof fdata!== 'undefined') {
      arr = JSON.parse(fdata);
    }
  }
    catch(error){
    console.log(error);
    }
    const result = arr.find((item) => item.email === email);
    if (result) {
      res.json("User exists")
    } else {
      arr.push({ name, email, password });
      await fs.writeFile("student.json", JSON.stringify(arr));
      // res.send("User registered successfully");
    }
  } catch (error) {
    console.error(error);
    res.json("Error")
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});