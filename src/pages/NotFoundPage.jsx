import { Link } from 'react-router-dom';
import { TbCamper } from 'react-icons/tb';

import classes from './NotFoundPage.module.css';
import Button from '../components/Button';
import { useEffect } from 'react';

function NotFoundPage() {
  useEffect(() => {
    document.title = '404: Camper Not Found - Travel Trucks';
  }, []);

  return (
    <div className={classes['not-found']}>
      <div className={classes['not-found-content']}>
        <TbCamper size={'7rem'} />
        <h1 className="h1">404: Camper Not Found</h1>
        <p className="body">
          Oops! The page you are looking for cannot be found. Explore other camper booking options
          on Travel Trucks.
        </p>
        <Link to="/">
          <Button className={classes['button']}>Go home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
