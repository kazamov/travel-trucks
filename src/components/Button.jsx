import { Button as PrimeButton } from 'primereact/button';
import classes from './Button.module.css';

import clsx from 'clsx';

function Button({ children, className, ...otherProps }) {
  return (
    <PrimeButton {...otherProps} className={clsx(classes['button'], 'button', className)}>
      {children}
    </PrimeButton>
  );
}

export default Button;
