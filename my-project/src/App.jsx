import React, { useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, deleteTask } from '../src/redux/taskSlice';


const App = () => {
  const [newTask, setNewTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newTask) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleEdit = (index) => {
    setEditId(index);
    setEditText(tasks[index]);
  };

  const handleSave = (index) => {
    dispatch(editTask({ index, newText: editText }));
    setEditId(null);
    setEditText('');
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition-all duration-500">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Task Manager</h1>
      <div className="flex mb-6">
        <input
          className="border-2 border-blue-300 rounded-xl p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white p-3 rounded-xl ml-4 hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </div>
      <div className="space-y-4">
        {tasks.map((item, index) => (
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-md" key={index}>
            {editId === index ? (
              <input
                className="border-2 border-green-300 rounded-xl p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className="text-lg font-medium text-gray-700">{item}</span>
            )}
            <div className="flex space-x-3">
              {editId === index ? (
                <button
                  onClick={() => handleSave(index)}
                  className="bg-green-500 ml-2 text-white p-2 rounded-xl hover:bg-green-600 transition duration-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white p-2 rounded-xl hover:bg-yellow-500 transition duration-300"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded-xl hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}


export default App;
