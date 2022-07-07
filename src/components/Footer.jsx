import React from "react"
import styled from "styled-components"
import {Email, Facebook, Instagram, Phone, Room, Twitter} from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
   display: flex;
   ${mobile({ flexDirection: "column"})};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ alignItems: "center"})};
`
const Logo = styled.h1`

`
const Desc = styled.p`
   margin: 20px 0;
`
const SocialContainer = styled.div`
   display: flex;
`
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${mobile({ display: "none"})};
   
`
const Title = styled.h3`
   margin-bottom: 30px;

`
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${mobile({ backgroundColor: "#eee", alignItems: "center", justifyContent: "center"})};
`

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`

const Payment = styled.img`
   width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Ebonyi Shops</Logo>
          <Desc>
            From the comfort of your home, you’re able to choose from a large variety of products as well as a range of vendors, 
            pay and have it delivered to you at home or at work
          </Desc>
          <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>About Us</ListItem>
            <ListItem>Shipping & Delivery</ListItem>
            <ListItem>Return Policy</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Affiliate Partner</ListItem>
            <ListItem>Sell on Ebonyi Shops</ListItem>
            <ListItem>Store Manager</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>Why Choose Ebonyi Shops</ListItem>
        </List>
      </Center>

     
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}} /> Sam Egwu Plaza, 63 Gunning Rd. Abakaliki</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}}/> 08061404259</ContactItem>
        <ContactItem><Email style={{marginRight: "10px"}}/> contact@ebonyishops.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer