/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

'GET /' : 'Main/index',
'GET /login': 'Main/login',
'POST /login' : 'Main/loginp',
'GET /signup': 'Main/signup',
'POST /signup' : 'Main/signupp',
'GET /profile' : 'Main/profile',
'GET /vendorsignup' : 'VendorMain/vendorsignup',
'POST /vendorsignup' : 'VendorMain/vendorsignupp',
'GET /profile' : 'Main/profile' ,
'GET /logout' : 'Main/logout',
'GET /cprofile' : 'Tickets/profile'
};
