const kpi = require('../models').KPIView;
var sequelize = require('sequelize');

module.exports = {
    list(req, res) {
        return kpi
            .findAll()
            .then((rows) => res.status(200).send(rows))
            .catch((error) => { res.status(400).send(error); });
    }
};