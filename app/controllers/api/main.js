const path = require("path");
const fs = require("fs");

module.exports = {
	handleGetRoot(req, res) {
		res.status(200).json({
			status: "OK",
			message: "LMS API is up and running!"
		})
	},

	handleGetFile(req, res) {
		const filename = req.params.filename;
		console.log("filename", filename);
    const publicDirectory = path.join(__dirname, "../../../resources");
		const uploadDirectory = path.join(publicDirectory, "upload", filename); 

    fs.readFile(uploadDirectory, (err, data) => {
      if (err) {
        res.status(500).json({
          status: "ERROR",
          error: {
            name: err.name,
            message: err.message
          }
        });
      } else {
        res.status(200).send(data);
      }
    });
  },

	onLost(req, res) {
		res.status(404).json({
			status: "FAIL",
			message: "Route not found!"
		})
	},

	onError(err, req, res, next) {
		res.status(500).json({
			status: "ERROR",
			error: {
				name: err.name,
				message: err.message
			}
		})
	}
}