import { forwardRef } from 'react';
import { Toast as PrimeToast } from 'primereact/toast';

import classes from './Toast.module.css';

const Toast = forwardRef((props, ref) => {
  return <PrimeToast className={classes['toast']} {...props} ref={ref} />;
});
Toast.displayName = 'Toast';

export default Toast;
