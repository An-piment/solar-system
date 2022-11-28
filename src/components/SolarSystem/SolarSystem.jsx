import React, { Component } from 'react';
import Title from '../Title/Title';
import Planets from '../../data/planets';
import PlanetCard from '../PlanetCard/PlanetCard';
import styles from './SolarSystem.module.css';

class SolarSystem extends Component {
  render() {
    return (
      <div className={ styles.solarSystem } data-testid="solar-system">
        <Title headline="Planetas" />
        <hr className={ styles.line }/>
        <div className={ styles.planetContent }>
          {Planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
