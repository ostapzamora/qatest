Feature('Login');

Scenario('Successful Login', ({ I }) => {
   // I.amOnPage('/login');
    I.fillField('Email', 'your_username');
    I.fillField('Password', 'your_password');
    I.click('Login');
    I.see('Welcome, your_username!');
});

Scenario('Failed Login - Invalid Credentials', ({ I }) => {
    //I.amOnPage('/login');
    I.fillField('Email', 'invalid_username');
    I.fillField('password', 'invalid_password');
    I.click('Login');
    I.see('Invalid username or password. Please try again.');
});

Scenario('Failed Login - Empty Fields', ({ I }) => {
    //I.amOnPage('/login');
    I.click('Login');
    I.see('Email required!');
});

Scenario('Failed Login - Locked Account', ({ I }) => {
    //I.amOnPage('/login');
    I.fillField('username', 'locked_user');
    I.fillField('password', 'locked_user_password');
    I.click('Login');
    I.see('Your account has been locked. Please contact support.');
});