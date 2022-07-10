import React, { useState } from 'react';
import './styles/sections.css'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

function Sections() {
    const [apiname, setCart] = useState();
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const updateApiName = (name) => {
        setCart([apiname, name]);

    }

    return(
        <div className='sections-container'>
            <div className='sections'>
                <button className='section' onClick={() => updateApiName('nba')}> <a href="/nba"> NBA </a></button>
                <button className='section' onClick={() => updateApiName('spotify')}> <a href="/spotify"> Spotify </a></button>
                <button className='section' onClick={() => updateApiName('yahoofinance')}> <a href="/yahoofin"> Yahoo Finance </a></button>
            </div>
            <Notebook value={apiname} />
        </div>
    )
    
}

function Notebook(props) {
    return (
        <div className='notebook-container'>
            <JupyterNotebookViewer
                filePath={"apis/"+(props.value)+"/analyze.ipynb"} // Or a raw JSON notebook file location online
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
    )
}


export default Sections;