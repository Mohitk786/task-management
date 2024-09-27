import React, { useEffect, useState } from 'react';
import { AddTask, DeleteTask, getAllUsers } from "../services/operations/endpoints"; 
import { useDispatch } from 'react-redux';

const TaskListDetails = ({ taskList }) => {
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState(taskList.tasks);
    const [allUsers, setAllUsers] = useState([]);
    const [formData, setFormData] = useState({
        taskName: "",
        description: "",
        dueDate: "",
        status: "Not Started",
        assignedUser: "",
    });

    // Handle input change for form data
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        dispatch(getAllUsers(setAllUsers));
    }, [dispatch]);

    // Handle adding a new task
    const handleAddTask = async () => {
        dispatch(AddTask(setTasks, tasks, formData, taskList));
    };

    // Handle deleting a task
    const handleDeleteTask = async (taskId) => {
        dispatch(DeleteTask(taskId, tasks, setTasks)); 
    };

    // Function to get the color based on task status
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-500';
            case 'In Progress':
                return 'bg-yellow-500';
            case 'Not Started':
                return 'bg-red-500';
            default:
                return 'bg-gray-400'; 
        }
    };

    return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Manage Tasks</h2>
            <div className="flex flex-wrap mb-4 space-x-2">
                <input
                    className="border p-2 rounded flex-grow min-w-[200px]"
                    type="text"
                    name="taskName"
                    placeholder="Task Title"
                    value={formData.taskName}
                    onChange={handleOnChange}
                />
                <input
                    className="border p-2 rounded flex-grow min-w-[200px]"
                    type="text"
                    name="description"
                    placeholder="Task Description"
                    value={formData.description}
                    onChange={handleOnChange}
                />
                <input
                    className="border p-2 rounded flex-grow min-w-[150px]"
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleOnChange}
                />
                <select
                    className="border p-2 rounded flex-grow min-w-[150px]"
                    name="assignedUser"
                    value={formData.assignedUser}
                    onChange={handleOnChange}
                >
                    <option value="">Assign to User</option>
                    {allUsers.map((user) => (
                        <option key={user._id} value={user._id}>
                            {user.firstName + " " + user.lastName}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleAddTask}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Add Task
                </button>
            </div>

            {/* Render the list of tasks */}
            <ul className="mt-4 space-y-2">
                {tasks.map((task) => (
                    <li key={task._id} className="p-4 border rounded-lg flex justify-between items-center bg-white shadow hover:shadow-lg transition">
                        <div className="flex items-center">
                            <span className={`w-3 h-3 rounded-full ${getStatusColor(task.status)} mr-2`} />
                            <div>
                                <p className="font-bold">Title: {task.name}</p>
                                <p>Description: {task.description}</p>
                                <p>Due Date: {task.dueDate}</p>
                                <p>Status: {task.status}</p>
                                <p>Assigned to: {task.assignedUser || 'Unassigned'}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDeleteTask(task._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListDetails;
