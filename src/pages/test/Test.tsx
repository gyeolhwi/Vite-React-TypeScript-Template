import styled from 'styled-components';
import { env } from '../../config/env';
import { theme } from '@/styles/theme';

function Test() {
  return (
    <S.Container>
      <S.Content>
        <p>APP_NAME: {env.APP_NAME}</p>
        <p>APP_ENV: {env.APP_ENV}</p>
        <p>APP_DEBUG: {env.APP_DEBUG ? 'true' : 'false'}</p>
        <p>API_BASE_URL: {env.API_BASE_URL}</p>
        <p>API_TIMEOUT: {env.API_TIMEOUT}</p>
      </S.Content>
    </S.Container>
  );
}

export default Test;

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    
    p {
      color: ${theme.colors.white};
      text-align: left;
    }
  `,
};
