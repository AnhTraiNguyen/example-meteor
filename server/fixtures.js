/**
 * Fixture
 */

// add user
if (Meteor.users.find().count() === 0) {
    var adminId = Accounts.createUser({
        profile: {
            name: 'Admin'
        },
        username: "admin",
        email: "admin@vnhomnay.net",
        password: "vnhomnay$1"
    });
}