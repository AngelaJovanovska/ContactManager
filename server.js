const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
connectDb();
const port = process.env.port || 5000;

//middleware
app.use(express.json()); //parser that parses the data received from the client
app.use(errorHandler);

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});
