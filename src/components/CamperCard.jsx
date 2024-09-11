import clsx from 'clsx';

import Button from './Button';
import classes from './CamperCard.module.css';
import Chip from './Chip';
import {
  Diagram,
  Droplet,
  Grid,
  Grid1_2,
  Grid3_3,
  Kitchen,
  Map,
  Petrol,
  TV,
  UIRadios,
  Wind,
} from './Icons';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useMemo } from 'react';

const FORMATTER = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: false,
});

function CamperCard({ camper }) {
  const equipments = useMemo(() => {
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
      badges.push({ key: 'Panel Truck', component: <Chip icon={Grid} label="Panel Truck" /> });
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
    <div className={classes['camper-card']}>
      <img
        className={classes['picture']}
        src={camper.gallery[0]?.thumb}
        width={292}
        height={320}
        alt={camper.name}
      />
      <div className={classes['info']}>
        <div className={clsx(classes['info-section'], classes['pt0'])}>
          <h2 className="h2">{camper.name}</h2>
          <p className={clsx(classes['price'], 'h2')}>{FORMATTER.format(camper.price)}</p>
        </div>
        <div className={clsx(classes['info-section'], classes['pt8'])}>
          <div className={classes['rating']}>
            <Rating stars={1} value={1} />
            <Link
              className={clsx(classes['rating-link'], 'body')}
              to={`/catalog/${camper.id}/reviews`}
            >
              {camper.rating}({camper.reviews.length} Reviews)
            </Link>
          </div>
          <div className={classes['location']}>
            <Map width={16} height={16} />
            <span className="body">{camper.location}</span>
          </div>
        </div>
        <div className={classes['info-section']}>
          <p className={clsx(classes['description'], 'body')}>{camper.description}</p>
        </div>
        <div className={classes['info-section']}>
          <ul className={classes['badges']}>
            {equipments.map(({ component, key }) => (
              <li key={key}>{component}</li>
            ))}
          </ul>
        </div>
        <div className={clsx(classes['info-section'], classes['mt-auto'])}>
          <Link to={`/catalog/${camper.id}`}>
            <Button className={classes['show-more-button']}>Show more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CamperCard;
