import React from 'react';
import Header from './components/Header/Header';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Missions from './components/Missions/Missions';
import styles from './App.module.css';
import trybeLogo from './images/trybeIcon.svg';

class App extends React.Component {
  render() {
    return (
      <div className={ styles.mainBody }>
        <Header />
        <SolarSystem />
        <Missions />
        <img className={ styles.trybe } src={ trybeLogo } alt="Trybe Logo" />
      </div>
    );
  }
}

export default App;