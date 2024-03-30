const express = require("express");

const ctrl = require("../../controllers/contacts");

const {validateBody} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.create);

router.put("/:id",  validateBody(schemas.createSchema), ctrl.updateContactById);

router.delete("/:id", ctrl.deleteContactById);

module.exports = router;






// import express from "express";
// import {
//   getAllContacts,
//   getOneContact,
//   deleteContact,
//   createContact,
//   updateContact,
// } from "../.. https://prnt.sc/EKDbIujo-e9Econtrollers/contactsControllers.js";

// const contactsRouter = express.Router();

// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContact);

// export default contactsRouter;