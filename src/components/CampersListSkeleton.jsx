import CamperCardSkeleton from './CamperCardSkeleton';
import classes from './CampersListSkeleton.module.css';

function CampersListSkeleton() {
  return (
    <ul className={classes['campers-list-skeleton']}>
      <li>
        <CamperCardSkeleton />
      </li>
      <li>
        <CamperCardSkeleton />
      </li>
      <li>
        <CamperCardSkeleton />
      </li>
    </ul>
  );
}

export default CampersListSkeleton;
