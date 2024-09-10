import classes from './Button.module.css';

import clsx from 'clsx';

function Button({ children, className }) {
  return <button className={clsx(classes['button'], className)}>{children}</button>;
}

export default Button;
