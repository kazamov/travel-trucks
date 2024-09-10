import { Link } from 'react-router-dom';
import Button from '../components/Button';

import classes from './HomePage.module.css';

function HomePage() {
  return (
    <div className={classes['home-page']}>
      <h1 className={classes['hero-title']}>Campers of your dreams</h1>
      <h2 className={classes['hero-text']}>You can find everything you want in our catalog</h2>
      <Link to="/catalog">
        <Button>View Now</Button>
      </Link>
    </div>
  );
}

export default HomePage;
