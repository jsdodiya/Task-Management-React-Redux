import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTask } from '../features/taskSlice';



const AddTaskForm = () => {
  const [title, setTaskTitle] = useState('');
  const [description, setTaskDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask ={
        id:nanoid(),
        title,
        description,
        status
    }
    dispatch(addTask(newTask))
    setTaskTitle('')
    setTaskDescription('')
    setStatus('To Do')
  };

  return (
    <div className="mt-6 mb-8 bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto border border-gray-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600">Add New Task</h2>

        <div className="space-y-2">
          <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">Task Title</label>
          <input
            type="text"
            id="Title"
            name="Title"
            value={title}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">Task Description</label>
          <textarea
            id="taskDescription"
            name="Description"
            value={description}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="to do">To Do</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
