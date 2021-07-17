import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import ReactFileReader from './ReactFileReader';

export default function JSEditor(props) {
    let {
        language,
        value,
        onChange
    } = props
    let [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(String(value))
    }

    return (
        <>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={String(value)}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
            }}
        />
        </>
    )
}