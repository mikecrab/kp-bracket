import React, { Component } from "react";
import { regions } from "../data/data";
import Region from "./Region";

class Bracket extends Component {
    
    constructor(props) {
        super(props);

        this.state = {};
        this.state.regions = regions;
    }

    render() {
        return <div>
            <div>
                <Region teams={this.state.regions.north.teams}></Region>
            </div>
            <div>
                <Region teams={this.state.regions.north.teams}></Region>
            </div>
            <div>
                <Region teams={this.state.regions.north.teams}></Region>
            </div>
            <div>
                <Region teams={this.state.regions.north.teams}></Region>
            </div>
        </div>
    }
}
export default Bracket;
