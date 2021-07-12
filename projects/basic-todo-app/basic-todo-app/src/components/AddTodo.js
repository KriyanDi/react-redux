import React from 'react';

const AddTodo = () => {
    return (
        <div>
            <div className="ui input">
                <input type="text" placeholder="Add Todo..."/>
            </div>
            <span>
                <button class="ui primary button">Save</button>
            </span>
        </div>
    );
}

export default AddTodo;