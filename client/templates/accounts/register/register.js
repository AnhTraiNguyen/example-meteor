/**
 * Register
 */

Template.register.events({
    'submit .register-form': function (event) {
        event.preventDefault();
    }
});

Template.register.onRendered(function(){
    var validator = $('.register-form').validate({
      submitHandler: function(event){
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var fullname = $('[name=fullname]').val();

        var user = {'email': email, password: password, profile: {name: fullname}};

        Accounts.createUser(user, function(err){
            if (!err) {
              Router.go('/');
            } else {
              if(err.reason == "Email already exists."){
                validator.showErrors({
                  email: i18n('form.email_exist')
                });
              }
            }
        });
      }
    });
});