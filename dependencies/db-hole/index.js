const { Sequelize, Model, Datatypes } = require('sequelize')

class DbHole {
    constructor() {
        this.connect().then(console.log('all connected hoipefully'));
    }

    async connect() {
        this.connection = new Sequelize('postgres://jessicaplant@localhost:5432/jessicaplant')
        try {
            await this.connection.authenticate();
            console.log('Connection has been established successfully.');
            return true;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            return false
        }
    }
}

module.exports = DbHole