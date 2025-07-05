export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center p-2 bg-white dark:bg-gray-700 rounded shadow">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
      </div>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">Delete</button>
    </li>
  );
}
