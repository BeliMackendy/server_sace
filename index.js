const expess = require("express");
const usersRoutes = require("./routes/usersRoutes");
const categorie = require("./Routes/categorieRoutes");
const niveau = require("./Routes/niveauRoutes");
const programme = require("./Routes/programmeRoutes");
const public_cible = require("./Routes/public_cibleRoutes");
const vacation = require("./Routes/vacationRoutes");
const departementRoutes = require("./Routes/departementRoutes");
const arrondissementRoutes = require("./Routes/arrondissementRoutes");
const communeRoutes = require("./Routes/communeRoutes");
const districtRoutes = require("./Routes/districtRoutes");
const section_communaleRoutes = require("./Routes/section_communaleRoutes");
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
app.use("/app/sace", categorie);
app.use("/app/sace", niveau);
app.use("/app/sace", programme);
app.use("/app/sace", public_cible);
app.use("/app/sace", vacation);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Port d'ecoute du Server: ${port}`));
