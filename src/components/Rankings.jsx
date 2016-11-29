import React, { Component } from 'react';

export default class Rankings extends Component {
  render() {
    const receivers = [
      {
        name: 'Julio Jones',
        rank: 1,
      },
      {
        name: 'Antonio Brown',
        rank: 2,
      },
      {
        name: 'Odell beckham',
        rank: 3,
      },
      {
        name: 'Kelvin Benjamin',
        rank: 4,
      },
    ];
    return (
      <div>
        <h3>Rankings</h3>
        <ul className="app-rankings__nav">
          <li className="app-rankings__nav-item">QB</li>
          <li className="app-rankings__nav-item">RB</li>
          <li className="app-rankings__nav-item">WR</li>
          <li className="app-rankings__nav-item">TE</li>
        </ul>
        hello from rankings
      </div>
    );
  }
}
