const { v4: uuidv4 } = require('uuid');
const { tasks } = require('../utils/store');

exports.createTask = (req, res) => {
  const { title, description, status } = req.body;
  const newTask = {
    id: uuidv4(),
    title,
    description,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.getAllTasks = (req, res) => {
  const { status, title } = req.query;

  let filteredTasks = tasks;
  if (status) {
    filteredTasks = filteredTasks.filter(t => t.status === status);
  }
  if (title) {
    filteredTasks = filteredTasks.filter(t => t.title.includes(title));
  }

  // Pagination (optional)
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || tasks.length;
  const startIndex = (page - 1) * limit;
  const paginated = filteredTasks.slice(startIndex, startIndex + limit);

  res.json(paginated);
};

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description, status } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;
  task.updatedAt = new Date().toISOString();

  res.json(task);
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });
  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
};
