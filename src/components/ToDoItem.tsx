import React, { Component, ReactNode } from "react";

type TodoItemProps = {
    name: string,
    completed: boolean,
    onDelete: () => void,
    onComplete: () => void
};

type ItemsListProps = {
    children?: ReactNode
}

export const ToDoItem: React.FC<TodoItemProps> = ({ name, completed, onDelete, onComplete }) => {
    return (
        <div className="ToDoItem">
            <p className={`todoText ${(completed) ? 'checkedTodo': ''}`}>{name}</p>
            <div className="ToDoItemButtons">
                <input type="checkbox" name="completedbox" onClick={onComplete} checked={completed}/>
                <button onClick={onDelete}>Deletar</button>
            </div>
        </div>
    )
}

export const ItemsList: React.FC<ItemsListProps> = ({ children }) => {
    return (
        <div className="ItemsList">
            {children}
        </div>
    )
}