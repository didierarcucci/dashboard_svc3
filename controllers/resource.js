const Resource = require('../models').Resource;
var sequelize = require('sequelize');

module.exports = {
    list(req, res) {
      return Resource
        .findAll({
          order: [
            ['updatedAt', 'DESC']
          ]
        })
        .then((resources) => res.status(200).send(resources))
        .catch((error) => { res.status(400).send(error); });
    },
  
    getById(req, res) {
      return Resource
        .findById(req.params.id)
        .then((resource) => {
          if (!resource) {
            return res.status(404).send({
              message: 'Resource Not Found',
            });
          }
          return res.status(200).send(resource);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
      console.log(req.body);
      return Resource
        .create({
          resourceName       : req.body.resourceName,
          team               : req.body.team,
          organization       : req.body.organization,
          resourceType       : req.body.resourceType,
          role               : req.body.role,
          techStack          : req.body.techStack,
          billRate           : req.body.billRate,
          location           : req.body.location,
          capitalizationRatio: req.body.capitalizationRatio,
          budgetedFlag       : req.body.budgetedFlag,
          loadHoursFlag      : req.body.loadHoursFlag,
          activeFlag         : req.body.activeFlag,
          startDateActive    : req.body.startDateActive,
          endDateActive      : req.body.endDateActive
        })
        .then((resource) => res.status(201).send(resource))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
      return Resource
        .findById(req.params.id)
        .then(resource => {
          if (!resource) {
            return res.status(404).send({
              message: 'Resource Not Found',
            });
          }
          return resource
            .update({
              resourceName       : req.body.resourceName,
              team               : req.body.team,
              organization       : req.body.organization,
              resourceType       : req.body.resourceType,
              role               : req.body.role,
              techStack          : req.body.techStack,
              billRate           : req.body.billRate,
              location           : req.body.location,
              capitalizationRatio: req.body.capitalizationRatio,
              budgetedFlag       : req.body.budgetedFlag,
              loadHoursFlag      : req.body.loadHoursFlag,
              activeFlag         : req.body.activeFlag,
              startDateActive    : req.body.startDateActive,
              endDateActive      : req.body.endDateActive
            })
            .then((resource) => res.status(200).send(resource))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return Resource
        .findById(req.params.id)
        .then(resource => {
          if (!resource) {
            return res.status(400).send({
              message: 'Resource Not Found',
            });
          }
          return resource
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    countByRole(req, res) {
      return Resource
        .findAll({
          attributes: ['role', [sequelize.fn('count', sequelize.col('id')), 'countResources']],
          group: ['role'],
          where: {
            activeFlag: true
            //role: ['TIBCO Architect', 'TIBCO Sr. Designer', 'TIBCO Designer', 'TIBCO Developer', '.Net Sr. Developer', '.Net Developer', 'Spotfire Developer']
          },
          order: [
            [sequelize.fn('count', sequelize.col('id')), 'DESC']
          ]
        })
        .then((resources) => res.status(200).send(resources))
        .catch((error) => { res.status(400).send(error); });
    },

    countByTechStack(req, res) {
      return Resource
        .findAll({
          attributes: ['techStack', [sequelize.fn('count', sequelize.col('id')), 'countResources']],
          group: ['techStack'],
          where: {
            activeFlag: true
            //techStack: ['Integration', '.NET', 'Architecture', 'Spotfire']
          },
          order: [
            [sequelize.fn('count', sequelize.col('id')), 'DESC']
          ]
        })
        .then((resources) => res.status(200).send(resources))
        .catch((error) => { res.status(400).send(error); });
    },

    countByLocation(req, res) {
      return Resource
        .findAll({
          attributes: ['location', [sequelize.fn('count', sequelize.col('id')), 'countResources']],
          group: ['location'],
          where: {
            activeFlag: true
          },
          order: [
            [sequelize.fn('count', sequelize.col('id')), 'DESC']
          ]
        })
        .then((resources) => res.status(200).send(resources))
        .catch((error) => { res.status(400).send(error); });
    },

    countByTeam(req, res) {
      return Resource
        .findAll({
          attributes: ['team', [sequelize.fn('count', sequelize.col('id')), 'countResources']],
          group: ['team'],
          where: {
            activeFlag: true
            //techStack: ['Integration', '.NET', 'Architecture', 'Spotfire']
          },
          order: [
            [sequelize.fn('count', sequelize.col('id')), 'DESC']
          ]
        })
        .then((resources) => res.status(200).send(resources))
        .catch((error) => { res.status(400).send(error); });
    },

    countActive(req, res) {
      return Resource
        .findAll({
          attributes: [[sequelize.fn('count', sequelize.col('id')), 'countResources']],
          where: {
            activeFlag: true
            //team: ['Integration Solutions Delivery', 'Integration Solutions'],
            //techStack: ['Integration', '.NET', 'Architecture', 'Spotfire']
          }
        })
        .then((resources) => res.status(200).send(resources))
        .catch((error) => { res.status(400).send(error); });
    }
  };