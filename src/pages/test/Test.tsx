import styled from 'styled-components';
import { env } from '../../config/env';
import { theme } from '@/styles/theme';

function Test() {
  return (
    <S.Container>
      <S.Header>
        <h1>Test Header</h1>
      </S.Header>
      <S.Content>
        <p>APP_NAME: {env.APP_NAME}</p>
        <p>APP_ENV: {env.APP_ENV}</p>
        <p>APP_DEBUG: {env.APP_DEBUG ? 'true' : 'false'}</p>
        <p>API_BASE_URL: {env.API_BASE_URL}</p>
        <p>API_TIMEOUT: {env.API_TIMEOUT}</p>
      </S.Content>
      <S.Footer>
        <h1>Test Footer</h1>
      </S.Footer>
    </S.Container>
  );
}

export default Test;

const S = {
  Header: styled.div``,
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  Footer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  `,

  Content: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;

    p {
      color: ${theme.colors.white};
      text-align: left;
    }
  `,
};
