import { Chip as PrimeChip } from 'primereact/chip';
import clsx from 'clsx';

import classes from './Chip.module.css';

function Chip({ className, ...otherProps }) {
  return <PrimeChip {...otherProps} className={clsx(classes['chip'], className)} />;
}

export default Chip;
