import styled from "styled-components"

const Container = styled.div`
    padding: 50px 30px;
    background: url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;
    background-size: 100% ;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Wrapper = styled.div`
    width: 40%;
    background: rgba(255,255, 255,0.8);
    padding:20px;
    border-radius: 10px;

`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 35px;
`

const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
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
    `

const Agreement = styled.p`
    margin: 16px 0;
    font-size: 14px;
    color: #444;
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
    `

const Register = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>create an account</Title>
                    <Form>
                        <Input type="text" placeholder="first name" />
                        <Input type="text" placeholder="last name" />
                        <Input type="text" placeholder="user name" />
                        <Input type="email" placeholder="email" />
                        <Input type="password" placeholder="password" />
                        <Input type="password" placeholder="confirm password" />
                        <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the<b> Privacy Policy</b></Agreement>
                        <Btn>Create</Btn>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register