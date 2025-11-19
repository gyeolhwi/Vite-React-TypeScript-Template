# Vite React TypeScript Template

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

## 레이아웃 구조

### 구조
```
BaseLayout (공통)
  ├── ThemeProvider
  ├── GlobalStyle
  └── children (Outlet)

각 레이아웃
  ├── MainLayout
  ├── LoginLayout
  ├── TestLayout
  └── AdminLayout
```

### 의도
- **BaseLayout**: 공통 부분(ThemeProvider, GlobalStyle)을 추출하여 중복 제거
- **각 레이아웃**: BaseLayout을 사용하되, 필요시 커스터마이징 가능
  - 예: AdminLayout에 사이드바, 헤더 등 추가 가능
- **확장성**: 각 레이아웃이 독립적으로 관리되어 유지보수 용이

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
| babel-plugin-styled-components | styled-components 개발자 도구 최적화 (컴포넌트 이름 표시) |
