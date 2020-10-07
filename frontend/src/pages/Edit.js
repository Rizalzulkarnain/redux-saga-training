import React, { useEffect } from 'react';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Spinner from '../components/spinner/Spinner';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTodo, updateTodo } from '../redux/actions/todoActions';

import {
  H1,
  DivContainer,
  FormContainer,
  FormGroup,
  Paragraph,
  ButtonContainer,
  Button,
  ButtonSpan,
} from '../styles';

let mounted = false;

const Edit = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: {},
  });

  const dispatch = useDispatch();
  const { item, isLoading, error } = useSelector(({ todos }) => todos);
  const { id } = useParams();

  const onSubmit = (data) => {
    mounted = false;
    if (data) {
      dispatch(updateTodo({ id, data: { data } }));
      swal(`Your data is Uptodate`, '', 'success');
    } else {
      swal(`${error.message}!`, '', 'error');
    }
  };

  useEffect(() => {
    dispatch(getSingleTodo({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    setValue('title', item.title);
    setValue('description', item.description);
    mounted = true;
  }, [item, setValue]);

  if (isLoading && mounted) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <DivContainer>
      <H1>Edit Form</H1>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label htmlFor="title">Tittle: </label>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="input your title..."
                ref={register({ type: 'custom' }, { required: true, min: 6 })}
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
                ref={register({ type: 'custom' }, { required: true, min: 6 })}
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
              <ButtonSpan>Save</ButtonSpan>
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </DivContainer>
  );
};

export default Edit;
