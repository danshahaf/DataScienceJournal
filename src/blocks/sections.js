import React from 'react'
import './styles/sections.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useForceUpdate from 'use-force-update';

// import JupyterViewer from "react-jupyter-notebook";
// import nba_nb from "./jsons/nba.json"; 
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import spotify_nb from "../../backend/apis/jsons/spotify.json"; 
// import yahoofin_nb from "../../backend/apis/jsons/yahoofin.json"; 


class Sections extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            api: 'nba'
        }
        this.updateNotebook = this.updateNotebook.bind(this)
    }

    updateNotebook(apiname) {
        this.setState({
            api: apiname
        })
        console.log(this.state.api)
        useForceUpdate();
    }

    render() {
        return(
            <div className='sections-container'>
                <div className='sections'>
                    <button className='section' onClick={() => this.updateNotebook('nba')}><a href="/nba"> NBA </a></button>
                    <button className='section' onClick={() => this.updateNotebook('spotify')}><a href="/spotify"> Spotify </a></button>
                    <button className='section' onClick={() => this.updateNotebook('yahoofinance')}><a href="/yahoofin"> Yahoo Finance </a></button>
                </div>   
                <div className='notebook-container'>
                    <JupyterNotebookViewer
                        filePath={"apis/"+(this.state.api)+"analyze.ipynb"} // Or a raw JSON notebook file location online
                        // filePath={"apis/nba/analyze.ipynb"} // Or a raw JSON notebook file location online
                        notebookInputLanguage="python"
                        className="notebook-class"
                        inputCodeDarkTheme={true}
                        outputDarkTheme={true}
                        inputMarkdownDarkTheme={true}
                        showInputLineNumbers={true}
                        showOutputLineNumbers={false}
                        withOnClick={true}
                        hideCodeBlocks={false}
                        hideMarkdownBlocks={false}
                        hideAllOutputs={false}
                        hideAllInputs={false}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    />
                </div>   
            </div>
        )
    }
}

export default Sections;