import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    position: relative;
`

const ImgContainer = styled.div`
   height: 70vh;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const TextContainer = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: rgba(0,0,0, 0.4)
`

const Title = styled.h2`
    font-size: 30px;
    color: #fff;
    font-weight: 500
`
const Btn = styled.button`
    background: #dfdfdf;
    color: #300;
    font-size: 18px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .2s;    

    &:hover{
        opacity: .6
    }
`

const CategoryItem = ({ category }) => {
    return (
        <Container>
            <ImgContainer>
                <Img src={category.img} />
            </ImgContainer>
            <TextContainer>
                <Title>{category.title}</Title>
                <Btn>shop now</Btn>
            </TextContainer>
        </Container>
    )
}

export default CategoryItem