import clsx from 'clsx';

import Button from './Button';
import classes from './CamperCard.module.css';
import Chip from './Chip';
import { Diagram, Kitchen, Map, Petrol, Wind } from './Icons';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const FORMATTER = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: false,
});

function CamperCard({ camper }) {
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
            <li>
              <Chip icon={Diagram} label="Automatic" />
            </li>
            <li>
              <Chip icon={Petrol} label="Petrol" />
            </li>
            <li>
              <Chip icon={Kitchen} label="Kitchen" />
            </li>
            <li>
              <Chip icon={Wind} label="AC" />
            </li>
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
