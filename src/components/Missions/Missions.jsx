import React, { Component } from 'react';
import Title from '../Title/Title';
import MissionCard from '../MissionCard/MissionCard';
import missions from '../../data/missions';
import styles from './Missions.module.css'

class Missions extends Component {
  render() {
    return (
      <div className={ styles.missionsBox }data-testid="missions">
        <Title headline="Missões" />
        <div className={ styles.missions }>
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
