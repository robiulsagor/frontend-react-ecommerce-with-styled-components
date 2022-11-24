import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
`

const ArrowContainer = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background: #cfcfcf;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: .2s;
    cursor: pointer;
    position: absolute;
    z-index: 5;
    top: 50%;
    left: ${props => props.dir === 'left' && '10px'};
    right: ${props => props.dir === 'right' && '10px'};

    &:hover{
        opacity: .6;
    }
`

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    transform: translateX(-${props => props.sliderIndex * 100}vw);
    transition: .4s;
`

const Slide = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    gap: 40px;
    flex: 1;
    width: 100vw;
`

const ImgContainer = styled.div`
    width: 50vw;
    height: 100vh;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center; 
`

const Img = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
`

const TextContainer = styled.div`
    flex: 1;
    width: 50vw;
`

const Title = styled.h1`
    font-size: 53px;
    font-weight: 600;
    text-transform: uppercase;
`

const Desc = styled.div`
    font-size: 18px;
    color: #555;
    letter-spacing: 2px;
    margin: 40px 0
`

const Btn = styled.div`
    padding: 10px;
    background: transparent;
    border: 1px solid #555;
    font-size: 19px;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition: .2s;
    z-index: 1;
    overflow: hidden;
    
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left:0;
        width: 100%;
        height: 0%;
        background: #490;
        z-index: -1;
        transition: .2s;
    }

    &:hover{
        color: #fff;
    }

    &:hover::before{
        height: 120%;
    }
`

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const sliderLength = sliderItems.length

    const handleSlide = direction => {
        direction === "left" ? sliderIndex > 0 ? setSliderIndex(sliderIndex - 1) : setSliderIndex(sliderLength - 1) :
            sliderIndex < sliderLength - 1 ? setSliderIndex(sliderIndex + 1) : setSliderIndex(0)
        console.log(sliderIndex, " = ", sliderIndex * 100, " vw");
    }

    useEffect(() => {
        setTimeout(() => {
            sliderIndex < sliderLength - 1 ? setSliderIndex(sliderIndex + 1) : setSliderIndex(0)
        }, [3000]
        );
    }, [sliderIndex])


    return (
        <Container>
            <ArrowContainer dir="left" onClick={() => handleSlide("left")}>
                <ArrowLeft sx={{ fontSize: '35px' }} />
            </ArrowContainer>

            <Wrapper sliderIndex={sliderIndex}>
                {sliderItems.map(slide => (
                    <Slide key={slide.id}>
                        <ImgContainer>
                            <Img src={slide.img} />
                        </ImgContainer>
                        <TextContainer>
                            <Title>{slide.title} </Title>
                            <Desc>{slide.desc} </Desc>
                            <Btn>shop now</Btn>
                        </TextContainer>
                    </Slide>
                ))}

            </Wrapper>

            <ArrowContainer dir="right" onClick={() => handleSlide("right")}>
                <ArrowRight sx={{ fontSize: '35px' }} />
            </ArrowContainer>
        </Container>
    )
}

export default Slider