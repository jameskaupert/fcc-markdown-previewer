import React from "react";

const Editor = props => (
  <div className="editor-container">
    <h4 className="editor__title">Type it in Markdown</h4>
    <textarea
      id="editor"
      className="editor"
      value={props.value}
      onChange={props.handleEditText}
    />
  </div>
);

export { Editor as default };
