import React, { useState } from 'react';
import './styles/sections.css'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

function Sections() {
    const [api, setApi] = useState('nba')
    return(
        <div className='sections-container'>
            <div className='sections'>
                <button className='section' onClick={() => setApi(api => api = 'nba')}> 
                     NBA 
                </button>
                <button className='section' onClick={() => setApi(api => api = 'spotify')}> 
                    Spotify 
                </button>
                <button className='section' onClick={() => setApi(api => api = 'yahoofinance')}> 
                    Yahoo Finance 
                </button>
                <button className='section' onClick={() => setApi(api => api = 'disney')}> 
                    Disney 
                </button>
                <button className='section' onClick={() => setApi(api => api = 'salaries')}> 
                    Salaries
                </button>
                <button className='section' onClick={() => setApi(api => api = 'housing')}> 
                    Housing
                </button>
                
            </div>
            <div className='notebook-container'>
                <JupyterNotebookViewer
                    filePath={"apis/"+(api)+"/analyze.ipynb"} // Or a raw JSON notebook file location online
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

export default Sections;