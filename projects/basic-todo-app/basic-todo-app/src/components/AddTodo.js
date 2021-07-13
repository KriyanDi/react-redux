import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = (props) => {
  const [content, setContent] = useState("");

  const saveHandlerOnClick = (content) => {
    props.addTodo(content);
    setContent("");
  };

  return (
    <div className="field">
      <div className="ui segment">
        <div className="ui action input">
          <input
            type="text"
            placeholder="Add Todo..."
            onChange={(event) => setContent(event.target.value)}
            value={content}
          />
          <button
            className="ui primary button"
            onClick={content ? () => saveHandlerOnClick(content) : () => {}}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
