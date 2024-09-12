import clsx from 'clsx';

import { Map } from './Icons';
import classes from './CamperLocation.module.css';

function CamperLocation({ location, className }) {
  return (
    <div className={clsx(classes['location'], className)}>
      <Map width={16} height={16} />
      <span className="body">{location}</span>
    </div>
  );
}

export default CamperLocation;
