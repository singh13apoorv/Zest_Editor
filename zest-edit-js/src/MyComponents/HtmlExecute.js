import React, { useState, useEffect } from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import JSEditor from './JSEditor';
import useLocalStorage from '../hooks/useLocalStorage';
import Tabs from './Tabs';
import Tab from './Tab';
import PropTypes from 'prop-types';
import CssExecute from './CssExecute';
import ReactFileReader from './ReactFileReader';

export default function HtmlExecute(props) {
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script type="text/javascript">${js}</script>
                </html>
            `)
        }, 250)
    
        return () => clearTimeout(timeout)
    }, [html, css, js])
    
    return (
        <>
            <div>
                <HtmlEditor
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
                />
            </div>
            <div className="pane">
                <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="700px"
                />
            </div>
        </>
    )
}



