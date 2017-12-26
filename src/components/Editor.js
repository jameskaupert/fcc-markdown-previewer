import React from "react";

export default class Editor extends React.Component {
  state = {
    editorText: 'puppies are da best!'
  }
  render() {
    return (
      <div className="editor-container">
        <h4 className="editor__title">Type it in Markdown</h4>
        <textarea
          id="editor"
          className="editor"
        >
          {this.state.editorText}
        </textarea>
      </div>
    );
  }
}
