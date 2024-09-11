import CamperCard from './CamperCard';

import classes from './CampersList.module.css';

function CampersList({ campers }) {
  return (
    <ul className={classes['campers-list']}>
      {campers.map(camper => {
        return (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        );
      })}
    </ul>
  );
}

export default CampersList;
