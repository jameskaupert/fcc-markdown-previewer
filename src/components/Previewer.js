import React from "react";
import marked from "marked";

const Previewer = props => (
  <div className="previewer-container">
    <h4 className="previewer__title">See it rendered</h4>
    <div
      id="preview"
      className="previewer"
      dangerouslySetInnerHTML={{ __html: marked(props.editorText) }}
    />
  </div>
);

export { Previewer as default };
