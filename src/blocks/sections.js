import React from 'react'
import './styles/sections.css'

class Sections extends React.Component {
    constructor(props) {
        super(props)
        
    }


    render() {
        return(
            <div className='sections'>
                <button className='section'> NBA </button>
                <button className='section'> Spotify </button>
                <button className='section'> Yahoo Finance </button>
            </div>
        )
    }
}

export default Sections;