sap.ui.define(["./Basecontroller"], function (Basecontroller) {
  "use strict";

  return Basecontroller.extend("sap.ui.etc.blindlunch.controller.Basecontroller", {
    // GETTERS

    // SETTERS
    onSignupUser(callback) {
      const host = this._getHostname();
      const payload = this.getView().getModel("lunchUser").getData();

      console.log(payload);

      fetch(host + "/signup", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (callback) callback(data);
        })
        .catch((err) => console.log(err));
    },

    // ACTIONS
    handleSignupUser() {
      const self = this;
      self.onSignupUser(() =>
        self._handleCreateMessageStrip("Successfully created user", "Success", "signup-form")
      );
    },
  });
});
