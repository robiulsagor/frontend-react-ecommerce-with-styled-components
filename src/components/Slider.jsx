import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`

const ArrowContainer = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #cfcfcf;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: .2s;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: ${props => props.dir === 'left' && '10px'};
    right: ${props => props.dir === 'right' && '10px'};

    &:hover{
        opacity: .6;
    }
`

const Wrapper = styled.div`
    height: 100vh;
`

const Slide = styled.div`

`

const ImgContainer = styled.div`

`

const Img = styled.div`

`

const TextContainer = styled.div`

`

const Title = styled.div`

`

const Desc = styled.div``
const Btn = styled.div``

const Slider = () => {
    return (
        <Container>
            <ArrowContainer dir="left">
                <ArrowLeft sx={{ fontSize: '35px' }} />
            </ArrowContainer>

            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Img></Img>
                    </ImgContainer>
                    <TextContainer>
                        <Title>Autumn collection 1</Title>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi fugiat maxime rem repellat nulla maiores doloribus culpa nihil consectetur tenetur.</Desc>
                        <Btn>shop now</Btn>
                    </TextContainer>
                </Slide>
            </Wrapper>

            <ArrowContainer dir="right">
                <ArrowRight sx={{ fontSize: '35px' }} />
            </ArrowContainer>
        </Container>
    )
}

export default Slider