import React, { useState, useEffect } from 'react';
import { parseISO } from 'date-fns';

import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container, Content, List } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const { data } = await api.get('meetups');
      console.tron.log(data);
      setMeetup(data);
    }

    loadMeetup();
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <strong>Meus meetups</strong>
          <Link to="/meetups/new">
            <button type="button">Novo meetup</button>
          </Link>
        </div>

        <div>
          <ul>
            {meetup.map(m => (
              <li key={m.id}>
                <strong>{m.title}</strong>
                <span>{m.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
}
