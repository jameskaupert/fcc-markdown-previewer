import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";

const initialText = `
# Header 1 Preview

## Header 2 Preview

[Link Preview](https://www.google.com)

Some inline code \`hello world\` for your enjoyment

A code block
  \`\`\`
  const helloMarkdown = () => {
      return 'Hello, Markdown'
  }
  \`\`\`

Some list items:
- Item 1
- Item 2
- Item 3

Block Quote
> This is
> a blockquote
> for your enjoyment

Some **bold** and *italicized* text

Images:
![dachschund](http://images2.fanpop.com/image/photos/13600000/-Dachshunds-dachshunds-13634827-1680-1050.jpg)
`

export default class MarkdownPreviewerApp extends React.Component {
  state = {
    value: initialText
  };

  handleEditText = e => {
    const value = e.target.value;
    this.setState(() => ({ value }));
  };
  componentDidMount() {
      console.log(this.state.value);
  }
  render() {
    return (
      <div className="markdown-previewer-app">
      <Editor
        value={this.state.value}
        handleEditText={this.handleEditText}
      />
      <Previewer
        editorText={this.state.value}
      />
      </div>
    );
  }
}
