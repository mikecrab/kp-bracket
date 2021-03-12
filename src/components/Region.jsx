import React, { Component } from "react";
import Game from "./Game";

class Region extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.teams = props.teams;
        this.state.games = this.initilizeGames();
    }

    // return array of games
    initilizeGames() {
        const games = [];
        // assumes standard 16 team bracket, maybe make this more dynamic?
        for (let i = 1; i <= 15; i++){
            games.push({
                gameId: i,
                winner: null
            });
        }

        return games;
    }

    getWinnerOfGame(gameId) {
        const game = this.getGameById(gameId);

        if(game.winner) {
            return this.getTeamBySeed(game.winner);
        } else {
            return {
                seed:null,
                team: null
            }
        }
    }

    getGameById(gameId) {
        return this.state.games.find(game => game.gameId === gameId);
    }

    getTeamBySeed(seed) {
        const team = this.state.teams.find(team => team.seed === seed);

        return team;
    }

    setWinnerOfGame(gameId, teamSeed) {
        const gameIndex = this.state.games.findIndex(game => game.gameId === gameId);

        const games = [...this.state.games];
        const game = {
            ...games[gameIndex],
            winner: teamSeed
        };

        games[gameIndex] = game;

        this.setState({
            games: games
        });
    }

    render() {
        console.log('REMNERS')
      return <section id="bracket">
        <div className="container">
            <div className="split split-one">
                <div className="round round-one current">
                    <div className="round-details">Round 1<br/><span className="date">March 16</span></div>
                    <Game game={this.getGameById(1)} topTeam={this.getTeamBySeed(1)} bottomTeam={this.getTeamBySeed(16)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(2)} topTeam={this.getTeamBySeed(8)} bottomTeam={this.getTeamBySeed(9)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(3)} topTeam={this.getTeamBySeed(5)} bottomTeam={this.getTeamBySeed(12)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(4)} topTeam={this.getTeamBySeed(4)} bottomTeam={this.getTeamBySeed(13)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(5)} topTeam={this.getTeamBySeed(6)} bottomTeam={this.getTeamBySeed(11)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(6)} topTeam={this.getTeamBySeed(3)} bottomTeam={this.getTeamBySeed(14)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(7)} topTeam={this.getTeamBySeed(7)} bottomTeam={this.getTeamBySeed(10)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(8)} topTeam={this.getTeamBySeed(2)} bottomTeam={this.getTeamBySeed(15)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>             
                </div>           
                <div className="round round-two">
                    <div className="round-details">Round 2<br/><span className="date">March 18</span></div>     
                    <Game game={this.getGameById(9)} topTeam={this.getWinnerOfGame(1)} bottomTeam={this.getWinnerOfGame(2)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(10)} topTeam={this.getWinnerOfGame(3)} bottomTeam={this.getWinnerOfGame(4)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(11)} topTeam={this.getWinnerOfGame(5)} bottomTeam={this.getWinnerOfGame(6)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(12)} topTeam={this.getWinnerOfGame(7)} bottomTeam={this.getWinnerOfGame(8)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                </div>
                
                <div className="round round-three">
                    <div className="round-details">Round 3<br/><span className="date">March 22</span></div>
                    <Game game={this.getGameById(13)} topTeam={this.getWinnerOfGame(9)} bottomTeam={this.getWinnerOfGame(10)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                    <Game game={this.getGameById(14)} topTeam={this.getWinnerOfGame(11)} bottomTeam={this.getWinnerOfGame(12)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>                
                </div>

                <div className="round round-four">
                    <div className="round-details">Round 4<br/><span className="date">March 23</span></div>
                    <Game game={this.getGameById(15)} topTeam={this.getWinnerOfGame(13)} bottomTeam={this.getWinnerOfGame(14)} setWinnerOfGame={this.setWinnerOfGame.bind(this)}></Game>
                </div>
            </div>
        </div>
    </section>;
    }
}
export default Region;
