const getContacts = require("./getAll");
const getContact = require("./getById");
const createContact = require("./add");
const removeContact = require("./removeById");
const updateContact = require("./updateById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getContacts,
  getContact,
  createContact,
  removeContact,
  updateContact,
  updateStatusContact,
};