import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Rating from './Rating';
import classes from './CamperRating.module.css';

function CamperRating({ camper }) {
  return (
    <div className={classes['rating']}>
      <Rating stars={1} value={1} />
      <Link className={clsx(classes['rating-link'], 'body')} to={`/catalog/${camper.id}/reviews`}>
        {camper.rating}({camper.reviews.length} Reviews)
      </Link>
    </div>
  );
}

export default CamperRating;
