const db = require('../models');
const Todo = db.todos;
const Op = db.sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 4;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: todos } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, todos, totalPages, currentPage };
};

exports.getTodos = async (req, res) => {
  try {
    const { page, size, title } = req.query;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    const { limit, offset } = getPagination(page, size);

    const todo = await Todo.findAndCountAll({
      where: condition,
      limit,
      offset,
    });

    const response = await getPagingData(todo, page, limit);
    res.status(200).json({
      success: true,
      count: response.length,
      data: response,
    });

    if (!response) {
      res.status(404).json({
        success: false,
        message: `Todo not found with id of ${req.params.id}`,
      });
    }
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
    Response.status(500).json({
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

exports.deleteAllTodo = async (req, res) => {
  try {
    await Todo.destroy({ where: {}, truncate: false });
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error:
        error.message || `Some error occurred while removing all tutorials.`,
    });
  }
};

exports.getAllDoneTodo = async (req, res) => {
  try {
    const allTodoDone = await Todo.findAll({ where: { done: true } });

    if (!allTodoDone) {
      res.status(404).json({
        success: false,
        message: `Cannot find Todo is done. Maybe was not found!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error:
        error.message || `Some error occurred while retrieving todo is done.`,
    });
  }
};
