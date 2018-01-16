import React, { Component } from 'react';
import Header from './components/Header' ;
import Player from './components/Player' ;
import AddPlayer from './components/Addplayer';

class App extends Component {
  state = {
      players: [
        {
            name: "Adebola Aladesuru" ,
            score: 50,
        },
        {
            name: "Samuel Olugbemi" ,
            score: 60,
        },
        {
            name: "Kwame Mintah" ,
            score: 70,
        },
        {
            name: "Jordan Rails" ,
            score: 90,
        },
        {
            name: "Anthony wrigth" ,
            score: 40
        }
    ]
  };


  onScorechange = (indexTochange , delta) => {
    this.setState({
      players: this.state.players.map((player , index) => {
        if (index === indexTochange) {
          return {
            ...player,
            score : player.score + delta
          }
        }
        return player ;
      })
    })
  };

 AddNewPlayer = (newplayer) => {
  if (newplayer.trim() !== "") {
    const newPlayers = [{name: newplayer, score: 0 }, ...this.state.players];
    this.setState({
      players : newPlayers
    });
  }
 };

 RemovePlayer = (index) => {
  this.state.players.splice(index , 1)
  this.setState({
    players: this.state.players ,
  })
 };

  render() {
    return (
    <div className="App">
     <Header  title = {this.props.title} initialplayers = { this.state.players } />
      {
          this.state.players.map((player , index) => 
          <Player 
            name = {player.name} 
            score = {player.score} 
            key = { index } 
            RemovePlayer = {() => this.RemovePlayer(index)}
            onScorechange = {(delta) => this.onScorechange(index , delta)}/> 
          )
      }
      <AddPlayer  add = { this.AddNewPlayer } />
    </div>
    );

  };
};

App.defaultProps = {
    title: "SCOREBOARD",
  };

export default App;
