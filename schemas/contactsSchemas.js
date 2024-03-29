import Joi from "joi";

const Joi = require("joi");

export const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
})

export const updateContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
})

module.exports = {
  createContactSchema,
  updateContactSchema,
  
}