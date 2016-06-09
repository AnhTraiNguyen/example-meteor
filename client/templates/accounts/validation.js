/**
 * Helpers
 */

$.validator.setDefaults({
  rules: {
    fullname: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 6
    }
  },
  messages: {
    fullname: {
      required: i18n('form.fullname_required')
    },
    email: {
      required: i18n('form.email_required'),
      email: i18n('form.email_check')
    },
    password: {
      required: i18n('form.password_required'),
      minlength: i18n('form.password_check')
    }
  }
});