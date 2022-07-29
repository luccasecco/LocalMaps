import styled from 'styled-components'
import { MapContainer as MapContainerLeaflet } from 'react-leaflet'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`

export const Form = styled.form`
  width: 40vw;
  background-color: ${(props) => props.theme.white};
  padding: 3.125rem;
  margin-top: 2.5rem;
  border-radius: 8px;
  @media (max-width: 1024px) {
    width: 70vw;
  }
`

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 2.5rem;
  padding-bottom: 1.875rem;
`

export const MapContainer = styled(MapContainerLeaflet)`
  height: 50vh;
`

export const Section = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 1.25rem;
  padding-bottom: 1.875rem;
  padding-top: 1.875rem;
  font-weight: 700;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.background};
  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.background}` : 'none'};
  border-radius: 8px;
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.625rem;
  cursor: pointer;
`

export const CategoryImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 1.125rem;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 3.125rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.primary}99;
  }
`
