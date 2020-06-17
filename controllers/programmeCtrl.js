const programme = require("../Models/programme");

exports.all = async(req, res) => {
    await programme.all((err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        res.json(result);
    });
};

exports.select_programme_menfp = async (req, res) => {
    const{programme_}=req.body
    
    const data = {
      programme_: programme_,
    };
  await programme.select_programme_menfp(data,(err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};
exports.select_programme_etranger = async (req, res) => {
    const{programme_}=req.body
    
    const data = {
      programme_:programme_
    };
  await programme.select_programme_etranger(data, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    res.json(result);
  });
};
