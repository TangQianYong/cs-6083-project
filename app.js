const express = require('express');
const path = require('path');
const session = require('express-session');
// use body-parser module  to handle post
const bodyparser = require('body-parser');
const app = express();

//use body-parser handle all get/post rquest
app.use(bodyparser.urlencoded({extended: false}));

app.use(session({
    secret: 'Dymatize Accelerate Wallet',
    saveUninitialized: false,
    cookie: {
        maxAge: 0.25 * 60 * 60 * 1000
    }
}));

//art directory
app.set('views', path.join(__dirname, 'views'));
//tell express standard attribute
app.set('view engine', 'art');

//tell standard engine for attribute
app.engine('art', require('express-art-template'));

//open static directory
app.use(express.static(path.join(__dirname, 'static')));

//router module
const error = require('./routes/error');

const userLogin = require('./routes/user/login');
const userLogout = require('./routes/user/logout');
const userRegister = require('./routes/user/register');
const userDashboard = require('./routes/user/dashboard');
const userProfileUpdate = require('./routes/user/userProfileUpdate');

const userHomeRegister = require('./routes/user/home/homeRegister');
const userHomeDisplay = require('./routes/user/home/homeDisplay');
const userHomeInsuranceSelect = require('./routes/user/home/homeInsuranceSelect');
const userHomeInsurancePay = require('./routes/user/home/homeInsurancePay');
const userHomeInvoiceDisplay = require('./routes/user/home/homeInvoiceDisplay');
const userHomePayDisplay = require('./routes/user/home/homePayDisplay');
const userHomeUpdate = require('./routes/user/home/homeUpdate');

const userAutoRegister = require('./routes/user/auto/autoRegister');
const userAutoDisplay = require('./routes/user/auto/autoDisplay');
const userAutoInsuranceSelect = require('./routes/user/auto/autoInsuranceSelect');
const userAutoInsurancePay = require('./routes/user/auto/autoInsurancePay');
const userAutoInvoiceDisplay = require('./routes/user/auto/autoInvoiceDisplay');
const userAutoPayDisplay = require('./routes/user/auto/autoPayDisplay');('../../controller/dashboardController')
const userAutoUpdate = require('./routes/user/auto/autoUpdate');

const userDriverRegister = require('./routes/user/driver/driverRegister');
const userDriverDisplay = require('./routes/user/driver/driverDisplay');
const userDriverUpdate = require('./routes/user/driver/driverUpdate');

const userPolicyDisplay = require('./routes/user/policyDisplay');


const adminLogin = require('./routes/admin/login');
const adminRegister = require('./routes/admin/register');
const adminLogout = require('./routes/admin/adminLogout');
const adminDashboard = require('./routes/admin/dashboard');
const adminUserDisplay = require('./routes/admin/userDisplay');
const adminPolicyDisplay = require('./routes/admin/policyDisplay');
const adminPolicyRegister = require('./routes/admin/policyRegister');
const adminHomeDisplay = require('./routes/admin/homeDisplay');
const adminAutoDisplay = require('./routes/admin/autoDisplay');
const adminHomeInvoiceDisplay = require('./routes/admin/homeInvoiceDisplay');
const adminAutoInvoiceDisplay = require('./routes/admin/autoInvoiceDisplay');
const adminHomePayDisplay = require('./routes/admin/homePayDisplay');
const adminAutoPayDisplay = require('./routes/admin/autoPayDisplay');
const adminDriverDisplay = require('./routes/admin/driverDisplay');

app.use('/', require('./middleware/loginGuard'));

//apply module for request

app.use('/error', error);

//admin
app.use('/admin/login', adminLogin);
app.use('/admin/register', adminRegister);
app.use('/admin/dashboard', adminDashboard);
app.use('/admin/logout', adminLogout);


app.use('/admin/adminUserDisplay', adminUserDisplay);

app.use('/admin/adminPolicyDisplay', adminPolicyDisplay);
app.use('/admin/adminPolicyRegister', adminPolicyRegister);

app.use('/admin/adminHomeDisplay', adminHomeDisplay);
app.use('/admin/adminAutoDisplay', adminAutoDisplay);
app.use('/admin/adminHomeInvoiceDisplay', adminHomeInvoiceDisplay);
app.use('/admin/adminAutoInvoiceDisplay', adminAutoInvoiceDisplay);
app.use('/admin/adminHomePayDisplay', adminHomePayDisplay);
app.use('/admin/adminAutoPayDisplay', adminAutoPayDisplay);
app.use('/admin/adminDriverDisplay', adminDriverDisplay);


//user
app.use('/login', userLogin);
app.use('/logout', userLogout);
app.use('/register', userRegister);
app.use('/dashboard', userDashboard);
app.use('/profileUpdate', userProfileUpdate);

app.use('/homeRegister', userHomeRegister);
app.use('/homeDisplay', userHomeDisplay);
app.use('/homeUpdate', userHomeUpdate);
app.use('/homeInsuranceSelect', userHomeInsuranceSelect);
app.use('/homeInsurancePay', userHomeInsurancePay);

app.use('/autoRegister', userAutoRegister);
app.use('/autoDisplay', userAutoDisplay);
app.use('/autoUpdate', userAutoUpdate);
app.use('/autoInsuranceSelect', userAutoInsuranceSelect);
app.use('/autoInsurancePay', userAutoInsurancePay);

app.use('/driverRegister', userDriverRegister);
app.use('/driverDisplay', userDriverDisplay);
app.use('/driverUpdate', userDriverUpdate);

app.use('/homeInvoiceDisplay', userHomeInvoiceDisplay);
app.use('/autoInvoiceDisplay', userAutoInvoiceDisplay);
app.use('/homePayDisplay', userHomePayDisplay);
app.use('/autoPayDisplay', userAutoPayDisplay);

app.use('/policyDisplay', userPolicyDisplay);


//listen port 3000
app.listen(3000);
console.log('Server started');