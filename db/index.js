const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContact = async () => {
    const data = await fs.readFile(booksPath);
    return JSON.parse(data);
}

const getContactById = async (id) => {
    const contacts = await listContact();
    const result = contacts.find(item => item.id === id);
    return result || null;
}

const createContact = async(data) => {
    const contacts = await listContact();
    const newBook = {
        id: nanoid(),
        ...data,
    }
    contacts.push(newBook);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newBook;
}

const updateContact = async(id, data) => {
    const contacts = await listContact();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    contacts[index] = {id, ...data};
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
}

const deleteContact = async(id) => {
    const contacts = await listContact();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
}

module.exports = {
    listContact ,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
}