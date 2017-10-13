import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}



class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function LeagueLogo(props) {
  var iconClass = 'league-logo-icon '+props.league;
  console.log(iconClass);
  return (
    <div className="league-logo">
      <div className="league-logo-name">
        {props.league}
      </div>
      <div className={iconClass}>
      </div>
    </div>
  );
}

class Content extends React.Component {
  renderLeagueLogos(league, position){
    return <LeagueLogo league={league} position={position}/>
  }
  render() {
    return(
      <div className="home-page">
        <div className="home-page-prompt">Click to learn more about each major sports league</div>
        <div className="home-page-league-list">
          {this.renderLeagueLogos('NBA',0)}
          {this.renderLeagueLogos('NFL',1)}
          {this.renderLeagueLogos('MLB',2)}
          {this.renderLeagueLogos('NHL',3)}
          {this.renderLeagueLogos('MLS',4)}
        </div>
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <Content />
    );
  }
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
