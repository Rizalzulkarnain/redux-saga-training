import React from 'react';
import swal from 'sweetalert';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../utils/formikContainer/FormikControl';

import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/actions/todoActions';

import {
  DivContainer,
  FormGroup,
  ButtonContainer,
  Button,
  ButtonSpan,
} from '../../styles';

const FormTodo = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(6, 'Too Short!')
      .required('Please..., input title field!'),
    description: Yup.string()
      .min(6, 'Too Short!')
      .required('Please..., input description field!'),
  });

  const onSubmit = (values, { resetForm }) => {
    if (createTodo) {
      dispatch(createTodo(values));
      swal('Submit form is Success!', '', 'success');
    } else {
      swal('Please check your connection!', '', 'error');
    }

    resetForm({ values: '' });
  };

  return (
    <DivContainer>
      <h1>What Do You want to do ?</h1>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormGroup>
                  <FormikControl
                    control="input"
                    type="text"
                    label="What do you want todo ?"
                    name="title"
                  />
                </FormGroup>

                <FormGroup>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Add description !"
                    name="description"
                  />
                </FormGroup>

                <ButtonContainer>
                  <Button type="submit" disabled={!formik.isValid}>
                    <ButtonSpan>Do It !</ButtonSpan>
                  </Button>
                </ButtonContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </DivContainer>
  );
};

export default FormTodo;
