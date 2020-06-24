sap.ui.define(["./Basecontroller"], function (Basecontroller) {
  "use strict";

  return Basecontroller.extend(
    "sap.ui.etc.blindlunch.controller.Basecontroller",
    {
      // GETTERS

      // SETTERS

      // ACTIONS
      handleShowDepartmentHelp() {
        this._handleCreateConfirmationPopup(
          "You will be randomly matched with a colleague of yours. \n Depending on her preferences, it is more likely to be a colleague from another department than yours. \n Also, please be fair and randomize only once."
        );
      },
    }
  );
});
