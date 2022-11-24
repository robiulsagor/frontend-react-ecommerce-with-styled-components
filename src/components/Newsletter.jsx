import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 50vh;
    padding: 50px 30px;
    background: #fff0f0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #444;
    letter-spacing: 2px;
`

const InputContainer = styled.div`
    border: 1px solid #e0e0e0;
    display: flex;
    width: 40%;
    justify-content: space-between;
    border-radius: 8px;
    overflow: hidden;
`

const Input = styled.input`
    flex: 10;
    padding: 10px 20px;
    font-size: 17px;
    border: none;
    outline:none;
`

const BtnContianer = styled.div`
    background: teal;
    flex: 1;  
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: .2s;

    &:hover{
        opacity: .6
    }
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Text>Get instant updates of the products you love!</Text>
            <InputContainer>
                <Input placeholder="@Your email here" />
                <BtnContianer>
                    <Send />
                </BtnContianer>
            </InputContainer>
        </Container>
    )
}

export default Newsletter