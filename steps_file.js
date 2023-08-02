
const { I } = inject();

module.exports = {
    // Custom function to log in with provided credentials
    async login(Email, password) {
        I.amOnPage('/login');
        I.fillField('Email', Email);
        I.fillField('password', password);
        I.click('Login');
        // Assuming successful login redirects to the dashboard
        await I.waitForNavigation();
    },

    // Custom function to check if the user is logged in
    isLoggedIn() {
        return I.grabTextFrom('.welcome-message');
    },

    // Custom function to log out
    async logout() {
        I.click('Logout');
        // Assuming successful logout redirects to the login page
        await I.waitForNavigation();
    },
};
