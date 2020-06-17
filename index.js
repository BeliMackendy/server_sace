const expess = require("express");
const usersRoutes = require("./routes/usersRoutes");
const categorieRoutes = require("./Routes/categorieRoutes");
const niveauRoutes = require("./Routes/niveauRoutes");
const programmeRoutes = require("./Routes/programmeRoutes");
const public_cibleRoutes = require("./Routes/public_cibleRoutes");
const vacationRoutes = require("./Routes/vacationRoutes");
const departementRoutes = require("./Routes/departementRoutes");
const arrondissementRoutes = require("./Routes/arrondissementRoutes");
const communeRoutes = require("./Routes/communeRoutes");
const districtRoutes = require("./Routes/districtRoutes");
const modalite_fonctionnementRoutes = require("./Routes/modalite_fonctionnementRoutes");

const section_communaleRoutes = require("./Routes/section_communaleRoutes");
const institutionRoutes = require("./routes/institutionRoutes");
const cors = require("cors");

const app = expess();

app.use(cors());
app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));
app.use(expess.static("public"));

app.use("/app/sace", usersRoutes);
app.use("/app/sace", departementRoutes);
app.use("/app/sace", arrondissementRoutes);
app.use("/app/sace", communeRoutes);
app.use("/app/sace", districtRoutes);
app.use("/app/sace", section_communaleRoutes);
app.use("/app/sace", categorieRoutes);
app.use("/app/sace", niveauRoutes);
app.use("/app/sace", programmeRoutes);
app.use("/app/sace", public_cibleRoutes);
app.use("/app/sace", vacationRoutes);
app.use("/app/sace", modalite_fonctionnementRoutes);
app.use("/app/sace", institutionRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Port d'ecoute du Server: ${port}`));
