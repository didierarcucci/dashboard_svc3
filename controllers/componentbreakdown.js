const ComponentBreakdown = require('../models').ComponentBreakdown;
const LookupValue = require('../models').LookupValue;

module.exports = {
    list(req, res) {
        return ComponentBreakdown
            .findAll({})
            .then((rows) => res.status(200).send(rows))
            .catch((error) => { res.status(400).send(error); });
    }
};