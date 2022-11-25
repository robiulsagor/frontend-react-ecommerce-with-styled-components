import styled from "styled-components"
import Navbar from "./Navbar"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    ${mobile({ marginBottom: '50px' })};
    ${lmobile({ marginBottom: '60px' })};
`

const NavTemplate = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default NavTemplate