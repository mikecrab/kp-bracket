import React, { Component } from "react";

class Game extends Component {

    constructor(props) {
        super(props);
        this.setWinnerOfGame=this.setWinnerOfGame.bind(this);
        this.state = {};
        this.state.game = props.game;
        this.state.topTeam = props.topTeam;
        this.state.bottomTeam = props.bottomTeam;
        console.log(this.state);
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        console.log(this.props);
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

    setWinnerOfGame(seed, s) {
        console.log(s);
        this.props.setWinnerOfGame(this.state.game.gameId, seed)
    }

    render() {
        return <ul className="matchup">
            <li onClick={() => this.setWinnerOfGame(this.state.topTeam.seed)} className="team team-top">
                { this.state.topTeam &&
                    <span>
                        {this.state.topTeam.seed} {this.state.topTeam.team}
                    </span>
                }
            </li>
            <li onClick={() => this.setWinnerOfGame(this.state.bottomTeam.seed)} className="team team-bottom">
                { this.state.bottomTeam &&
                    <span>
                        {this.state.bottomTeam.seed} {this.state.bottomTeam.team}
                    </span>
                }
            </li>
        </ul>
    }
}

export default Game;
