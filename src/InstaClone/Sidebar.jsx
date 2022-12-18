import { AddBoxOutlined, ExploreOutlined, FavoriteBorderRounded, HomeOutlined, MapsUgcRounded, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: black;
color: white;
`
const ListContainer = styled.ul``

const IconContainer = styled.li`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`
const Name = styled.h4`
margin-left: 10px;
color: gray;

`

const Sidebar = () => {
  return (
    <Container>
        <ListContainer>
        <IconContainer>
            <HomeOutlined/>
            <Name>Home</Name>
        </IconContainer>
        <IconContainer>
            <SearchOutlined/>
            <Name>Search</Name>
        </IconContainer>
        <IconContainer>
            <ExploreOutlined/>
            <Name>Explore</Name>
        </IconContainer>
        <IconContainer>
            <MapsUgcRounded/>
            <Name>Messages</Name>
        </IconContainer>
        <IconContainer>
            <FavoriteBorderRounded/>
            <Name>Notification</Name>
        </IconContainer>
        <IconContainer>
            <AddBoxOutlined/>
            <Name>Create</Name>
        </IconContainer>
        </ListContainer>
    </Container>
  )
}

export default Sidebar
