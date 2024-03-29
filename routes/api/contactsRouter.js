import express from "express";
import {
  listContact,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
} from "../../controllers/contactsControllers.js";
import { getContactById } from "../../services/contactsServices.js";

const contactsRouter = express.Router();

contactsRouter.get("/", listContact);

contactsRouter.get("/:id", getContactById);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", updateContact);

export default contactsRouter;