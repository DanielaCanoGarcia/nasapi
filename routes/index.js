const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res. send('Welcome') )

router.post('/datos', controllers.createDato);
router.get('/datos', controllers.getAllDatos);

module.exports = router;
