import { Outlet } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import styled from 'styled-components';

type NavMode = 'top' | 'left' | 'right';

interface TestLayoutProps {
  mode?: NavMode;
}

/**
 * @description 레이아웃 (공통 Nav영역, 컨텐츠영역, 공통 Footer영역)
 * @description mode에 따라서 Nav 배치가 바뀜
 * @param mode 레이아웃 모드 (top, left, right)
 */
function TestLayout({ mode = 'top' }: TestLayoutProps) {
  return (
    <BaseLayout>
      <S.Layout $mode={mode}>
        {/* 공통 Nav영역 */}
        <S.Header $mode={mode}>
          <h1>Header</h1>
        </S.Header>
        {/* 컨텐츠영역 */}
        <S.ContentWrapper $mode={mode}>
          <S.OutletWrapper>
            <Outlet />
          </S.OutletWrapper>
          {/* 공통 Footer영역 */}
          <S.Footer>
            <h1>Footer</h1>
          </S.Footer>
        </S.ContentWrapper>
      </S.Layout>
    </BaseLayout>
  );
}

export default TestLayout;

const S = {
  Layout: styled.div<{ $mode: NavMode }>`
    width: 100%;
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: ${({ $mode }) => ($mode === 'top' ? 'column' : 'row')};
  `,
  Header: styled.div<{ $mode: NavMode }>`
    /* 레이아웃 레벨 Header 스타일 */
    ${({ $mode }) => {
      if ($mode === 'left' || $mode === 'right') {
        return `
          width: 200px;
          flex-shrink: 0;
        `;
      }
      return '';
    }}
    /* right 모드: order로 Header를 오른쪽에 배치 (값이 클수록 뒤에 배치) */
    ${({ $mode }) => $mode === 'right' && 'order: 2;'}
  `,
  ContentWrapper: styled.div<{ $mode: NavMode }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    /* right 모드: order로 Content를 왼쪽에 배치 (값이 작을수록 앞에 배치) */
    ${({ $mode }) => $mode === 'right' && 'order: 1;'}
  `,
  OutletWrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  `,
  Footer: styled.div`
    /* 레이아웃 레벨 Footer 스타일 */
    flex-shrink: 0;
  `,
};
