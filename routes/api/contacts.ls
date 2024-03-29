const express = require("express");

const ctrl = require("../../controllers/contactsControllers");

const {validateBody} = require("../../middlewares");

const schemas = require("../../schemas/contactsSchema");

const router = express.Router();

router.get("/", ctrl.listContact);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.createSchema), ctrl.create);

router.put("/:id",  validateBody(schemas.createSchema), ctrl.updateContactById);

router.delete("/:id", ctrl.deleteContactById);

module.exports = router;