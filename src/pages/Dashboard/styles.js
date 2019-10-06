import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }
    button {
      /* align-self: flex-end; */
      margin: 5px 0 0;
      height: 42px;
      width: 172px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      text-align: right;
      padding-right: 20px;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
  }

`;
