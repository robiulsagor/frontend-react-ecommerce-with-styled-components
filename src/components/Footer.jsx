import { EmailOutlined, FacebookRounded, Instagram, PhoneOutlined, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    padding: 50px 30px;
    display: flex;gap: 80px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Logo = styled.div`
    font-size: 35px;
    font-weight: 700;
`

const Desc = styled.div`
    color: #555;
    letter-spacing: 1px;
    text-align: justify;
    font-weight: 500;
`

const SocialIconContainer = styled.div`
    display: flex;
    gap: 15px;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: .2s;
    cursor: pointer;
    font-size: 50px;

    &:hover{
        color: ${props => props.bg};
        background: #d0d0d0;
    }
`

const Center = styled.div`
    flex: 1;
`

const LinksTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 45px
`

const LinksContainer = styled.ul`
    font-weight: 500;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    `

const LinksList = styled.li`
    flex: 1;
    min-width: 40%;
`

const Right = styled.div`
    flex: 1;
   
`

const ContactContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const ContactList = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
`

const ContactIconContainer = styled.div`

`

const ContactDetails = styled.div`
    font-weight: 500;
`

const Payment = styled.img`

`

const LinkA = styled.a`
    color: #000;
    text-decoration: none;
    font-weight: 500;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    Sagor.Dev
                </Logo>

                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam hic ipsa recusandae dolorem voluptate quod autem odit, voluptatibus repudiandae.
                </Desc>

                <SocialIconContainer>
                    <SocialIcon bg="#1974ec" >
                        <FacebookRounded sx={{ fontSize: '30px' }} />
                    </SocialIcon>
                    <SocialIcon bg="#4da6e9" >
                        <Twitter sx={{ fontSize: '30px' }} />
                    </SocialIcon>
                    <SocialIcon bg="#c14170">
                        <Instagram sx={{ fontSize: '30px' }} />
                    </SocialIcon>
                    <SocialIcon bg="#9a1020">
                        <Pinterest sx={{ fontSize: '30px' }} />
                    </SocialIcon>
                </SocialIconContainer>
            </Left>
            <Center>
                <LinksTitle>Useful Links</LinksTitle>
                <LinksContainer>
                    <LinksList>Home</LinksList>
                    <LinksList>Cart</LinksList>
                    <LinksList>Man's Fashion</LinksList>
                    <LinksList>Accessories</LinksList>
                    <LinksList>My Account</LinksList>
                    <LinksList>Order Tracking</LinksList>
                    <LinksList>Wishlist</LinksList>
                    <LinksList>Term</LinksList>
                </LinksContainer>
            </Center>
            <Right>
                <LinksTitle> Contact </LinksTitle>
                <ContactContainer>
                    <ContactList>
                        <ContactIconContainer><Room /></ContactIconContainer>
                        <ContactDetails>622 Dixie Path, South Tabisnchester, 9802829</ContactDetails>
                    </ContactList>
                    <ContactList>
                        <ContactIconContainer><PhoneOutlined /></ContactIconContainer>
                        <LinkA href="tel:+12345678901">+ 123 456 78 901</LinkA>
                    </ContactList>
                    <ContactList>
                        <ContactIconContainer><EmailOutlined /></ContactIconContainer>
                        <ContactDetails>
                            <LinkA href="mailto:contact@sagor.dev">contact@sagor.dev</LinkA>
                        </ContactDetails>
                    </ContactList>
                    <ContactList>
                        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                    </ContactList>
                </ContactContainer>
            </Right>
        </Container>
    )
}

export default Footer