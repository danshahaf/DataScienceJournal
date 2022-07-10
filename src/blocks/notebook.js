import React from 'react'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
class Notebook extends React.Component {
    constructor(props) {
        super(props)
        
    }


    render() {
        return(
            <div className='notebook-container'>
                <JupyterNotebookViewer
                    // filePath={"apis/"+(window.location.href).split("/")[3]+"analyze.ipynb"} // Or a raw JSON notebook file location online
                    filePath={"apis/nba/analyze.ipynb"} // Or a raw JSON notebook file location online
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
}

export default Notebook;