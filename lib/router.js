/**
 * Router
 */

Router.configure({
    layoutTemplate: "layout"
});

Router.route('/', {
    template: 'home',
    fastRender: true
});

Router.route('/login', {
    template: 'login'
});

Router.route('/register', {
    template: 'register'
});

Router.route('/forgot-pasword', {
    template: 'ForgotPassword'
});

Router.route('/reset-password', {
    template: 'resetPassword'
});
