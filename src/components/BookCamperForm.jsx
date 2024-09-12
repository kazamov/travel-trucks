import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

import Input from './Input';
import Button from './Button';

import classes from './BookCamperForm.module.css';
import { ArrowLeft, ArrowRight } from './Icons';

const initialValues = {
  name: '',
  email: '',
  bookingDate: null,
  comment: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2, 'Too short name').max(50, 'Too long name'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  bookingDate: Yup.date().required('Date is required').min(new Date(), 'Invalid date'),
});

function BookCamperForm({ camper }) {
  // const dispatch = useDispatch();

  const handleFormSubmit = useCallback(
    data => {
      console.log(data, camper);
    },
    [camper],
  );
  return (
    <div className={classes['book-camper']}>
      <h3 className={clsx(classes['title'], 'h3')}>Book your campervan now</h3>
      <p className={clsx(classes['subtitle'], 'body')}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm();
        }}
        validationSchema={ContactSchema}
      >
        <Form noValidate className={classes['form']}>
          <Field name="name">
            {({ field }) => (
              <Input name={field.name} placeholder="Name" required onChange={field.onChange} />
            )}
          </Field>
          <ErrorMessage className={classes['error-message']} name="name" component="span" />

          <Field name="email">
            {({ field }) => (
              <Input
                name={field.name}
                type="email"
                placeholder="Email"
                required
                onChange={field.onChange}
              />
            )}
          </Field>
          <ErrorMessage className={classes['error-message']} name="email" component="span" />

          <Field name="bookingDate">
            {({ field }) => (
              <Calendar
                prevIcon={<ArrowLeft width={24} height={24} />}
                nextIcon={<ArrowRight width={24} height={24} />}
                locale="ir"
                panelClassName={classes['date-picker']}
                className={classes['calendar-wrapper']}
                inputClassName={classes['input-date']}
                name={field.name}
                placeholder="Booking date*"
                required
                onChange={field.onChange}
              />
            )}
          </Field>
          <ErrorMessage className={classes['error-message']} name="bookingDate" component="span" />

          <Field name="comment">
            {({ field }) => (
              <InputTextarea
                className={classes['input-textarea']}
                rows={5}
                autoResize
                name={field.name}
                placeholder="Comment"
                onChange={field.onChange}
              />
            )}
          </Field>

          <Button className={classes['send-button']} type="submit">
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default BookCamperForm;
