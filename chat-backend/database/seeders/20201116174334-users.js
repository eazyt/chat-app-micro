/*jshint esversion: 10 */
// 'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */


    await queryInterface.bulkInsert('Users', [{
        firstName: 'eazy',
        lastName: 'T',
        email: 'eazyt@homelab.local',
        password: bcrypt.hashSync('password', 10),
        gender: 'male'
      },
      {
        firstName: 'dev',
        lastName: 'Ops',
        email: 'devops@homelab.local',
        password: bcrypt.hashSync('devops', 10),
        gender: 'male'
      },
      {
        firstName: 'admin',
        lastName: 'the boss',
        email: 'admin@homelab.local',
        password: bcrypt.hashSync('admin', 10),
        gender: 'male'
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};