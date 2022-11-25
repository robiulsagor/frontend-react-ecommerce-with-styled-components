import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    height: 50vh;
    padding: 50px 30px;
    background: #fff0f0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    ${mobile({ padding: '50px 15px' })};
    ${lmobile({ padding: '50px 15px' })};
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
    ${mobile({ fontSize: '32px' })};
    ${lmobile({ fontSize: '34px' })};
    ${tablet({ fontSize: '36px' })};
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #444;
    letter-spacing: 2px;
    text-align: center;

    ${mobile({ fontSize: '14px' })};
    ${lmobile({ fontSize: '16px' })};
    ${tablet({ fontSize: '17px' })};
`

const InputContainer = styled.div`
    border: 1px solid #e0e0e0;
    display: flex;
    width: 40%;
    justify-content: space-between;
    border-radius: 8px;
    overflow: hidden;
    ${mobile({ width: '90%' })};
    ${lmobile({ width: '85%' })};
    ${tablet({ width: '68%', maxWidth: '400px' })};
`

const Input = styled.input`
    flex: 10;
    padding: 10px 20px;
    font-size: 17px;
    border: none;
    outline:none;
    ${mobile({ flex: 5, fontSize: '14px' })};
    ${lmobile({ flex: 4, fontSize: '15px' })};
    ${tablet({ flex: 5, fontSize: '15px' })};
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

    ${mobile({ transform: 'scale(1)' })}
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