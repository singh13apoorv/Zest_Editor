import React from 'react';
import './App.css';
import Tabs from './MyComponents/Tabs';
import './App.css';
import HtmlExecute from './MyComponents/HtmlExecute';
import CssExecute from './MyComponents/CssExecute';
import JSExecute from './MyComponents/JSExecute';
import ReactFileReader from './MyComponents/ReactFileReader';

function App() {

  return (
    <>
      <ReactFileReader/>
      <Tabs> 
        <div label="HTML">
          <HtmlExecute/>
        </div> 
        <div label="CSS">
          <CssExecute/>
        </div> 
        <div label="JavaScript">
          <JSExecute/>
        </div> 
      </Tabs>
    </>
  );
}

export default App;
