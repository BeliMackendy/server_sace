const expess = require("express");
const usersRoutes = require("./routes/usersRoutes");
const cors = require("cors");

const app = expess();

app.use(cors());
app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(expess.static("public"));

app.use("/app/sace", usersRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Port d'ecoute du Server: ${port}`));
