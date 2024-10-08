import { Fragment, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { selectCamperById, selectLoading } from '../store/campersSlice';

import CamperFeatures from './CamperFeatures';
import classes from './Features.module.css';
import FeaturesSkeleton from './FeaturesSkeleton';

function Features() {
  const { id } = useParams();
  const camper = useSelector(selectCamperById(id));
  const loading = useSelector(selectLoading);

  const vehicleDetails = useMemo(() => {
    if (!camper) {
      return [];
    }
    return [
      { label: 'Form', value: camper.form, valueClassName: classes['form-value'] },
      { label: 'Length', value: camper.length },
      { label: 'Width', value: camper.width },
      { label: 'Height', value: camper.height },
      { label: 'Tank', value: camper.tank },
      { label: 'Consumption', value: camper.consumption },
    ];
  }, [camper]);

  return (
    <div className={classes['features']}>
      {loading && <FeaturesSkeleton />}
      {!loading && camper && (
        <>
          <CamperFeatures camper={camper} />
          <div className={classes['vehicle-details']}>
            <h3 className={clsx(classes['title'], 'h3')}>Vehicle details</h3>
            <hr className="hr" />
            <div className={classes['details-grid']}>
              {vehicleDetails.map(({ label, value, valueClassName }) => (
                <Fragment key={label}>
                  <span className="body2">{label}</span>
                  <span className={clsx(valueClassName, classes['right-column'], 'body2')}>
                    {value}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Features;
