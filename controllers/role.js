const Role = require('../models').Role;
var sequelize = require('sequelize');

module.exports = {
    list(req, res) {
      return Role
        .findAll({
          order: [
            ['updatedAt', 'DESC']
          ]
        })
        .then((roles) => res.status(200).send(roles))
        .catch((error) => { res.status(400).send(error); });
    },
  
    getById(req, res) {
      return Role
        .findById(req.params.id)
        .then((role) => {
          if (!role) {
            return res.status(404).send({
              message: 'Role Not Found',
            });
          }
          return res.status(200).send(role);
        })
        .catch((error) => res.status(400).send(error));
    },
  
    add(req, res) {
      console.log(req.body);
      return Role
        .create({
            name      : req.body.name,
            team      : req.body.team,
            billRate  : req.body.billRate,
            active    : req.body.active,
            default   : req.body.default,
            overhead  : req.body.overhead
        })
        .then((role) => res.status(201).send(role))
        .catch((error) => res.status(400).send(error));
    },
  
    update(req, res) {
      return Role
        .findById(req.params.id)
        .then(role => {
          if (!role) {
            return res.status(404).send({
              message: 'Role Not Found',
            });
          }
          return role
            .update({
                name      : req.body.name,
                team      : req.body.team,
                billRate  : req.body.billRate,
                active    : req.body.active,
                default   : req.body.default,
                overhead  : req.body.overhead
            })
            .then((role) => res.status(200).send(role))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  
    delete(req, res) {
      return Role
        .findById(req.params.id)
        .then(role => {
          if (!role) {
            return res.status(400).send({
              message: 'Role Not Found',
            });
          }
          return role
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    }
  };