import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';
import TodoList from './components/TodoList';

const TodoApp = () => {
    return (
        <div>
            <Header />
            <AddTodo />
            <Filters />
            <TodoList />
     </div>
    );
}

export default TodoApp; 