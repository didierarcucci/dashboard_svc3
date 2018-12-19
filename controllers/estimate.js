const Estimate = require('../models').Estimate;
var sequelize = require('sequelize');

module.exports = {
    list(req, res) {
      return Estimate
        .findAll({
          order: [
            ['updatedAt', 'DESC']
          ]
        })
        .then((estimates) => res.status(200).send(estimates))
        .catch((error) => { res.status(400).send(error); });
    },
  
    getById(req, res) {
      return Estimate
        .findById(req.params.id)
        .then((estimate) => {
          if (!estimate) {
            return res.status(404).send({
              message: 'Estimate Not Found',
            });
          }
          return res.status(200).send(estimate);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
      console.log(req.body);
      return Estimate
        .create({
            name       : req.body.name,
            inScope    : req.body.inScope,
            outOfScope : req.body.outOfScope,
            assumptions: req.body.assumptions,
            version    : req.body.version,
            active     : req.body.active
        })
        .then((estimate) => res.status(201).send(estimate))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
      console.log(req.body.name);
      return Estimate
        .findById(req.body.id)
        .then(estimate => {

          if (!estimate) {
            return res.status(404).send({
              message: 'Estimate Not Found',
            });
          }

          return estimate
            .update({
                name       : req.body.name,
                inScope    : req.body.inScope,
                outOfScope : req.body.outOfScope,
                assumptions: req.body.assumptions,
                version    : req.body.version,
                active     : req.body.active
            })
            .then((estimate) => res.status(200).send(estimate))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return Estimate
        .findById(req.params.id)
        .then(estimate => {
          if (!estimate) {
            return res.status(400).send({
              message: 'Estimate Not Found',
            });
          }
          return estimate
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    }
  };