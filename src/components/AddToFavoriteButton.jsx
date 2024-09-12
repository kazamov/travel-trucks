import clsx from 'clsx';
import { Heart } from './Icons';

import classes from './AddToFavoriteButton.module.css';

function AddToFavoriteButton({ isFavorite, onClick, className }) {
  return (
    <button className={clsx(classes['add-to-favorite-button'], className)} onClick={onClick}>
      <Heart
        width={24}
        height={24}
        className={clsx({
          [classes['favorite']]: isFavorite,
        })}
      />
    </button>
  );
}

export default AddToFavoriteButton;
