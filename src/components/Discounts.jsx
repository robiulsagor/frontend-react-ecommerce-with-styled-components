import { Close } from "@mui/icons-material"
import { useContext } from "react"
import { DiscountContext } from "../App"
import styled from "styled-components"

const Container = styled.div`
    background: teal;
    padding: 10px;
    text-align: center;
    position: relative;
`

const Text = styled.span`
    font-size: 16px;
    color: #e0e0e0;
`

const Icon = styled.div`
    position: absolute;
    right: 10px;
    top:50%;
    transform: translateY(-50%);
    color: #e0e0e0;
    cursor: pointer;
    transition: .2s;

    &:hover{
        opacity: .3
    }
`

const Discounts = () => {
    const discount = useContext(DiscountContext)

    const closeDiscount = () => {
        discount[1](false)
    }

    return (
        <Container>
            <Text>Super Deal! Free shipping on Orders over $50!</Text>
            <Icon onClick={closeDiscount}>
                <Close />
            </Icon>
        </Container>
    )
}

export default Discounts