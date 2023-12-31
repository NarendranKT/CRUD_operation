require("./utils/dbConnect");
const express = require("express")
const app = express();
const cors = require('cors');
const router = require("./routes/router");
const PORT =  8251;

// $MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// $Routes
@Crossorigin
app.use("/company", router);

// $Listener
app.listen(PORT, () => {
    console.log("Server is up and running " + PORT);
})
