/**
 * 환경 변수 설정
 * .env 또는 .env.dev 파일에서 값을 가져옵니다
 */

export const env = {
  // API 설정
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT),

  // 환경 설정
  APP_ENV: import.meta.env.VITE_APP_ENV,
  APP_DEBUG: import.meta.env.VITE_APP_DEBUG === 'true',
  APP_NAME: import.meta.env.VITE_APP_NAME,
} as const

