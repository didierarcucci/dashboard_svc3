var express = require('express');
var router = express.Router();

const resourceController = require('../controllers').resource;
const lookupController   = require('../controllers').lookup;
const actualController   = require('../controllers').actual;
const kpicontroller      = require('../controllers').kpi;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* CRUD functions for resource controller. */
router.get   ('/api/resource'    , resourceController.list   );
router.get   ('/api/resource/:id', resourceController.getById);
router.post  ('/api/resource'    , resourceController.add    );
router.patch ('/api/resource/:id', resourceController.update );
router.delete('/api/resource/:id', resourceController.delete );

/* Resource KPIs */
router.get   ('/api/resourcecountbyrole', resourceController.countByRole);
router.get   ('/api/resourcecountbytechstack', resourceController.countByTechStack);
router.get   ('/api/resourcecountactive', resourceController.countActive);
router.get   ('/api/resourcecountbylocation', resourceController.countByLocation);
router.get   ('/api/resourcecountbyteam', resourceController.countByTeam);

/* CRUD functions for lookup controller. */
router.get   ('/api/lookup'        , lookupController.getAll);
router.get   ('/api/lookup/:lookup', lookupController.getByCode);

/* actuals */
router.get  ('/api/actuals', actualController.list);

/* Dashboard KPIs */
router.get  ('/api/dashboard/kpis', kpicontroller.list);

module.exports = router;
