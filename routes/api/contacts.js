const express = require("express");

const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
const { schemas } = require("../../utils/validation");
const { contacts: ctrl } = require("../../controllers");

const validationMiddleware = validation(schemas.contactsAddSchema);
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContact));

router.post("/", validationMiddleware, ctrlWrapper(ctrl.createContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.patch(
    "/:contactId/favorite",
    isValidId,
    validation(schemas.updateFavoriteScheme),
    ctrlWrapper(ctrl.updateStatusContact)
  );
  
  router.put(
    "/:contactId",
    isValidId,
    validationMiddleware,
    ctrlWrapper(ctrl.updateContact)
  );

module.exports = router;