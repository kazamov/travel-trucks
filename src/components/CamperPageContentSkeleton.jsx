import { Skeleton } from 'primereact/skeleton';

import classes from './CamperPageContentSkeleton.module.css';

function CamperPageContentSkeleton() {
  return (
    <>
      <Skeleton className={classes['name']} width="8rem" height="2rem" />
      <div className={classes['rating-location']}>
        <Skeleton width="8.25rem" height="1.5rem" />
        <Skeleton width="7rem" height="1.5rem" />
      </div>
      <Skeleton className={classes['price']} width="7.375rem" height="2rem" />
      <div className={classes['gallery']}>
        <Skeleton className={classes['gallery-image']} width="18.25rem" height="19.5rem" />
        <Skeleton className={classes['gallery-image']} width="18.25rem" height="19.5rem" />
        <Skeleton className={classes['gallery-image']} width="18.25rem" height="19.5rem" />
        <Skeleton className={classes['gallery-image']} width="18.25rem" height="19.5rem" />
      </div>
      <Skeleton className={classes['description']} width="100%" height="3rem" />
    </>
  );
}

export default CamperPageContentSkeleton;
