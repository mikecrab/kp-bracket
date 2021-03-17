import React, { Component } from "react";
import { regions } from "../data/data";
import Region16Teams from "./Region16Teams";
import RegionFinalFour from "./RegionFinalFour";
import { getData } from 'node-kenpom';

class Bracket extends Component {
    
    constructor(props) {
        super(props);

        this.state = {};
        this.state.regions = regions;
        this.getKP();
    }

    async getKP() {
        let kp = localStorage.getItem('kp')

        if(!kp) {
            kp = await getData();
            kp = JSON.stringify(kp);
            localStorage.setItem('kp', kp);
        }

        kp = JSON.parse(kp);

        this.state.regions.regions = this.state.regions.regions.map(region => {
            return {
                ...region,
                teams: region.teams.map(team => {
                    const kpTeam = kp.teams.find(kpteam => kpteam.Team === team.team);
                    
                    
                    let newTeam = {
                        ...team,
                        adjEM: kpTeam.AdjEM,
                        adjO: kpTeam.AdjO,
                        adjD: kpTeam.AdjD
                    };
                    return newTeam;
                })
            }
        });
    }

    setWinnerOfRegion(regionName, winningTeam) {
        const teamIndex = this.state.regions.finalFour.teams.findIndex(team => team.winnerOfRegion === regionName);

        const teams = [...this.state.regions.finalFour.teams];
        const team = {
            ...teams[teamIndex],
            ...winningTeam
        };

        teams[teamIndex] = team;

        this.setState({
            regions: {
                ...regions,
                finalFour: {
                    teams: teams
                }
            }
        });
    }

    render() {
        const regionElements = this.state.regions.regions.map(element => {
            return <div key={element.region}>
                <Region16Teams region={element.region} teams={element.teams} setWinnerOfRegion={this.setWinnerOfRegion.bind(this)}></Region16Teams>
            </div>
        });

        return <div>
            {regionElements}

            <RegionFinalFour teams={this.state.regions.finalFour.teams}></RegionFinalFour>
        </div>
    }
}
export default Bracket;
