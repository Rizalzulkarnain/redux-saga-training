const express = require('express');
const {
  getTodos,
  addTodo,
  singleTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
  getAllDoneTodo,
} = require('../controllers/todos');

const router = express.Router();

router.get('/todos', getTodos);
router.get('/todos/:id', singleTodo);
router.get('/todos/done', getAllDoneTodo);
router.post('/todos', addTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);
router.delete('/todos', deleteAllTodo);

module.exports = router;
