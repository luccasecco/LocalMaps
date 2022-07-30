import { ArrowCircleLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import imgLogo from '../../assets/marker.jpg'
import { BackHome, Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <NavLink to={'/'}>
        <Logo>
          <img src={imgLogo} alt="" />
          <h1>LocalMaps</h1>
        </Logo>
      </NavLink>
      <NavLink to={'/'}>
        <BackHome>
          <ArrowCircleLeft size={25} />
          Voltar para a página inicial
        </BackHome>
      </NavLink>
    </Container>
  )
}
