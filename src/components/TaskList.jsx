import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../features/taskSlice'

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    if (loading) {
        return <p className="text-center text-xl">Tasks Loading...</p>
    }
    if (error) {
        return <p className="text-center text-xl text-red-500">There is an error {error}</p>
    }

    return (
        <>
            
            <div className="container mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-xl">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Tasks</h2>
                    <ul className="space-y-6">
                        {tasks.map((task) => (
                            <li key={task.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border-l-4 border-blue-500">
                                <div className="flex flex-col md:flex-row justify-between items-start">
                                    <div className="md:w-2/3 space-y-2">
                                        <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                                        {task.description && <p className="text-gray-600">{task.description}</p>}
                                        <p className="mt-2 text-sm text-gray-500">Status: 
                                            <span className="italic underline font-semibold text-blue-500">{task.status}</span>
                                        </p>
                                    </div>
                                    <div className="flex space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-200">Edit</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-200">Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TaskList
