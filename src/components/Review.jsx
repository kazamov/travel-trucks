import { Avatar } from 'primereact/avatar';
import clsx from 'clsx';

import classes from './Review.module.css';
import Rating from './Rating';

function Review({ review }) {
  return (
    <div className={classes['review']}>
      <div className={classes['review-rating']}>
        <Avatar
          className={clsx(classes['avatar'], 'h2')}
          shape="circle"
          size="xlarge"
          label={review.reviewer_name.charAt(0).toUpperCase()}
        />
        <div className={classes['name-rating']}>
          <span className={clsx(classes['name'], 'body2')}>{review.reviewer_name}</span>
          <Rating value={review.reviewer_rating} stars={5} />
        </div>
      </div>
      <p className={clsx(classes['comment'], 'body')}>{review.comment}</p>
    </div>
  );
}

export default Review;
