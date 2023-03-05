'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        postcode: '12345',
        contactPhoneNumber: '123-456-7890',
        email: 'johndoe@example.com',
        username: 'johndoe',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        address: '456 Elm St',
        postcode: '67890',
        contactPhoneNumber: '456-789-0123',
        email: 'janedoe@example.com',
        username: 'janedoe',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
