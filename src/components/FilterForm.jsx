import { useId } from 'react';
import clsx from 'clsx';

import { Diagram, Droplet, Grid, Grid1_2, Grid3_3, Kitchen, Map, TV, Wind } from './Icons';
import Input from './Input';
import Button from './Button';

import classes from './FilterForm.module.css';
import FilterCard from './FilterCard';

function FilterForm() {
  const locationId = useId();
  return (
    <form className={classes['filter-form']}>
      <label className={clsx(classes['city-label'], 'body')} htmlFor={locationId}>
        Location
      </label>
      <Input id={locationId} icon={<Map />} placeholder="City" className={classes['city-input']} />
      <label className={clsx(classes['filters-label'], 'body2')}>Filters</label>
      <div className={clsx(classes['filters-section'], classes['vehicle-equipment-section'])}>
        <h3 className={clsx(classes['filters-section-title'], 'h3')}>Vehicle equipment</h3>
        <hr className={classes['filters-section-separator']} />
        <ul className={classes['filter-cards']}>
          <li>
            <FilterCard
              type="checkbox"
              name="equipmentAC"
              icon={iconProps => <Wind {...iconProps} />}
              label="AC"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="equipmentAutomatic"
              icon={iconProps => <Diagram {...iconProps} />}
              label="Automatic"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="equipmentKitchen"
              icon={iconProps => <Kitchen {...iconProps} />}
              label="Kitchen"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="equipmentTV"
              icon={iconProps => <TV {...iconProps} />}
              label="TV"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="equipmentBathroom"
              icon={iconProps => <Droplet {...iconProps} />}
              label="Bathroom"
            />
          </li>
        </ul>
      </div>
      <div className={clsx(classes['filters-section'], classes['vehicle-type-section'])}>
        <h3 className={clsx(classes['filters-section-title'], 'h3')}>Vehicle type</h3>
        <hr className={classes['filters-section-separator']} />
        <ul className={classes['filter-cards']}>
          <li>
            <FilterCard
              type="radio"
              name="vehicle-type"
              label="Van"
              icon={iconProps => <Grid1_2 {...iconProps} />}
            />
          </li>
          <li>
            <FilterCard
              type="radio"
              name="vehicle-type"
              label="Fully Integrated"
              labelClassName={classes['fully-integrated-filter']}
              icon={iconProps => <Grid {...iconProps} />}
            />
          </li>
          <li>
            <FilterCard
              type="radio"
              name="vehicle-type"
              label="Alcove"
              icon={iconProps => <Grid3_3 {...iconProps} />}
            />
          </li>
        </ul>
      </div>
      <Button className={classes['search-button']}>Search</Button>
    </form>
  );
}

export default FilterForm;
