const Actual = require('../models').ActualsView;
var sequelize = require('sequelize');

module.exports = {
    list(req, res) {
        return Actual
            .findAll({
                order: [
                    ['day', 'DESC']
                ],
                limit: 1000
            })
            .then((rows) => res.status(200).send(rows))
            .catch((error) => { res.status(400).send(error); });
    }
};