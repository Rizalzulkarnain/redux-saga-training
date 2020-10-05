const express = require('express');
const {
  getTodos,
  addTodo,
  singleTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos');

const router = express.Router();

router.get('/todos', getTodos);
router.get('/todos/:id', singleTodo);
router.post('/todos', addTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
