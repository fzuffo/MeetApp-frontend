import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import BannerInput from './BannerInput';
import { Container, Content } from './styles';

import { createMeetupRequest } from '~/store/modules/meetup/actions';
import ReactDatePicker from './ReactDatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
  date: Yup.string().required('Campo obrigatório'),
  location: Yup.string().required('Campo obrigatório'),
  file_id: Yup.string().required('Campo obrigatório'),
});

export default function FormData() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.meetup);

  function handleSubmitNew(newData) {
    dispatch(createMeetupRequest(newData));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={data} onSubmit={handleSubmitNew}>
          <BannerInput name="file_id" />

          <Input name="title" placeholder="Titulo" />
          <Input
            multiline
            name="description"
            placeholder="Descrição completa"
          />

          <ReactDatePicker name="date" />

          <Input name="location" placeholder="Localização" />

          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            Salvar meetupp
          </button>
        </Form>
      </Content>
    </Container>
  );
}
