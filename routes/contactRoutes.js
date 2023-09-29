const express = require("express");
const {
    getAllContacts,
    updateContact,
    getSingleContact,
    deleteContact,
    createContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getAllContacts).post(createContact);

router
    .route("/:id")
    .get(getSingleContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;
