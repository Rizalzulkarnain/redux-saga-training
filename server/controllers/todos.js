const db = require('../models');
const Todo = db.todos;

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();

    if (!todos) {
      res.status(404).json({
        success: false,
        message: `Todo not found with id of ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || 'Some error occurred while retrieving todos.',
    });
  }
};

exports.singleTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findByPk(id);
    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || `Error retrieving Tutorial with id: ${id}`,
    });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    };

    const addTodo = await Todo.create(todo);

    if (!addTodo) {
      res.status.json({
        success: false,
        message: 'error when adding todo!',
      });
    }

    res.status(201).json({
      success: true,
      data: addTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || 'Some error occurred while creating the todo.',
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updateTodo = await Todo.update(req.body, {
      where: { id: id },
    });

    if (!updateTodo) {
      res.status(404).json({
        success: false,
        error: error.message,
        message: `Cannot update todo with id=${id}. Maybe todo was not found or req.body is empty!`,
      });
    }

    res.status(201).json({
      success: true,
      data: updateTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await Todo.destroy({ where: { id: id } });

    if (!deleteTodo) {
      res.status(404).json({
        success: false,
        message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`,
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || `Could not delete Tutorial with id=${id}`,
    });
  }
};
