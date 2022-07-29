import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.875rem;
`

export const InputStyled = styled.input`
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  height: 1.75rem;
  font-size: 1.5rem;
  padding: 1rem;
`
