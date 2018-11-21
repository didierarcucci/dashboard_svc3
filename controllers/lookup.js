const Lookup = require('../models').Lookup;
const LookupValue = require('../models').LookupValue;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    getAll(req, res) {
      return Lookup
        .findAll({
          include: [{
            model: LookupValue,
            as: 'lookupValues'
          }],
          order: [
            'code',
            [{ model: LookupValue, as: 'lookupValues' }, 'value', 'ASC']
          ],
        })
        .then((lookups) => res.status(200).send(lookups))
        .catch((error) => { res.status(400).send(error); });
    },

    getByCode(req, res) {
      return Lookup
        .findOne({
          where: { code: req.params.lookup },
          include: [{
            model: LookupValue,
            as: 'lookupValues'
          }],
          order: [
            'code',
            [{ model: LookupValue, as: 'lookupValues' }, 'value', 'ASC']
          ],
        })
        .then((lookups) => res.status(200).send(lookups))
        .catch((error) => { res.status(400).send(error); });
    }
};