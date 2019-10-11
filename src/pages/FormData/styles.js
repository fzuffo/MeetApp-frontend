import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* border: 1px solid #d43; */
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  text-align: center;
  /* border: 1px solid #d23; */

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 20px;
      max-width: 940px;
      border-radius: 4px;
      border: 0;
      background-color: rgba(0, 0, 0, 0.2);
      height: 50px;
      color: rgba(255, 255, 255, 0.5);
      padding: 0 15px;
      font-size: 16px;
    }

    textarea {
      margin-top: 20px;
      max-width: 940px;
      border-radius: 4px;
      border: 0;
      background-color: rgba(0, 0, 0, 0.2);
      height: 200px;
      color: rgba(255, 255, 255, 0.5);
      padding: 15px 15px;
      font-size: 16px;
    }

    button {
      align-self: flex-end;
      margin: 20px 0 0;
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
  }
`;
