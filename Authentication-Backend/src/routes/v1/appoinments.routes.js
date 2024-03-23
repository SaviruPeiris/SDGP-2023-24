const express = require('express');
const router = express.Router();
const appointmentController = require('../../controllers/appoinment.controller'); 

router.post('/', appointmentController.createAppointment);
router.get('/:id', appointmentController.getAppointmentsByUserId);
router.delete('/:id', appointmentController.deleteAppointmentById)
module.exports = router;
