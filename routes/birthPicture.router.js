const express = require("express")
const router = express.Router();
const { birthPictureController } = require("../controllers/birthPicture.controller")

router.get("/img", ((req, res, next) => {

    try {
        console.log("inside DOB router");
        next()
    } catch {
        return res.json({
            status: 1
        })
    }

}), birthPictureController)

module.exports = router