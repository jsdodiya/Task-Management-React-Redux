import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const EditTask = ({ task }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTaskTitle] = useState(task.title || '');
    const [description, setTaskDescription] = useState(task.description || '');
    const [status, setStatus] = useState(task.status || 'to do');
    const dispatch = useDispatch();

    const handleSave = () => {
        // Dispatch an action to update the task in the store
        dispatch({
            type: 'UPDATE_TASK',
            payload: { id: task.id, title, description, status },
        });
        setIsEdit(false);
    };

    const handleCancel = () => {
        // Reset the fields to the original task values
        setTaskTitle(task.title);
        setTaskDescription(task.description);
        setStatus(task.status);
        setIsEdit(false);
    };

    return (
        <div>
            {isEdit ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-lg font-bold mb-4">Edit Task</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                            >
                                <option value="to do">To Do</option>
                                <option value="in progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-200"
                    onClick={() => setIsEdit(true)}
                >
                    Edit
                </button>
            )}
        </div>
    );
};

export default EditTask;
