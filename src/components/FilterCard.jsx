import { useId } from 'react';
import clsx from 'clsx';

import classes from './FilterCard.module.css';

function FilterCard({ type, value, name, icon, label, labelClassName }) {
  const id = useId();
  return (
    <div className={classes['filter-card']}>
      <input type={type} id={id} name={name} value={value} />
      <label htmlFor={id} className={clsx(classes['filter-label'], labelClassName)}>
        {icon({ width: 32, height: 32 })}
        <span className={clsx(classes['card-title'], 'button')}>{label}</span>
      </label>
    </div>
  );
}

export default FilterCard;
