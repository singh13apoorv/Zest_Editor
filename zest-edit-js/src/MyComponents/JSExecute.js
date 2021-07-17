import React, { useState, useEffect } from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import JSEditor from './JSEditor';
import useLocalStorage from '../hooks/useLocalStorage';
import Tabs from './Tabs';
import Tab from './Tab';
import PropTypes from 'prop-types';

export default function JSExecute(props) {
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
                <script type="text/javascript">${String(js)}</script>
                </html>
            `)
        }, 250)
    
        return () => clearTimeout(timeout)
    }, [html, css, js])
    
    return (
        <>
            <div>
                <JSEditor
                language="javascript"
                displayName="JS"
                value={js}
                onChange={setJs}
                />
            </div>
            <div>
                <iframe
                srcDoc={srcDoc}
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="700px"
                />
            </div>
        </>
    )
}

