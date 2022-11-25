import { EmailOutlined, FacebookRounded, Instagram, PhoneOutlined, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    padding: 50px 30px;
    padding-bottom: 10px;
    display: flex;
    gap: 80px;
    ${mobile({ flexDirection: 'column', padding: '25px 12px', gap: '20px' })};
    ${lmobile({ flexDirection: 'column', padding: '25px 20px', gap: '20px' })};
    ${tablet({ flexWrap: 'wrap', padding: '25px 20px', gap: '26px' })};
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${mobile({ gap: '13px' })};
    ${lmobile({ gap: '15px' })};
    ${tablet({ gap: '18px', minWidth: '320px' })};
    ${laptop({ gap: '18px', })};

`

const Logo = styled.div`
    font-size: 35px;
    font-weight: 700;
    ${mobile({ fontSize: '23px', fontWeight: '600' })};
    ${lmobile({ fontSize: '26px', fontWeight: '600' })};
    ${tablet({ fontSize: '29px', fontWeight: '600' })};
    ${laptop({ fontSize: '32px', fontWeight: '600' })};
`

const Desc = styled.p`
    color: #556;
    letter-spacing: 1px;
    text-align: justify;
    font-weight: 500;

    ${mobile({ fontSize: '12px' })};
    ${lmobile({ fontSize: '14px' })};
    ${tablet({ fontSize: '14px' })};
    ${laptop({ fontSize: '14px' })};

`

const SocialIconContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-left: -10px;
    ${mobile({ gap: '0px' })};
    ${lmobile({ gap: '4px' })};
    ${tablet({ gap: '4px' })};
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

    ${mobile({ transform: 'scale(0.7)' })};
    ${lmobile({ transform: 'scale(0.8)' })};
    ${tablet({ transform: 'scale(0.8)' })};
`

const Center = styled.div`
    flex: 1;
    ${mobile({ display: 'none' })};
    ${lmobile({ display: 'none' })};
    ${tablet({ display: 'none' })};
`

const LinksTitle = styled.h1`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 45px;
    ${mobile({ marginBottom: '12px', fontSize: '19px', fontWeight: '500' })};
    ${lmobile({ marginBottom: '22px', fontSize: '22px', fontWeight: '500' })};
    ${tablet({ marginBottom: '22px', fontSize: '23px', fontWeight: '500' })};
    ${laptop({ marginBottom: '22px', fontSize: '23px', fontWeight: '500' })};
`

const LinksContainer = styled.ul`
    font-weight: 500;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    padding: 0;
    ${laptop({ gap: '15px' })};
    
    `

const LinksList = styled.li`
    font-size: 16px;
    flex: 1;
    min-width: 40%;
    ${laptop({ fontSize: '15px' })};

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
    ${mobile({ fontSize: '12px', gap: '5px' })};
    ${lmobile({ fontSize: '15px', gap: '5px' })};
    ${tablet({ fontSize: '15px', gap: '5px' })};
`

const ContactList = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    ${mobile({ gap: '1px', marginLeft: '-4px' })};
    ${lmobile({ gap: '5px' })};
    ${laptop({ fontSize: '15px', gap: '8px' })};

`

const ContactIconContainer = styled.div`
    ${mobile({ transform: 'scale(.6)' })};
    ${lmobile({ transform: 'scale(.7)' })};
    ${tablet({ transform: 'scale(.8)' })};
    ${laptop({ transform: 'scale(.9)' })};
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