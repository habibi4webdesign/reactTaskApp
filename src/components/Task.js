import React from 'react';
import { FaTrash } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task)}
        >
            <h3>
                {task.text}
                <FaTrash
                    onClick={() => onDelete(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
