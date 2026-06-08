const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  toggleTaskStatus,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const { validateTask } = require('../middleware/validate');

// All task routes are protected
router.use(protect);

// GET  /api/tasks       — get all tasks (optional ?status=pending|completed)
// POST /api/tasks       — create a task
router.route('/').get(getTasks).post(validateTask, createTask);

// PUT    /api/tasks/:id         — update task
// DELETE /api/tasks/:id         — delete task
router.route('/:id').put(validateTask, updateTask).delete(deleteTask);

// PATCH /api/tasks/:id/toggle  — toggle status
router.patch('/:id/toggle', toggleTaskStatus);

module.exports = router;
