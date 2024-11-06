import express from 'express';

const PORT = 3000;
const app = express();

let todos = [];

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (task) {
        const newTask = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            text: task,
            completed: false,
            important: false,
        };
        todos.push(newTask);
        res.status(201).json(newTask);
    } else {
        res.status(400).json({ error: 'Task is required' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        const removed = todos.splice(index, 1);
        res.json({ message: 'Task deleted', removed, todos });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.patch('/todos/:id/complete', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        res.json({ message: 'Task status updated', task: todo });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.patch('/todos/:id/important', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.important = !todo.important;
        res.json({ message: 'Task priority updated', task: todo });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
