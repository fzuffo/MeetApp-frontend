import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

// FORMAT DATA FROM API SAGA

export default function Details() {
  const data = useSelector(state => state.meetup);

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
            <button className="cancelButton" type="button">
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
