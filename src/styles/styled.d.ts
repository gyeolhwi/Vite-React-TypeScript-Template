import 'styled-components';
import { type Theme } from './theme';

/**
 * @description styled-components 타입 선언
 * @description Typescript의 경우 사용자가 만든 theme 타입 선언이 필요함
 * @example
 * const StyledButton = styled.button`
 *   background-color: ${({ theme }) => theme.colors.primary};
 * `;
 * 
 * const StyledButton = styled.button<{ theme: Theme }>`
 *   background-color: ${({ theme }) => theme.colors.primary};
 * `;
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

