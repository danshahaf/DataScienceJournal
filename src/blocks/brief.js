import React from 'react'
import './styles/brief.css'

class Brief extends React.Component {
    constructor(props) {
        super(props)
        
    }


    render() {
        return(
            <div className='brief'>
                <p>
                    This is my data science journal. 
                    <br></br>
                    After graduating in May 2022, I found myself with more free time than expected. 
                    <br></br>
                    I decided to take advantage and use it to strengthen the skills I had gained in my time at Boston University.
                </p>

            </div>
        )
    }
}

export default Brief;