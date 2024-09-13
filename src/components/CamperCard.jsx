import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { addToFavorites, removeFromFavorites, selectIsFavorite } from '../store/campersSlice';
import { FORMATTER } from '../lib/formatter';

import Button from './Button';

import CamperRating from './CamperRating';
import CamperLocation from './CamperLocation';
import AddToFavoriteButton from './AddToFavoriteButton';
import CamperFeatures from './CamperFeatures';

import classes from './CamperCard.module.css';

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
          <CamperFeatures camper={camper} />
        </div>
        <div className={clsx(classes['info-section'], classes['mt-auto'])}>
          <Link to={`/catalog/${camper.id}`} target="_blank">
            <Button className={classes['show-more-button']}>Show more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CamperCard;
