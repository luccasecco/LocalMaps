import { Input } from '../../components/Input'
import { useState } from 'react'
import { LatLngExpression } from 'leaflet'
import { TileLayer, Marker } from 'react-leaflet'
import { categories } from './categories'
import { useGetLocation } from '../../hooks/useGetLocation'

import {
  ButtonContainer,
  Button,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from './styles'
import { toast } from 'react-toastify'

export function New() {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    contact: '',
    category: '',
    coords: [0, 0],
  })

  const { coords } = useGetLocation()

  async function onSubmit() {
    const request = await fetch('http://localhost:3000/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formValues,
        latitude: formValues.coords[0],
        longitude: formValues.coords[1],
      }),
    })

    if (request.ok) {
      toast('Estabelecimento gravado com sucesso!', {
        type: 'success',
        autoClose: 2000,
      })
    }

    setFormValues({
      name: '',
      description: '',
      contact: '',
      category: '',
      coords: [0, 0],
    })
  }

  if (!coords) {
    return <h1>Obtendo localização ...</h1>
  }

  // function LocationMarker() {
  //   const [position, setPosition] = useState(null)
  //   const map = useMapEvents({
  //     click() {
  //       map.locate()
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng)
  //       map.flyTo(e.latlng, map.getZoom())
  //     },
  //   })

  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   )
  // }

  return (
    <Container>
      <Form
        onSubmit={(ev) => {
          ev.preventDefault()
          onSubmit()
        }}
      >
        <FormTitle>Cadastro do comércio local</FormTitle>
        <Section>Dados</Section>
        <Input
          label="Nome do empreendimento"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />

        <Input
          label="Descrição das atividades"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />

        <Input
          label="Telefone para contato"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />

        <Section>Endereço</Section>

        <MapContainer
          center={
            {
              lat: coords[0],
              lng: coords[1],
            } as LatLngExpression
          }
          zoom={13}
          // whenCreated={(map: any) => {
          //   map.addEventListener('click', (event: LeafletMouseEvent) => {
          //     setFormValues((prev) => ({
          //       ...prev,
          //       coords: [event.latlng.lat, event.latlng.lng],
          //     }))
          //   })
          // }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              [formValues.coords[0], formValues.coords[1]] as LatLngExpression
            }
          />
        </MapContainer>

        <Section>Categoria</Section>
        <CategoryContainer>
          {categories.map((category) => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setFormValues((prev) => ({ ...prev, category: category.key }))
              }}
              isActive={formValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>

        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}
