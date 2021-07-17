import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { text } from 'body-parser';
import React, {Component} from 'react';
import {render} from 'react-dom';
import '../App.css';

export default class ReactFileReader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fileName: '',
            fileContent: ''
        };
    }

    handleFileChange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = (props) => {
            this.setState({fileName: file.name, fileContent: reader.result});
        }

        reader.onerror = () => {
            console.log('file error', reader.error)
        }
    }

    render() {
        return (
            <>
                <input type="file" onChange = {this.handleFileChange}></input>
                <br/>
                {this.state.fileContent}
            </>
        );
    }
};
