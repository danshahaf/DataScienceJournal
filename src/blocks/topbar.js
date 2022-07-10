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
            </div>
        )
    }
}

export default Topbar;