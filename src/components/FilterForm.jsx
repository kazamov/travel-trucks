import { useId } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import { Diagram, Droplet, Grid, Grid1_2, Grid3_3, Kitchen, Map, TV, Wind } from './Icons';
import Input from './Input';
import Button from './Button';

import classes from './FilterForm.module.css';
import FilterCard from './FilterCard';
import { changeFilter } from '../store/filtersSlice';

function FilterForm({ onSubmit }) {
  const locationId = useId();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const city = event.target.elements.location.value ?? '';

    const equipments = [];
    if (event.target.elements.AC.checked) {
      equipments.push({ key: 'AC', value: true });
    }
    if (event.target.elements.automatic.checked) {
      equipments.push({ key: 'transmission', value: 'automatic' });
    }
    if (event.target.elements.kitchen.checked) {
      equipments.push({ key: 'kitchen', value: true });
    }
    if (event.target.elements.TV.checked) {
      equipments.push({ key: 'TV', value: true });
    }
    if (event.target.elements.bathroom.checked) {
      equipments.push({ key: 'bathroom', value: true });
    }

    const form = event.target.elements.form.value ?? '';

    dispatch(
      changeFilter({
        city,
        equipments,
        form,
      }),
    );

    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className={classes['filter-form']}>
      <label className={clsx(classes['city-label'], 'body')} htmlFor={locationId}>
        Location
      </label>
      <Input
        id={locationId}
        name="location"
        icon={<Map />}
        placeholder="City"
        className={classes['city-input']}
      />
      <label className={clsx(classes['filters-label'], 'body2')}>Filters</label>
      <div className={clsx(classes['filters-section'], classes['vehicle-equipment-section'])}>
        <h3 className={clsx(classes['filters-section-title'], 'h3')}>Vehicle equipment</h3>
        <hr className={classes['filters-section-separator']} />
        <ul className={classes['filter-cards']}>
          <li>
            <FilterCard
              type="checkbox"
              name="AC"
              icon={iconProps => <Wind {...iconProps} />}
              label="AC"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="automatic"
              icon={iconProps => <Diagram {...iconProps} />}
              label="Automatic"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="kitchen"
              icon={iconProps => <Kitchen {...iconProps} />}
              label="Kitchen"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="TV"
              icon={iconProps => <TV {...iconProps} />}
              label="TV"
            />
          </li>
          <li>
            <FilterCard
              type="checkbox"
              name="bathroom"
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
              name="form"
              label="Van"
              value="van"
              icon={iconProps => <Grid1_2 {...iconProps} />}
            />
          </li>
          <li>
            <FilterCard
              type="radio"
              name="form"
              label="Fully Integrated"
              value="fullyIntegrated"
              labelClassName={classes['fully-integrated-filter']}
              icon={iconProps => <Grid {...iconProps} />}
            />
          </li>
          <li>
            <FilterCard
              type="radio"
              name="form"
              label="Alcove"
              value="alcove"
              icon={iconProps => <Grid3_3 {...iconProps} />}
            />
          </li>
        </ul>
      </div>
      <Button type="submit" className={classes['search-button']}>
        Search
      </Button>
    </form>
  );
}

export default FilterForm;
