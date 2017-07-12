import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Maps.css'

class Maps extends Component {
    render() {
        return (
            <div className="maps">
                <img 
                    className="maps-logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Maps.svg/2000px-Google_Maps.svg.png"
                    alt="maps logo"
                />
            </div>
        )
    }
}

export default Maps

