import express from "express";
import {
  listContact,
  getContactById,
  deleteContactById,
  createContact,
  updateContactById,
} from "../../controllers/contactsControllers.js";
import { getContactById } from "../../services/contactsServices.js";

const contactsRouter = express.Router();

contactsRouter.get("/", listContact);

contactsRouter.get("/:id", getContactById);

contactsRouter.delete("/:id", deleteContactById);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", updateContactById);

export default contactsRouter;