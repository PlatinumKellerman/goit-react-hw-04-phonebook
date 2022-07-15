import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  MainForm,
  PhonebookFormLabel,
  PhonebookInput,
  SubmitButton,
  ErrorText,
} from './PhonebookForm.styled';

export function PhonebookForm({ onSubmit }) {
  const schema = yup.object().shape({
    name: yup.string().required('This field cannot be empty'),
    number: yup.string().min(6).max(18).required('This field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <MainForm>
          <PhonebookFormLabel htmlFor="name">
            Name:
            <PhonebookInput
              name="name"
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage
              name="name"
              render={message => <ErrorText>{message}</ErrorText>}
            />
          </PhonebookFormLabel>
          <PhonebookFormLabel htmlFor="number">
            Number:
            <PhonebookInput
              name="number"
              type="tel"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage
              render={message => <ErrorText>{message}</ErrorText>}
              name="number"
            />
          </PhonebookFormLabel>
          <SubmitButton type="submit">Add contact</SubmitButton>
        </MainForm>
      </Formik>
    </>
  );
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
