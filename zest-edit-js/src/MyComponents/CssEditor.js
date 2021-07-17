import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import ReactFileReader from './ReactFileReader';

export default function CssEditor(props) {
    const {
        language,
        value,
        onChange
    } = props
    let [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
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