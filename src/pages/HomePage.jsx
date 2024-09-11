import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Button from '../components/Button';

import classes from './HomePage.module.css';

function HomePage() {
  useEffect(() => {
    document.title = 'Catalog | Travel Trucks';
  }, []);

  return (
    <div className={classes['home-page']}>
      <h1 className={clsx(classes['hero-title'], 'h1')}>Campers of your dreams</h1>
      <h2 className={clsx(classes['hero-text'], 'h2')}>
        You can find everything you want in our catalog
      </h2>
      <Link to="/catalog">
        <Button>View Now</Button>
      </Link>
    </div>
  );
}

export default HomePage;
