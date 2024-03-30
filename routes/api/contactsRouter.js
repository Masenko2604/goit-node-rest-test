// import express from "express";
// import {
//   listContact,
//   getContactById,
//   deleteContactById,
//   createContact,
//   updateContactById,
// } from "../../controllers/contactsControllers.js";
// import { getContactById } from "../../services/contactsServices.js";

// const contactsRouter = express.Router();

// contactsRouter.get("/", listContact);

// contactsRouter.get("/:id", getContactById);

// contactsRouter.delete("/:id", deleteContactById);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContactById);

// export default contactsRouter;
const express = require('express')

const contacts = require("../../models/contacts")

const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result)
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router