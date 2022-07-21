import React from 'react'
import './styles/topbar.css'

class Topbar extends React.Component {
    constructor(props) {
        super(props)
        
    }


    render() {
        return(
            <div className='topbar'>
                <h1> Data Sciece Journal </h1>
                <h4> by <a class = "link"  href = "https://shahaf-dan.com">Shahaf Dan</a></h4>
            </div>
        )
    }
}

export default Topbar;