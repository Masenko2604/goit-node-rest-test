import contactsService from "../services/contactsServices.js";

const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

export const listContact = async(req, res) => {
  const result = await contactsService.listContact();
  res.json(result)
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delet success"
  })
};

export const createContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateOneContact(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateOneContact(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
 };

module.exports = {
  listContact: ctrlWrapper(listContact),
  getContactById: ctrlWrapper(getContactById), 
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  removeContact: ctrlWrapper(deleteContact),

}