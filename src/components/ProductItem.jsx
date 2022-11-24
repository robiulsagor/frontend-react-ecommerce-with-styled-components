import { FavoriteOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const IconContainer = styled.div`
    opacity: 0;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: rgba(0,0,0, 0.4);
    transition: .3s
`

const Container = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover ${IconContainer}{
        opacity: 1
    }
`

const ImgContainer = styled.div`
    width: 280px;
    height: 350px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Icon = styled.div`
    width:  40px;
    height: 40px;
    border-radius: 50%;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    cursor: pointer;

    &:hover{
        background: #f0f0f0;
        transform: scale(1.2)
    }
`



const ProductItem = ({ product }) => {
    return (
        <Container>
            <ImgContainer>
                <Img src={product.img} />
            </ImgContainer>
            <IconContainer>
                <Icon><ShoppingCartOutlined /></Icon>
                <Icon><Search /></Icon>
                <Icon><FavoriteOutlined /></Icon>
            </IconContainer>
        </Container>
    )
}

export default ProductItem