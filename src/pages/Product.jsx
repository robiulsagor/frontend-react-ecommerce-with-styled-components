import { Add, Remove } from "@mui/icons-material"
import { useContext, useState } from "react"
import styled from "styled-components"
import { DiscountContext } from "../App"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div`
    padding: 50px 30px;

`

const Wrapper = styled.div`
    display: flex;
    gap: 50px;
`

const ImgContainer = styled.div`
    flex: 1;
    height: 70vh;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 10px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.div`
    font-size: 35px;
    font-weight: 600;
    `

const Desc = styled.p`
    color: #444;
    letter-spacing: 2px;
    text-align: justify;

`
const Price = styled.span`
    font-size: 35px;
    font-weight: 500

`
const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`

const OptionLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const OptionRight = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const OptionText = styled.div`
    font-size: 20px;
    font-weight: 500;
`

const OptionColor = styled.div`
    width:25px;
    height: 25px;
    border-radius: 50%;
    background: ${props => props.color};
    cursor: pointer;
`

const OptionSelect = styled.select`
    font-size: 15px;
    font-weight: 500;
    padding:5px 10px;
`
const OptionOption = styled.option``

const CartAmountBtnContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const CartAmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const CartRemoveAmountIconContainer = styled.div`
    transition:.2s;
    opacity: ${props => props.cartAmount === 1 && '.3'};
    cursor: ${props => props.cartAmount === 1 ? 'default' : 'pointer'};
    
    &:hover{
        opacity: .3
    }
`
const CartAddAmountIconContainer = styled.div`
    transition:.2s;
    opacity: ${props => props.cartAmount === 10 && '.3'};
    cursor: ${props => props.cartAmount === 10 ? 'default' : 'pointer'};
    
    &:hover{
        opacity: .3
    }
`

const CartAmount = styled.span`
    border: 1px solid #555;
    border-radius: 8px;
    padding: 5px 8px;
`

const CartBtn = styled.button`
    padding: 8px;
    background: teal;
    color:#fff;
    font-weight: 500;
    font-size: 17px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;

    &:hover{
        opacity: .8
    }
`


const Product = () => {
    const discount = useContext(DiscountContext)
    const [cartAmount, setCartAmount] = useState(4)

    const handleCartAmount = type => {
        type === "increase" ? cartAmount < 10 && setCartAmount(cartAmount + 1) : cartAmount > 1 && setCartAmount(cartAmount - 1)
    }

    return (
        <>
            {discount[0] && <Discounts />}
            <Navbar />
            <Container>
                <Wrapper>
                    <ImgContainer>
                        <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Denim jumpsuit</Title>
                        <Desc>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo architecto reiciendis amet quisquam ab quis ratione enim placeat, voluptatibus tempore, eaque eos expedita impedit, hic beatae accusamus corporis laudantium voluptatem.
                        </Desc>
                        <Price>
                            $ 20
                        </Price>
                        <OptionContainer>
                            <OptionLeft>
                                <OptionText>Color: </OptionText>
                                <OptionColor color="#000" />
                                <OptionColor color="#f44" />
                                <OptionColor color="#aaa" />
                            </OptionLeft>
                            <OptionRight>
                                <OptionText>Size: </OptionText>
                                <OptionSelect>
                                    <OptionOption>XS</OptionOption>
                                    <OptionOption>S</OptionOption>
                                    <OptionOption>M</OptionOption>
                                    <OptionOption>L</OptionOption>
                                    <OptionOption>XL</OptionOption>
                                </OptionSelect>
                            </OptionRight>
                        </OptionContainer>

                        <CartAmountBtnContainer>
                            <CartAmountContainer>
                                <CartRemoveAmountIconContainer cartAmount={cartAmount} onClick={() => handleCartAmount("decrease")}>
                                    <Remove />
                                </CartRemoveAmountIconContainer>
                                <CartAmount>{cartAmount} </CartAmount>
                                <CartAddAmountIconContainer cartAmount={cartAmount} onClick={() => handleCartAmount("increase")}>
                                    <Add />
                                </CartAddAmountIconContainer>
                            </CartAmountContainer>
                            <CartBtn>Add to Cart</CartBtn>
                        </CartAmountBtnContainer>
                    </InfoContainer>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default Product