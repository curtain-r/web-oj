import { UnControlled as CodeMirror } from 'react-codemirror2'
import { Resizable } from 're-resizable';

import 'codemirror/lib/codemirror';


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/addon/selection/active-line'

const ResizeCodeMirror = props => {
  return (
    <Resizable
      defaultSize={{ width: 320, height: 200, }}
    >
      <CodeMirror
        value=''
        options={{
          mode: 'javascript',
          theme: 'material',
          styleActiveLine: true,
          lineNumbers: true
        }}
        onChange={(editor, data, value) => { }}
      />
    </Resizable>
  )
}
export default ResizeCodeMirror;