"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllContacts(req, res) {
    let jsonResp = {
        msg: "Get All Contacts",
        method: `${req.method}`,
        success: true
    };
    return res.status(200).json(jsonResp);
}
function createNewContact(req, res) {
    let reqName = req.body.name;
    let reqAge = req.body.age;
    class ContactInterface {
    }
    class Contact {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.id = 0;
        }
    }
    let instanceContact = new Contact(reqName, reqAge);
    let jsonResp = {
        msg: "Create new contact",
        method: `${req.method}`,
        success: true,
        data: instanceContact
    };
    return res.status(200).json(jsonResp);
}
function getContactById(req, res) {
    let contactId = parseInt(req.params.id);
    let jsonResp = {
        msg: "get single contact",
        id: contactId,
        method: `${req.method}`,
        success: true
    };
    return res.status(200).json(jsonResp);
}
function updateContactById(req, res) {
    let contactId = parseInt(req.params.id);
    let jsonResp = {
        msg: "edit single contact",
        id: contactId,
        method: `${req.method}`,
        success: true,
        data: {
            name: req.body.name,
            age: req.body.age
        }
    };
    return res.status(200).json(jsonResp);
}
function deleteContactById(req, res) {
    let contactId = parseInt(req.params.id);
    let jsonResp = {
        msg: "Delete single contact",
        id: contactId,
        method: `${req.method}`,
        success: true
    };
    return res.status(200).json(jsonResp);
}
const ControllerMethods = {
    showAllContacts: getAllContacts,
    createContact: createNewContact,
    getSingleContact: getContactById,
    editContact: updateContactById,
    deleteContact: deleteContactById
};
exports.default = ControllerMethods;
//# sourceMappingURL=pgContactController.js.map