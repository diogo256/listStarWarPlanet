import React, { Component } from 'react';

import './Loader.css'


class Loader extends Component {
    render(){
        return(
            <div className="overlay">
                <div className="animate">Loading</div>
            </div> 
        )
    }
}

export default Loader