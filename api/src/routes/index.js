// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = require('express').Router();
const getDogs = require('../controllers/getDogs')
const getDogs = require('../controllers/getDogsById')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs);
router.get('/dogs/idRaza', getDogById)
router.get('/dogs/name?=', getDogByName)
router.post('/dogs', postDogs);
router.get('/temperaments', getTemperaments);

module.exports = router;
