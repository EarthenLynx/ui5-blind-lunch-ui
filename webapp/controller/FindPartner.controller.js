sap.ui.define(["./Basecontroller", "sap/ui/model/json/JSONModel"], function (
  Basecontroller,
  JSONModel
) {
  "use strict";

  return Basecontroller.extend("sap.ui.etc.blindlunch.controller.Basecontroller", {
    // GETTERS
    getLunchPartner() {
      const host = this._getHostname(true);

      fetch(host + "/match", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let oModel = new JSONModel(data);

          this.getView().setModel(oModel, "lunchUserMatch");
          console.log(this.getView().getModel("lunchUserMatch"));
        });
    },

    // SETTERS

    // ACTIONS
    handleShowDepartmentHelp() {
      this._handleCreateConfirmationPopup(
        "You will be randomly matched with a colleague of yours. \n Depending on her preferences, it is more likely to be a colleague from another department than yours. \n Also, please be fair and randomize only once."
      );
    },

    handleGetLunchPartner() {
      this.getLunchPartner();
    },
  });
});
