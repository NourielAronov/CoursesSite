const express = require('express');
const router = express.Router();

// Require controller modules.
const courses_controller = require('../controllers/coursesController');

// GET request for one Course.
router.get('/course/:id', courses_controller.course);

// GET request for all Courses.
router.get('/all_courses', courses_controller.courses_list);

module.exports = router;

