import styled from 'styled-components'

function NotFound() {
  return (
    <S.Container>
      <S.Title>NotFound</S.Title>
      <S.Description>The page you are looking for does not exist.</S.Description>
    </S.Container>
  )
}

export default NotFound

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
  Title: styled.h1`
    font-size: 2rem;
    font-weight: bold;
  `,
  Description: styled.p`
    font-size: 1rem;
    color: #666;
  `,
}