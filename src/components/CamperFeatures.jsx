import { useMemo } from 'react';

import Chip from './Chip';
import {
  Diagram,
  Droplet,
  Grid,
  Grid1_2,
  Grid3_3,
  Kitchen,
  Petrol,
  TV,
  UIRadios,
  Wind,
} from './Icons';

import classes from './CamperFeatures.module.css';

function CamperFeatures({ camper }) {
  const features = useMemo(() => {
    const badges = [];
    if (camper.bathroom) {
      badges.push({ key: 'Bathroom', component: <Chip icon={Droplet} label="Bathroom" /> });
    }
    if (camper.kitchen) {
      badges.push({ key: 'Kitchen', component: <Chip icon={Kitchen} label="Kitchen" /> });
    }
    if (camper.radio) {
      badges.push({ key: 'Radio', component: <Chip icon={UIRadios} label="Radio" /> });
    }

    if (camper.engine) {
      badges.push({ key: camper.engine, component: <Chip icon={Petrol} label={camper.engine} /> });
    }

    if (camper.transmission) {
      badges.push({
        key: camper.transmission,
        component: <Chip icon={Diagram} label={camper.transmission} />,
      });
    }

    if (camper.form === 'van') {
      badges.push({ key: 'Van', component: <Chip icon={Grid1_2} label="Van" /> });
    } else if (camper.form === 'fullyIntegrated') {
      badges.push({
        key: 'Fully Integrated',
        component: <Chip icon={Grid} label="Fully Integrated" />,
      });
    } else if (camper.form === 'alcove') {
      badges.push({ key: 'Alcove', component: <Chip icon={Grid3_3} label="Alcove" /> });
    } else {
      badges.push({ key: 'Panel Truck', component: <Chip icon={Grid1_2} label="Panel Truck" /> });
    }

    if (camper.AC) {
      badges.push({ key: 'AC', component: <Chip icon={Wind} label="AC" /> });
    }
    if (camper.TV) {
      badges.push({ key: 'TV', component: <Chip icon={TV} label="TV" /> });
    }
    return badges;
  }, [camper]);
  return (
    <ul className={classes['camper-features']}>
      {features.map(({ component, key }) => (
        <li key={key}>{component}</li>
      ))}
    </ul>
  );
}

export default CamperFeatures;
