import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCamperById, selectLoading } from '../store/campersSlice';

import Review from './Review';
import classes from './Reviews.module.css';
import ReviewSkeleton from './ReviewSkeleton';

function Reviews() {
  const { id } = useParams();
  const camper = useSelector(selectCamperById(id));
  const loading = useSelector(selectLoading);

  return (
    <div className={classes['reviews']}>
      <ul className={classes['reviews-list']}>
        {loading && (
          <>
            <ReviewSkeleton />
            <ReviewSkeleton />
          </>
        )}

        {!loading &&
          camper &&
          camper.reviews.map(review => {
            return (
              <li key={`${camper.id}-${review.reviewer_name}`}>
                <Review review={review} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Reviews;
