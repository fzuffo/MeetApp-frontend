import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import history from '~/services/history';
import api from '~/services/api';
import { Container, Content } from './styles';

import { meetupSelected } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups');

      const data = response.data.map(m => ({
        ...m,
        dateFormatted: format(parseISO(m.date), "d 'de' MMMM', às' h'h'", {
          locale: pt,
        }),
        dateInput: format(parseISO(m.date), 'd/M/yyyy', {
          locale: pt,
        }),
      }));

      setMeetup(data);
    }
    loadMeetup();
  }, []);

  function handlePage(meetupInfo) {
    dispatch(meetupSelected(meetupInfo));

    return history.push('/meetup/details');
  }

  return (
    <Container>
      <Content>
        <div>
          <strong>Meus meetups</strong>
          <Link to="/meetup/new">
            <button type="button">Novo meetup</button>
          </Link>
        </div>

        <div>
          <ul>
            {meetup.map(m => (
              <li key={m.id} onClick={() => handlePage(m)}>
                <strong>{m.title}</strong>
                <span>{m.dateFormatted}</span>
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
}
