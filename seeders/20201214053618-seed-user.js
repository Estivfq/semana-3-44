'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'grupo44',
            email: 'grupo44@utp.com',
            password: '$2y$12$gHD680XUgIe.Iohy5wFAa.k21ZEcsLWfbBdiSpPUjYhqoS8oZQSzm',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
