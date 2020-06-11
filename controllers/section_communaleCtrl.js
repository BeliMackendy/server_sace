const section_communale = require("../Models/section_communale");

exports.all = async (req, res) => {
  await section_communale.all((err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

exports.select_sec_communale_commune = async (req, res) => {
  const { Code_Com } = req.body;

  const commune = {
    Code_Com: Code_Com,
  };
  
  await section_communale.select_sec_communale_commune(commune, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};

