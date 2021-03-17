import React, { Component } from "react";

class Game extends Component {

    constructor(props) {
        super(props);
        this.setWinnerOfGame=this.setWinnerOfGame.bind(this);
        this.state = {};
        this.state.game = props.game;
        this.state.topTeam = props.topTeam;
        this.state.bottomTeam = props.bottomTeam;
    }

    componentDidUpdate(prevProps) {
        if (this.props.topTeam && this.props.topTeam.seed !== prevProps.topTeam.seed) {
            this.setState({
                topTeam: this.props.topTeam
            });
        }

        if (this.props.bottomTeam && this.props.bottomTeam.seed !== prevProps.bottomTeam.seed) {
            this.setState({
                bottomTeam: this.props.bottomTeam
            });
        }
    }

    setWinnerOfGame(teamId) {
        this.props.setWinnerOfGame(this.state.game.gameId, teamId)
    }

    render() {
        return <ul className="matchup">
            <li onClick={() => this.setWinnerOfGame(this.state.topTeam.teamId)} className="team team-top">
                { this.state.topTeam.team &&
                    <span className="team-info">
                        <span className="seed-info">
                            {this.state.topTeam.seed}. {this.state.topTeam.team}
                        </span>
                        <span className="kenpom-info">
                            <span>
                                {this.state.topTeam.adjEM} EM
                            </span>
                            <span>
                                {this.state.topTeam.adjO} O
                            </span>
                            <span>
                                {this.state.topTeam.adjD} D
                            </span>
                        </span>
                    </span>
                }
            </li>
            <li onClick={() => this.setWinnerOfGame(this.state.bottomTeam.teamId)} className="team team-bottom">
                { this.state.bottomTeam.team &&
                    <span className="team-info">
                        <span className="seed-info">
                            {this.state.bottomTeam.seed}. {this.state.bottomTeam.team}
                        </span>
                        <span className="kenpom-info">
                            <span>
                                {this.state.bottomTeam.adjEM} EM
                            </span>
                            <span>
                                {this.state.bottomTeam.adjO} O
                            </span>
                            <span>
                                {this.state.bottomTeam.adjD} D
                            </span>
                        </span>
                    </span>
                }
            </li>
        </ul>
    }
}

export default Game;
