import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // 루트 경로 설정
  // base: '/base/',
  plugins: [
    react({
      // styled-components 빌드 설정
      // 개발 편의성을 위한 설정 (개발자도구에서 컴포넌트 이름을 보기 위함)
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              // ssr: false,
              fileName: false,
              // topLevelImportPaths: [],
            },
          ],
        ],
      },
    }),
  ],
  // 경로 별칭 설정 tsconfig.app.json의 paths 설정과 동일한 기능
  resolve: {
    alias: {
      '@': '/src',
    },
  //   extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
});
