import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

//redux
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/actions/todoActions';

import {
  DivContainer,
  FormContainer,
  FormGroup,
  Paragraph,
  ButtonContainer,
  Button,
  ButtonSpan,
} from '../../styles';

const FormTodo = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {},
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    if (!data) {
      swal('please check your connection!', '', 'error');
    } else {
      dispatch(createTodo(data));
      swal(`Submit Form is Success`, '', 'success');
    }

    setTimeout(() => {
      history.push('/');
    }, 3500);
  };

  return (
    <DivContainer>
      <h1>What Do You want to do ?</h1>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <FormGroup>
            <label htmlFor="title">Tittle: </label>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="input your title..."
                ref={register({ required: true, min: 6 })}
              />
            </div>
          </FormGroup>
          {errors.title && <Paragraph>Title is required...!</Paragraph>}

          <FormGroup>
            <label htmlFor="description">Description: </label>
            <div>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="input your description..."
                ref={register({ required: true, min: 6 })}
              />
            </div>
          </FormGroup>
          {errors.description && (
            <div>
              <Paragraph>Description is required...!</Paragraph>
            </div>
          )}

          <ButtonContainer>
            <Button type="submit">
              <ButtonSpan>submit</ButtonSpan>
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </DivContainer>
  );
};

export default React.memo(FormTodo);
