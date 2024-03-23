const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const appointmentRoutes = require('./appoinments.routes'); 

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/appointments', appointmentRoutes); 

module.exports = router;
