import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.875rem;

  label {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.primary};
  }
`

export const InputStyled = styled.input`
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  height: 1.75rem;
  font-size: 0.875rem;
  padding: 1.5rem;
`
