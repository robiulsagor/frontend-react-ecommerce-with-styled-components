import { Close } from "@mui/icons-material"
import { useContext } from "react"
import styled from "styled-components"
import { NavigationContext } from "../contextAPI/NavContext"

const Container = styled.div`
    width: 60%;
    height: 100vh;
    background: rgba(0,0,0,0.85);
    position: fixed;
    top:0;
    right: ${props => props.show ? '-1%' : '-70%'};
    z-index: 99;
    transition: .3s;
`

const CloseBtn = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 15px;
    top: 8px;
    color: #000;
    background: #fff;
    border-radius: 50%;
    &:hover{
        opacity: .6;
    }
`

const LinksContainer = styled.ul`
    list-style-type: none;
    margin:0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100%;  
`

const Links = styled.li`
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: .2s;

    &:hover{
        color: #999;
    }
    `

const MobileNavbar = () => {
    const { showNav, setShowNav } = useContext(NavigationContext)

    return (
        <Container show={showNav}>
            <LinksContainer>
                <CloseBtn onClick={() => setShowNav(false)}><Close /> </CloseBtn>
                <Links>Register</Links>
                <Links>Login</Links>
                <Links>Cart</Links>
            </LinksContainer>
        </Container>
    )
}

export default MobileNavbar