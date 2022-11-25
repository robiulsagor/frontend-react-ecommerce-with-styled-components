import styled from "styled-components"

const Container = styled.div`
    padding: 50px 30px;
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;
    background-size: 100% ;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Wrapper = styled.div`
    width: 30%;
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