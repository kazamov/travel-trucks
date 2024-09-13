import { Skeleton } from 'primereact/skeleton';

import classes from './FeaturesSkeleton.module.css';

function FeaturesSkeleton() {
  return (
    <>
      <div className={classes['camper-features']}>
        <Skeleton className={classes['feature']} width="9rem" height="3rem" />
        <Skeleton className={classes['feature']} width="5.5rem" height="3rem" />
        <Skeleton className={classes['feature']} width="6.8125rem" height="3rem" />
        <Skeleton className={classes['feature']} width="7.75rem" height="3rem" />
        <Skeleton className={classes['feature']} width="6.75rem" height="3rem" />
      </div>
      <div className={classes['vehicle-details']}>
        <Skeleton width="8.875rem" height="1.5rem" />
        <hr className="hr" />
        <div className={classes['details-grid']}>
          <Skeleton width="2.4375rem" height="1.5rem" />
          <Skeleton className={classes['right-column']} width="5.4375rem" height="1.5rem" />

          <Skeleton width="3.375rem" height="1.5rem" />
          <Skeleton className={classes['right-column']} width="2.6875rem" height="1.5rem" />

          <Skeleton width="2.875rem" height="1.5rem" />
          <Skeleton className={classes['right-column']} width="3.1875rem" height="1.5rem" />

          <Skeleton width="3.1875rem" height="1.5rem" />
          <Skeleton className={classes['right-column']} width="3.3125rem" height="1.5rem" />

          <Skeleton width="2.3125rem" height="1.5rem" />
          <Skeleton className={classes['right-column']} width="2.3125rem" height="1.5rem" />

          <Skeleton width="6.4375rem" height="1.5rem" />
          <Skeleton className={classes['right-column']} width="5.875rem" height="1.5rem" />
        </div>
      </div>
    </>
  );
}

export default FeaturesSkeleton;
