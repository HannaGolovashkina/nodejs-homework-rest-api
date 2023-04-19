const express = require("express");

const { validation, ctrlWrapper, isValidId, auth } = require("../../middlewares");
const { schemas } = require("../../utils/validation");
const { contacts: ctrl } = require("../../controllers");

const validationMiddleware = validation(schemas.contactsAddSchema);
const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContact));

router.post("/", auth, validationMiddleware, ctrlWrapper(ctrl.createContact));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

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