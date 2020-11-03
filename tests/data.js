const faker = require('faker');

var randomUserName = faker.internet.userName().replace('.',''); 
var randomEmail = faker.internet.email();
var randomName = faker.name.findName();
var randomCompany = faker.company.companyName();

module.exports = {
    randomUserName,
    randomEmail,
    randomName,
    randomCompany
}