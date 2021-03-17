import React, { Component } from "react";
import Game from "./Game";
import Region from "./Region";

class RegionFinalFour extends Region {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.teams = props.teams;
        this.state.games = this.initilizeGames();
        this.state.champion = null;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.teams !== this.props.teams) {
            this.setState({
                teams: this.props.teams
            });
        }
    }

    // return array of games
    initilizeGames() {
        const games = [];
        let i = 1;

        for (i; i <= 3; i++){
            games.push({
                gameId: i,
                winner: null
            });
        }

        return games;
    }

    getTeamByRegion(region) {
        return this.state.teams.find(team => team.winnerOfRegion === region);
    }

    setChampion(game, teamId) {
        this.setState({
            champion: this.state.teams.find(team => team.teamId === teamId)
        });
    }

    render() {
        return <section id="bracket">
            <div className="container">
                <div className="split split-one">
                    <div className="round round-one current">
                        <div className="round-details">Final Four<br/></div>
                        <Game game={this.getGameById(1)} topTeam={this.getTeamByRegion('west')} bottomTeam={this.getTeamByRegion('east')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(2)} topTeam={this.getTeamByRegion('south')} bottomTeam={this.getTeamByRegion('midwest')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    </div>           
                    <div className="round round-two">
                        <div className="round-details">Finals<br/></div>     
                        <Game game={this.getGameById(3)} topTeam={this.getWinnerOfGame(1)} bottomTeam={this.getWinnerOfGame(2)} setWinnerOfGame={this.setChampion.bind(this)}></Game>
                    </div>
                    <div className="round round-two">
                        <div className="round-details">Champion<br/></div>   
                        <ul className="matchup">
                                <li className="team team-top">
                                    { this.state.champion &&
                                        <span className="team-info">
                                            <span className="seed-info">
                                                {this.state.champion.seed}. {this.state.champion.team}
                                            </span>
                                            <span className="kenpom-info">
                                                <span>
                                                    {this.state.champion.adjEM} EM
                                                </span>
                                                <span>
                                                    {this.state.champion.adjO} O
                                                </span>
                                                <span>
                                                    {this.state.champion.adjD} D
                                                </span>
                                            </span>
                                        </span>
                                    }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>;
    }
}
export default RegionFinalFour;
