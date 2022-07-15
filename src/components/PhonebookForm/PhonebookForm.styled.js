import styled from 'styled-components';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #000;
`;

export const PhonebookFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const PhonebookInput = styled(Field)`
  margin-top: 10px;
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  border: 1px solid #000;
  border-radius: 5px;
  :hover,
  :focus,
  :active {
    background-color: limegreen;
    color: aliceblue;
    cursor: pointer;
    border: 1px solid limegreen;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;
