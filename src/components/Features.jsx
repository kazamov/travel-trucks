import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCamperById, selectLoading } from '../store/campersSlice';

import CamperFeatures from './CamperFeatures';
import classes from './Features.module.css';

function Features() {
  const { id } = useParams();
  const camper = useSelector(selectCamperById(id));
  const loading = useSelector(selectLoading);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <div className={classes['features']}>
      <CamperFeatures camper={camper} />
    </div>
  );
}

export default Features;
