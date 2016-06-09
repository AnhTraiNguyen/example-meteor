Template.resetPassword.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentPassword = event.target.currentPassword.value,
        newPassword = event.target.newPassword.value,
        confirmNewPassword = event.target.confirmNewPassword.value, message;
    if (newPassword !== confirmNewPassword) {
      message = "The new passwords don't match!";
    } else {
      Accounts.changePassword(currentPassword, newPassword, function(error) {
          if (error) {
              message = error.message;
          } else {
              message = 'You reset your password!';
          }
      });
    }
  }
});

/* Template.resetPassword.onRendered({
  FlashMessages.clear();
}); */