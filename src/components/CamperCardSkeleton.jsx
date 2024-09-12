import { Skeleton } from 'primereact/skeleton';
import clsx from 'clsx';

import classes from './CamperCardSkeleton.module.css';

function CamperCardSkeleton() {
  return (
    <div className={classes['camper-card-skeleton']}>
      <Skeleton className={classes['picture']} width={292} height={320} />
      <div className={classes['info']}>
        <div className={clsx(classes['info-section'], classes['pt0'])}>
          <Skeleton width={157} height={24} />
          <Skeleton className={classes['price']} width={118} height={24} />
          <Skeleton className={classes['favorite-button']} width={24} height={24} />
        </div>
        <div className={clsx(classes['info-section'], classes['pt8'])}>
          <Skeleton width={133} height={24} />
          <Skeleton className={classes['location']} width={118} height={24} />
        </div>
        <div className={classes['info-section']}>
          <Skeleton width={500} height={24} />
        </div>
        <div className={classes['info-section']}>
          <ul className={classes['badges']}>
            <li>
              <Skeleton borderRadius="100px" width={143} height={48} />
            </li>
            <li>
              <Skeleton borderRadius="100px" width={109} height={48} />
            </li>
            <li>
              <Skeleton borderRadius="100px" width={123} height={48} />
            </li>
            <li>
              <Skeleton borderRadius="100px" width={87} height={48} />
            </li>
          </ul>
        </div>
        <div className={clsx(classes['info-section'], classes['mt-auto'])}>
          <Skeleton
            className={classes['show-more-button']}
            borderRadius="200px"
            width={166}
            height={56}
          />
        </div>
      </div>
    </div>
  );
}

export default CamperCardSkeleton;
