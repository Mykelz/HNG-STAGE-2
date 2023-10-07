const express = require('express');

const { body } = require('express-validator');
 
const nameController = require('../controller/person')

const router = express.Router();



router.post('/api', [
    body('name').isString()
],  nameController.postName)

router.get('/api/:user_id', nameController.getPerson)

router.put('/api/:user_id', [
    body('*').isString()
], nameController.updatePerson)

router.delete('/api/:user_id', nameController.deletePerson)

module.exports = router;