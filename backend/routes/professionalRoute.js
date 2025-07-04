const express = require('express');
const router = express.Router();

const profController = require('../controllers/professionalController');

//GET All professional list
router.get('/', profController.getProfessionalList);

module.exports = router;