import React from "react";

const Editor = props => (
  <div className="editor-container">
    <h4 className="editor__title">Type it in Markdown</h4>
    <textarea id="editor" className="editor"></textarea>
  </div>
);

export { Editor as default };
