import React, { useEffect } from 'react';
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
  const { data, isLoading, error } = useSelector(({ todos }) => todos);
  const { id } = useParams();

  const onSubmit = (body) => {
    mounted = false;
    dispatch(updateTodo({ id, body: { body } }));
  };

  useEffect(() => {
    dispatch(getSingleTodo({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    setValue('title', data.title);
    setValue('description', data.description);
    mounted = true;
  }, [data, setValue]);

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

export default Edit;
