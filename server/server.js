require("./utils/dbConnect");
const express = require("express")
const app = express();
const cors = require('cors');
const router = require("./routes/router");
const PORT =  8000;

// $MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin : ["https://crud-operation-client-narendrankt.vercel.app/company"],
    methods: ["POST", "GET", "PUSH", "DELETE"],
    credentials: true
));

// $Routes
app.use("/company", router);

// $Listener
app.listen(PORT, () => {
    console.log("Server is up and running " + PORT);
})
