import React, { Component } from "react";
import Region from "./Region";
import Game from "./Game";

class Region16Teams extends Region {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.teams = props.teams;
        this.state.games = this.initilizeGames();
    }

    // return array of games
    initilizeGames() {
        const games = [];
        let i = 1;
        // assumes standard 16 team bracket, maybe make this more dynamic?
        for (i; i <= 15; i++){
            games.push({
                gameId: i,
                winner: null
            });
        }

        // play in games
        if(this.getTeamBySeed('11A')) {
            games.push({
                gameId: i,
                winner: null
            });
            i++;
        }

        if(this.getTeamBySeed('16A')) {
            games.push({
                gameId: i,
                winner: null
            });
            i++;
        }

        return games;
    }

    render() {
        let playin11Element = '';
        let playin16Element = '';

        const playinGame11Seed = this.getGameById(16);
        const playinGame16Seed = this.getGameById(17);

        if(playinGame11Seed) {
            playin11Element = <Game game={playinGame11Seed} topTeam={this.getTeamBySeed('11A')} bottomTeam={this.getTeamBySeed('11B')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
        }

        if(playinGame16Seed) {
            playin16Element = <Game game={playinGame16Seed} topTeam={this.getTeamBySeed('16A')} bottomTeam={this.getTeamBySeed('16B')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
        }
    
        return <section id="bracket">
            { playin11Element &&
                <div className="round round-zero">
                    <div className="round-details">Play in<br/></div>
                    {playin11Element}
                    {playin16Element}
                </div>
            }
            <div className="container">
                <div className="split split-one">
                    <div className="round round-one current">
                        <div className="round-details">Round 1<br/></div>
                        <Game game={this.getGameById(1)} topTeam={this.getTeamBySeed('1')} bottomTeam={playinGame16Seed ? this.getWinnerOfGame(17) : this.getTeamBySeed('16')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(2)} topTeam={this.getTeamBySeed('8')} bottomTeam={this.getTeamBySeed('9')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(3)} topTeam={this.getTeamBySeed('5')} bottomTeam={this.getTeamBySeed('12')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(4)} topTeam={this.getTeamBySeed('4')} bottomTeam={this.getTeamBySeed('13')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(5)} topTeam={this.getTeamBySeed('6')} bottomTeam={playinGame11Seed ? this.getWinnerOfGame(16) : this.getTeamBySeed('11')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(6)} topTeam={this.getTeamBySeed('3')} bottomTeam={this.getTeamBySeed('14')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(7)} topTeam={this.getTeamBySeed('7')} bottomTeam={this.getTeamBySeed('10')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(8)} topTeam={this.getTeamBySeed('2')} bottomTeam={this.getTeamBySeed('15')} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>             
                    </div>           
                    <div className="round round-two">
                        <div className="round-details">Round 2<br/></div>     
                        <Game game={this.getGameById(9)} topTeam={this.getWinnerOfGame(1)} bottomTeam={this.getWinnerOfGame(2)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(10)} topTeam={this.getWinnerOfGame(3)} bottomTeam={this.getWinnerOfGame(4)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(11)} topTeam={this.getWinnerOfGame(5)} bottomTeam={this.getWinnerOfGame(6)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(12)} topTeam={this.getWinnerOfGame(7)} bottomTeam={this.getWinnerOfGame(8)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    </div>
                    
                    <div className="round round-three">
                        <div className="round-details">Round 3<br/></div>
                        <Game game={this.getGameById(13)} topTeam={this.getWinnerOfGame(9)} bottomTeam={this.getWinnerOfGame(10)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                        <Game game={this.getGameById(14)} topTeam={this.getWinnerOfGame(11)} bottomTeam={this.getWinnerOfGame(12)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>                
                    </div>

                    <div className="round round-four">
                        <div className="round-details">Round 4<br/></div>
                        <Game game={this.getGameById(15)} topTeam={this.getWinnerOfGame(13)} bottomTeam={this.getWinnerOfGame(14)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    </div>
                </div>
            </div>
        </section>;
    }
}
export default Region16Teams;
