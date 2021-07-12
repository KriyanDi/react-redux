import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';

const TodoApp = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <AddTodo />
                <Filters />
                <TodoList />
            </div>
        </Provider>
    );
}

export default TodoApp; 