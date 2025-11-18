# Vite React TypeScript Template

## 설치
```bash
$ npm install
```

## 실행
```bash
$ npm run dev    # 개발 모드 (.env.dev)
$ npm run start  # 실서버 모드 (.env)
```

## 빌드
```bash
$ npm run build:dev  # 테스트 빌드
$ npm run build      # 실서버 빌드
```

## 환경 변수
- `.env` - 실서버용 환경 변수
- `.env.dev` - 테스트용 환경 변수
- `VITE_` 접두사 필수

## 라이브러리

| 라이브러리 | 설명 |
|----------|------|
| react-router-dom | 라우팅 |
| zustand | 상태 관리 |
| axios | HTTP 클라이언트 |
| @tanstack/react-query | 서버 상태 관리 |
| date-fns | 날짜 처리 |
| libphonenumber-js | 전화번호 처리 |
| react-hook-form | 폼 관리 |
| zod | 스키마 검증 |
| react-spinners | 로딩 스피너 |
| styled-components | CSS-in-JS |
