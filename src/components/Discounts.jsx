import styled from "styled-components"

const Container = styled.div`
    background: teal;
    padding: 10px;
    text-align: center;
`

const Text = styled.span`
    font-size: 16px;
    color: #e0e0e0;
`

const Discounts = () => {
    return (
        <Container>
            <Text>Super Deal! Free shipping on Orders over $50!</Text>
        </Container>
    )
}

export default Discounts