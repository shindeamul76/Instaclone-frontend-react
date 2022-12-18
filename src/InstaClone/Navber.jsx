import { CameraAltOutlined, Instagram } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
border-bottom: 2px solid black;
background-color: gray;
`
const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px

`
const LogoContainer = styled.div`
boder-radius: 50%;
`
const Logo = styled.img`
//  width: 50px;
//  height: 50px;
//  border-radius: 50%;
`
const NameContainer = styled.div``
const Name = styled.h2`
color: black;
font-weight: 500;
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const CameraContainer = styled.div``

const Navber = ({setForm}) => {
  return (
    <Container>
      <Left>
        <LogoContainer>
            {/* {<Logo src=""/> } */}
             <Instagram/>
        </LogoContainer>
        <NameContainer>
            <Name>Instaclone</Name>
        </NameContainer>
      </Left>
      <Right>
        <CameraContainer onClick={ () => setForm(prev => !prev) }>
            <CameraAltOutlined />
        </CameraContainer>
      </Right>
    </Container>
  )
}

export default Navber
