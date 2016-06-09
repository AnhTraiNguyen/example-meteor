/**
 * Login
 */

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();

        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                Session.set('error', 'Your email or password is incorrect!');

            } else {
                Session.set('error', '');
                Router.go("/");
            }
        });
    },
    'click .btn-facebook': function(event) {
      event.preventDefault();
      Meteor.loginWithFacebook({requestPermissions: ['email']}, function(err){
          if(!err) {
              Router.go("/");
          } else {
              throw new Meteor.Error("Facebook login failed");
          }
      });
    },
    'click .btn-twitter': function(event) {
      event.preventDefault();
      Meteor.loginWithTwitter(function(err){
          if(!err) {
              Router.go("/");
          } else {
              throw new Meteor.Error("Twitter login failed");
          }
      });
    },
    'click .btn-google': function(event) {
      event.preventDefault();
      Meteor.loginWithGoogle(function(err){
          if(!err) {
              Router.go("/");
          } else {
              throw new Meteor.Error("Google login failed");
          }
      });
    },
    'click .btn-linkedin': function(event) {
      event.preventDefault();
      Meteor.loginWithLinkedin(function(err){
          if(!err) {
              Router.go("/");
          } else {
              throw new Meteor.Error("Linkedin login failed");
          }
      });
    }
});

Template.login.helpers({
    error: function() {
        return Session.get('error');
    }
});