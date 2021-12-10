const {Router} = require('express');

const router = Router();

// controllers
const {getTypePets, createTypePets} = require('../controllers/controllers.TypePets');

router.get('/', getTypePets);
router.post('/create', createTypePets);

module.exports = router;