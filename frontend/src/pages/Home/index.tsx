import { ArrowLineRight } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from './styles'

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local de sua cidade</Title>
        <SubTitle>Encontre no comércio local tudo o que precisa!</SubTitle>

        <NavLink to="/new">
          <Button>
            <ButtonBox>
              <ArrowLineRight size={20} />
            </ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </NavLink>
      </LeftContainer>

      <RightContainer>
        <Image alt="" />
      </RightContainer>
    </Container>
  )
}
