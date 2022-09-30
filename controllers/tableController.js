let connectionRequest = require("../db");

class tableController {
  async getAll(req, res) {
    try {
      let connection = connectionRequest();

      connection.query("SELECT * FROM main_table", (err, result) => {
        if (err) {
          console.log(`not successful! ${err}`);
          connection.destroy();
        } else {
          console.log(`Query was successful, ${result}`);
          res.json(result);
          connection.destroy();
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new tableController();
