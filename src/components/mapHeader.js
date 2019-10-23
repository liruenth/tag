import React, { Component } from 'react';
import Link from './link';

class MapHeader extends Component {
    

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="subNav">
                    <div className="container">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars">Menu</i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <Link url="/addKey" name="addKey" />
                                <Link url="/addStep" name="addStep" />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default MapHeader;