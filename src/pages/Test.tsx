import { env } from 'process';

function Test() {
  return (
    <div>
      <div>
        <p>APP_NAME: {env.APP_NAME}</p>
        <p>APP_ENV: {env.APP_ENV}</p>
        <p>APP_DEBUG: {env.APP_DEBUG ? 'true' : 'false'}</p>
        <p>API_BASE_URL: {env.API_BASE_URL}</p>
        <p>API_TIMEOUT: {env.API_TIMEOUT}</p>
      </div>
    </div>
  );
}

export default Test;

const S = {};
