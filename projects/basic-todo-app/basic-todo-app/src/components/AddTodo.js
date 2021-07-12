import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = (props) => {
    const [content, setContent] = useState("");

    return (
        <div>
            <div className="ui input">
                <input
                    type="text"
                    placeholder="Add Todo..."
                    onChange={event => setContent(event.target.value)}
                    value={content}
                />
            </div>
            <span>
                <button
                    className="ui primary button"
                    onClick={content ? { addTodo(content) setContent("")}: }
                >
                    Save
                </button>
            </span>
        </div>
    );
}

export default connect(null, { addTodo })(AddTodo);