const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

app.use("/", require("./routes/root"));
app.use("/open", require("./routes/open"));
app.use("/builder", require("./routes/builder"));
app.use("/personal", require("./routes/personal"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);