import { Add, Remove } from "@mui/icons-material"
import { useContext } from "react"
import styled from "styled-components"
import { DiscountContext } from "../App"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div`
    padding: 50px 30px;
`

const Top = styled.div``

const TopTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
`

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

`

const Btn1 = styled.button`
    color: #000;
    background: transparent;
    border: 1px solid #222;
    padding:  10px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    transition: 0.2s;

    &::before{
        content: '';
        position: absolute;
        top:0;
        right: 0;
        width: 0%;
        height: 100%;
        background: #000;
        z-index: -1;
        transition: 0.2s;
    }

    &:hover{
        color: #fff
    }

    &:hover::before{
        width: 100%
    }
    `

const Btn2 = styled.button`
    color: #fff;
    background: #333;
    border: 1px solid #000;
    padding:  10px;    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    transition: .2s;
    z-index: 2;


    &::before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 0%;
        height: 100%;
        background: #FFF;
        z-index: -1;
        transition: .2s;
    }

    &:hover{
        color: #000;
    }

    &:hover::before{
        width: 100%;
    }
`

const TopTextsContainer = styled.div`
    display: flex;
    gap: 20px;
`

const TopTexts = styled.span`
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        color: #888;
        text-decoration: none;
    }
`

const Bottom = styled.div`
    display: flex;
    margin-top: 20px;
`

const ProductContainer = styled.div`
    flex: 9;
`

const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const InfoLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const ImgContainer = styled.div`
    width: 180px;
    height: 180px;
`

const Img = styled.img`
    width:100%;
    height: 100%;
`

const LeftTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    `

const LeftText = styled.span`
    font-size: 18px;
`

const ColorInfo = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${props => props.color};
`

const InfoRight = styled.div`
    margin-right: 20px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const RightTop = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const RightIconHolder = styled.div`
    cursor: pointer;
    transition: .2s;

    &:hover{
        opacity: .5;
    }
`

const RightAmount = styled.div`
    font-size: 18px;
`

const RightBottom = styled.div``
const RightPrice = styled.div`
    font-size: 28px;
    font-weight: 500;
`

const Hr = styled.hr`
    border: none;
    height: 1px; 
    background: #e0e0e0;
`

const OrderContainer = styled.div`
    border: 1px solid #333;
    border-radius: 10px;
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 38px;
    height: 52vh;
    padding: 20px;
`

const OrderTitle = styled.h1`
    font-size: 35px;
    font-weight: 500;
    text-align: center;
`

const OrderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

const OrderText = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 19px;
`

const OrderTextLeft = styled.div`
    font-weight: 500;
`
const OrderTextLeftBig = styled.div`
    font-size: 22px;
    font-weight: 600;
`
const OrderTextRight = styled.div``
const OrderTextRightBig = styled.div`
    font-size: 22px;
`



const Cart = () => {
    const discount = useContext(DiscountContext)
    return (
        <>
            {discount[0] && <Discounts />}
            <Navbar />
            <Container>
                <Top>
                    <TopTitle>your bag</TopTitle>
                    <TopContainer>
                        <Btn1>continue shopping</Btn1>
                        <TopTextsContainer>
                            <TopTexts>Shopping Bag(2)</TopTexts>
                            <TopTexts>Your Wishlist(0)</TopTexts>
                        </TopTextsContainer>
                        <Btn2>checkout now</Btn2>
                    </TopContainer>
                </Top>
                <Bottom>
                    <ProductContainer>
                        <Product>
                            <InfoLeft>
                                <ImgContainer>
                                    <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                </ImgContainer>
                                <LeftTextContainer>
                                    <LeftText>
                                        <b>Product:</b> JESSIE THUNDER SHOE
                                    </LeftText>
                                    <LeftText>
                                        <b>ID:</b> 9892829
                                    </LeftText>
                                    <ColorInfo color="#333" />
                                    <LeftText>
                                        <b>Size:</b> 35.7
                                    </LeftText>
                                </LeftTextContainer>
                            </InfoLeft>
                            <InfoRight>
                                <RightTop>
                                    <RightIconHolder>
                                        <Remove />
                                    </RightIconHolder>
                                    <RightAmount>3</RightAmount>
                                    <RightIconHolder>
                                        <Add />
                                    </RightIconHolder>
                                </RightTop>
                                <RightBottom>
                                    <RightPrice>$ 30</RightPrice>
                                </RightBottom>
                            </InfoRight>
                        </Product>
                        <Hr />
                        <Product>
                            <InfoLeft>
                                <ImgContainer>
                                    <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                </ImgContainer>
                                <LeftTextContainer>
                                    <LeftText>
                                        <b>Product:</b> JESSIE THUNDER SHOE
                                    </LeftText>
                                    <LeftText>
                                        <b>ID:</b> 9892829
                                    </LeftText>
                                    <ColorInfo color="#333" />
                                    <LeftText>
                                        <b>Size:</b> 35.7
                                    </LeftText>
                                </LeftTextContainer>
                            </InfoLeft>
                            <InfoRight>
                                <RightTop>
                                    <RightIconHolder>
                                        <Remove />
                                    </RightIconHolder>
                                    <RightAmount>3</RightAmount>
                                    <RightIconHolder>
                                        <Add />
                                    </RightIconHolder>
                                </RightTop>
                                <RightBottom>
                                    <RightPrice>$ 30</RightPrice>
                                </RightBottom>
                            </InfoRight>
                        </Product>
                        <Hr />
                        <Product>
                            <InfoLeft>
                                <ImgContainer>
                                    <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                </ImgContainer>
                                <LeftTextContainer>
                                    <LeftText>
                                        <b>Product:</b> JESSIE THUNDER SHOE
                                    </LeftText>
                                    <LeftText>
                                        <b>ID:</b> 9892829
                                    </LeftText>
                                    <ColorInfo color="#333" />
                                    <LeftText>
                                        <b>Size:</b> 35.7
                                    </LeftText>
                                </LeftTextContainer>
                            </InfoLeft>
                            <InfoRight>
                                <RightTop>
                                    <RightIconHolder>
                                        <Remove />
                                    </RightIconHolder>
                                    <RightAmount>3</RightAmount>
                                    <RightIconHolder>
                                        <Add />
                                    </RightIconHolder>
                                </RightTop>
                                <RightBottom>
                                    <RightPrice>$ 30</RightPrice>
                                </RightBottom>
                            </InfoRight>
                        </Product>
                        <Hr />
                    </ProductContainer>

                    <OrderContainer>
                        <OrderTitle>ORDER SUMMERY</OrderTitle>
                        <OrderTextContainer>
                            <OrderText>
                                <OrderTextLeft>Subtotal</OrderTextLeft>
                                <OrderTextRight>$ 80</OrderTextRight>
                            </OrderText>
                            <OrderText>
                                <OrderTextLeft>Estimated Shipping</OrderTextLeft>
                                <OrderTextRight>$ 5.99</OrderTextRight>
                            </OrderText>
                            <OrderText>
                                <OrderTextLeft>Shipping Discount</OrderTextLeft>
                                <OrderTextRight>$ 5.99</OrderTextRight>
                            </OrderText>
                            <OrderText>
                                <OrderTextLeftBig>Total</OrderTextLeftBig>
                                <OrderTextRightBig>$ 80</OrderTextRightBig>
                            </OrderText>
                        </OrderTextContainer>
                        <Btn2>checkout now</Btn2>
                    </OrderContainer>
                </Bottom>
            </Container>
            <Footer />
        </>
    )
}

export default Cart