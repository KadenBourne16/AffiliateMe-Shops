const db = require('../../DBConnection/dbconnection'); // Ensure this is the promise version

exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    // Validate the ID (optional but recommended)
    if (!id) {
        return res.status(400).json({ message: "User  ID is required" });
    }

    const query = "SELECT * FROM user WHERE idUser  = ?";

    // Use the promise-based query method
    db.query(query, [id])
        .then(([userById]) => {
            if (!userById) {
                return res.status(404).json({ message: "User  not found" });
            }

            console.log(userById);
            res.status(200).json(userById);
        })
        .catch(err => {
            console.error("Error message: ", err.message); // Log the error message
            res.status(500).json({ message: "Internal server error", error: err.message }); // Send error message in response
        });
};