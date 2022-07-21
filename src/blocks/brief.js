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
                    Welcome to my <b>data science journal!</b>
                    <br></br>
                    <br></br>
                    After graduating in May 2022, I found myself with more free time than expected. 
                    <br></br>
                    I decided to take advantage and use it to strengthen the skills I had gained in my time at Boston University, and after finding a list of interesting REST APIs, I decided to try some things for fun!
                    <br></br>
                    <br></br>
                    Check out my journal and different API data analytics by choosing an API from the list below! I used various methods, such as NLP, Regression, Classification, Neural Networks, and Anomaly  Detection
                    <br></br>
                    <br></br>
                    <b>Have Fun!</b>
                </p>

            </div>
        )
    }
}

export default Brief;