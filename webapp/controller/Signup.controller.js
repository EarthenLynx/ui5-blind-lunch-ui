sap.ui.define(["./Basecontroller"], function (Basecontroller) {
  "use strict";

  return Basecontroller.extend(
    "sap.ui.etc.blindlunch.controller.Basecontroller",
    {
      // GETTERS

      // SETTERS
      onSignupUser(callback) {
        const payload = this.getView().getModel("lunchUser");

        console.log(payload);

        // $.ajax({
        //   url: "https://jsonplaceholder.typicode.com/todos/1",
        //   data: payload,
        //   type: "GET",
        //   beforeSend: (request) => request.setRequestHeader(),
        //   success: (result, status, xhr) => console.log(status),
        //   error: (xhr, status, err) => console.log(err),
        //   complete: (xhr, status) => console.log(status),
        // });

        if (callback) callback();
      },

      // ACTIONS
      handleSignupUser() {
        const self = this;
        self.onSignupUser(() =>
          self._handleCreateMessageStrip(
            "You've been successfully signed up!",
            "Success",
            "signup-form"
          )
        );
      },
    }
  );
});
