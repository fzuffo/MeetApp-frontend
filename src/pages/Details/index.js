import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

// FORMAT DATA FROM API SAGA

export default function Details() {
  const data = useSelector(state => state.meetup);

  const dispatch = useDispatch();

  function handleCancelMeetup(id) {
    alert('Deseja cancelar o meetup?');
    dispatch(cancelMeetupRequest(id));
  }

  return (
    <Container>
      <Content>
        <div className="meetupHeader">
          <strong>{data.title}</strong>
          <div>
            <Link to="/meetup/update">
              <button className="editButton" type="button">
                Editar
              </button>
            </Link>

            <button
              onClick={() => handleCancelMeetup(data.id)}
              className="cancelButton"
              type="button"
            >
              Cancelar
            </button>
          </div>
        </div>

        <div>
          <img src={data.File.url} alt="Meetup Banner" />
          <strong>{data.description}</strong>
        </div>
        <div id="dateLocation">
          <span>{data.dateFormatted}</span>
          <span>{data.location}</span>
        </div>
      </Content>
    </Container>
  );
}
