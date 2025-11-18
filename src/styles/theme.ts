export const theme = {
  colors: {
    // Primary & Secondary
    primary: '#1890ff',
    secondary: '#722ed1',
    
    // Semantic Colors
    success: '#52c41a',
    error: '#ff4d4f',
    warning: '#faad14',
    info: '#1890ff',
    
    // Border & Background
    border: '#d9d9d9',
    background: '#ffffff',
    backgroundSecondary: '#fafafa',
    
    // Common Colors
    white: '#ffffff',
    black: '#000000',
    gray: '#8c8c8c',
    lightGray: '#f5f5f5',
    darkGray: '#434343',
  },
};

export type Theme = typeof theme;
export type ThemeColor = keyof typeof theme.colors;
