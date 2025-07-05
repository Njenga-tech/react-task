import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './button';
import Card from './card';
import TaskItem from './TaskItem';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <Card>
        <h2 className="text-2xl font-bold mb-2">📝 Task Manager</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a task..."
            className="flex-1 p-2 border rounded"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex gap-2 mb-4">
          <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>
            All
          </Button>
          <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>
            Active
          </Button>
          <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>
            Completed
          </Button>
        </div>

        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          <ul className="space-y-2">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleComplete(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
