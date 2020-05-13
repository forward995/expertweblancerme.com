import React, { Component } from 'react';
// import { MapContainer, AnimationImage } from '../components'

class LandingPage extends Component {
    render() {
        return (
            <div className="row landing-page">
                <div className="col-md-6 col-sm-12 imageContainer">
                    {/* <AnimationImage /> */}
                </div>
                <div className="col-md-6 col-sm-12 mapcontainer">
                    {/* <MapContainer isMarkerShown/> */}
                </div>
            </div>                            
        );
    }
}

export { LandingPage };