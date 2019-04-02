const EstimateComponent = require('../models').EstimateComponent;
const ComponentBreakdown = require('../models').ComponentBreakdown;
const LookupValue = require('../models').LookupValue;

var sequelize = require('sequelize');

module.exports = {
    /*list(req, res) {
      return EstimateComponent
        .findAll({
            where: { estimateId: req.params.estimateId }
        })
        .then((components) => res.status(200).send(components))
        .catch((error) => { res.status(400).send(error); });
    },*/
  
    getById(req, res) {
      return EstimateComponent
        .findById(
          req.params.id,
          { 
            include: [{ 
              model: ComponentBreakdown,
              as: 'breakdown',
              include: [{
                model: LookupValue,
                as: 'phase'
              }]
            }],
            order: [
              [ { model: ComponentBreakdown, as: 'breakdown' }, 'phaseId', 'asc' ]
            ]
          }
        )
        .then((component) => {
          if (!component) {
            return res.status(404).send({
              message: 'Component Not Found',
            });
          }
          return res.status(200).send(component);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
      console.log(req.body);
      return EstimateComponent
        .create({
            name       : req.body.name,
            complexity : req.body.complexity,
            notes      : req.body.notes,
            estimateId : req.body.estimateId
        })
        .then((component) => res.status(201).send(component))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
      console.log(req.body.name);
      return EstimateComponent
        .findById(req.body.id)
        .then(component => {
          if (!component) {
            return res.status(404).send({
              message: 'Component Not Found',
            });
          }

          return component
            .update({
                name       : req.body.name,
                complexity : req.body.complexity,
                notes      : req.body.notes
            })
            .then((component) => res.status(200).send(component))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return EstimateComponent
        .findById(req.params.id)
        .then(component => {
          if (!component) {
            return res.status(400).send({
              message: 'Component Not Found',
            });
          }
          return component
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    }
  };