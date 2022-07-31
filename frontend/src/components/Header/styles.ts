import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  margin: 0 auto;
  padding: 1rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }

  @media screen and (max-width: 768px) {
    a:nth-of-type(2) {
      display: none;
    }

    a:nth-of-type(1) {
      margin: 0 auto;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme.background};
  }

  h1 {
    color: ${(props) => props.theme.primary};
  }
`

export const BackHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`
