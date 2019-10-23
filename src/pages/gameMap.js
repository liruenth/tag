import React, { Component } from 'react';
import Post from '../components/post';
import MapHeader from '../components/mapHeader';
//import './main.css';

class GameMap extends Component {
  render() {
    /*
    header shows: # unlinked steps, # total steps, # unused keys, # keys, gameName, gameSubtitle, addSteps btn, addKeys btn, preveiw btn, publish btn
        publish btn will warn that there are unused steps/keys
    mainContent shows: the map
    */
    return (
        <div className="GameMap">
            {/* <MapHeader /> */}
            <div className="clearfix">
                Map of game
            </div>
        </div>
    );
  }
}

export default GameMap;