import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('../assets/home-bg.svg') no-repeat 700px bottom;
  background-color: ${(props) => props.theme.background};
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: 54px;
  color: ${(props) => props.theme.primary};
  padding-bottom: 50px;
  text-align: left;
  max-width: 500px;
`

export const SubTitle = styled.p`
  font-size: 1.25rem;
  padding-bottom: 50px;
  text-align: left;
`

export const ButtonBox = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  height: 3.125rem;
  width: 2.5rem;
  font-size: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 3.125rem;
  border: none;
  border-radius: 5px;
  position: relative;
  padding-left: 3.5rem;
  padding-right: 1.25rem;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: opacity(0.9);
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img.attrs(() => ({
  src: '../../src/assets/home-bg.svg',
}))`
  width: 50%;
`
