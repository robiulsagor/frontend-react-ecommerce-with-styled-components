import styled from "styled-components"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"


const Container = styled.div`
    padding: 50px 30px;
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;
    background-size: 100% ;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${mobile({ backgroundSize: '380%' })}
    ${lmobile({ backgroundSize: '340%' })}
    ${tablet({ backgroundSize: '150%' })}
    ${laptop({ backgroundSize: '120%' })}
`

const Wrapper = styled.div`
    width: 30%;
    background: rgba(255,255, 255,0.8);
    padding:20px;
    border-radius: 10px;
    ${mobile({ width: '100%', padding: '14px' })}
    ${lmobile({ width: '90%', padding: '15px' })}
    ${tablet({ width: '60%', maxWidth: '400px', minWidth: '300px', padding: '16px' })}
    ${laptop({ width: '40%', padding: '20px' })}
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 35px;
    ${mobile({ fontSize: '22px' })}
    ${lmobile({ fontSize: '23px' })}
    ${tablet({ fontSize: '26px' })}
    ${laptop({ fontSize: '30px' })}
`

const Form = styled.form`
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px 15px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    background: transparent;    
    border: 1px solid #6f6f6f;
    border-radius: 5px;
    font-size: 16px;
    outline: none;

    &:focus{
        outline: 1px solid teal;
    }
     ${mobile({ fontSize: '13px', padding: '10px' })}
    ${lmobile({ fontSize: '14px', padding: '10px' })}
    ${tablet({ fontSize: '15px', padding: '10px' })}
    ${laptop({ fontSize: '16px', padding: '10px' })}
`

const Btn = styled.button`
    padding: 10px;
    background: teal;
    border: none;
    outline: none;
    width: 40%;
    font-size: 19px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
    font-weight: 500;

    &:hover{
        background: #ccc;
        color: #444;
    }
    ${mobile({ fontSize: '14px' })}
    ${lmobile({ fontSize: '15px' })}
    ${tablet({ fontSize: '16px' })}
    ${laptop({ fontSize: '17px' })}
    `

const BottomLink = styled.a`
    display: block;
    text-transform: uppercase;
    margin-bottom: 9px;
    text-decoration: underline;
    color: #333;
    transition: .2s;

    &:hover{
        color: #999;
    }
    ${mobile({ fontSize: '14px' })}
    ${lmobile({ fontSize: '15px' })}
    ${tablet({ fontSize: '16px' })}
    ${laptop({ fontSize: '17px' })}
`

const Signin = () => {
    return (
        <Container>
            <Wrapper>
                <Title>sign in</Title>
                <Form>
                    <Input type="text" placeholder="user name" />
                    <Input type="password" placeholder="password" />
                    <Btn>Signin</Btn>
                </Form>

                <BottomLink href="#">forgot your password?</BottomLink>
                <BottomLink href="#">create a new account</BottomLink>
            </Wrapper>
        </Container>
    )
}

export default Signin