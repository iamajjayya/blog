const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;


// parse options
app.use(express.json());
app.use(cors());





async function main() {
  await mongoose.connect("mongodb+srv://ajjayya2002:VEjhfPZoP9gQd4E8@hotel-blog.2zcn9.mongodb.net/blog?retryWrites=true&w=majority&appName=hotel-blog");
  app.get("/", (req, res) => {
    res.send("Server is Running");
  });
}

main()
.then(() =>{
    console.log(" Mongodb Connected Succesfully")
})
.catch(err => console.log(err));





app.listen(port, () => {
  console.log(`Listinig on port ${port}`);
});
