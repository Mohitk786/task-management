const express = require('express');
const app = express();
const routes = require("./routes/routes")

const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const database = require("./config/database");


dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();



app.use(express.json());
app.use(cookieParser());

app.use(cors())



app.use('', routes);


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}` );
});