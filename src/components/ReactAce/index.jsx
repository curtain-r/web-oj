import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import "ace-builds/src-noconflict/ext-language_tools"
const ReactAce = () => {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
    <AceEditor
      mode='javascript'
      theme='github'
      name='UNIQUE_ID_OF_DIV'
      onChange={onChange}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      }}
    />
  )
}

export default ReactAce