import React from 'react';
import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task
                    onToggle={onToggle}
                    onDelete={onDelete}
                    key={index}
                    task={task}
                />
            ))}
        </>
    );
};

export default Tasks;
