import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import classes from './CamperCard.module.css';

import Button from './Button';
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
import CamperRating from './CamperRating';
import CamperLocation from './CamperLocation';
import { useCallback, useMemo } from 'react';
import AddToFavoriteButton from './AddToFavoriteButton';
import { addToFavorites, removeFromFavorites, selectIsFavorite } from '../store/campersSlice';
import { FORMATTER } from '../lib/formatter';

function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper.id));

  const handleFavoriteClick = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper.id));
    }
  }, [dispatch, camper.id, isFavorite]);

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
          <AddToFavoriteButton
            isFavorite={isFavorite}
            className={classes['favorite-button']}
            onClick={handleFavoriteClick}
          />
        </div>
        <div className={clsx(classes['info-section'], classes['pt8'])}>
          <CamperRating camper={camper} />
          <CamperLocation className={classes['location']} location={camper.location} />
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
