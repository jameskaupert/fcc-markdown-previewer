import React from 'react';
import Editor from './Editor'
import Previewer from './Previewer'

export default class MarkdownPreviewerApp extends React.Component {
    render() {
        return (
            <div className='markdown-previewer-app'>
              <Editor />
              <Previewer />
            </div>
        )
    }
}
