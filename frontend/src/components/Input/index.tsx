import { Container, InputStyled } from './styles'

interface InputProps {
  label: string
  name: string
  value: string
  onChange: Function
}

export function Input({ label, name, value, onChange }: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputStyled
        required
        name={name}
        value={value}
        onChange={(ev) => {
          onChange((prev: any) => ({
            ...prev,
            [name]: ev.target.value,
          }))
        }}
      />
    </Container>
  )
}
