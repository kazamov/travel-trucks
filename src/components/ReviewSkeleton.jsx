import { Skeleton } from 'primereact/skeleton';

import classes from './ReviewSkeleton.module.css';

function ReviewSkeleton() {
  return (
    <div className={classes['review']}>
      <div className={classes['review-rating']}>
        <Skeleton shape="circle" size="3.75rem" />
        <div className={classes['name-rating']}>
          <Skeleton width="2.375rem" height="1.5rem" />
          <Skeleton width="6rem" height="1rem" />
        </div>
      </div>
      <Skeleton width="100%" height="4.5rem" />
    </div>
  );
}

export default ReviewSkeleton;
