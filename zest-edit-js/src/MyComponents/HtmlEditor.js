import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import handleFileChange from './ReactFileReader';

export default function HtmlEditor(props) {
    let {
        language,
        value,
        onChange
    } = props
    let [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div>
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
        </div>
    )
}