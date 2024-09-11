import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import clsx from 'clsx';

import classes from './Input.module.css';

function Input({ icon, required, placeholder, className, ...otherProps }) {
  if (icon) {
    return (
      <IconField className={clsx(classes['icon-field'], className)} iconPosition="left">
        <InputIcon>{icon}</InputIcon>
        <InputText
          {...otherProps}
          placeholder={`${placeholder}${required ? '*' : ''}`}
          required={required}
          className={clsx(classes['input'])}
        />
      </IconField>
    );
  }
  return (
    <InputText
      {...otherProps}
      placeholder={`${placeholder}${required ? '*' : ''}`}
      required={required}
      className={clsx(classes['input'], className)}
    />
  );
}

export default Input;
