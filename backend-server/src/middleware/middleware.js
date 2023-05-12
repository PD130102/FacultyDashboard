const jwt = require("jsonwebtoken");
const {models} = require('../db')
//set up auth middleware
const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //if verified
    console.log("decoded: ", decoded)
    const admin = await models.admin.findOne({
      where: {
        adminId: decoded.id,
      },
    });
    if (!admin) {
      throw new Error();
    }
    req.admin = admin;
    req.token = token;
    next();
  } catch (error) {
    console.log(error)
    res.status(401).send({ error: "Please authenticate." });
  }
};
module.exports = {adminAuth};
