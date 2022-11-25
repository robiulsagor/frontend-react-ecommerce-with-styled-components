import { Add, Remove } from "@mui/icons-material"
import { green } from "@mui/material/colors"
import { useContext } from "react"
import styled from "styled-components"
import { DiscountContext } from "../App"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import MobileNavbar from "../components/MobileNavbar"
import NavTemplate from "../components/NavTemplate"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    padding: 50px 30px;
    ${mobile({ padding: '30px 10px' })}
    ${lmobile({ padding: '30px 12px' })}
    ${tablet({ padding: '30px 20px' })}
`

const Top = styled.div``

const TopTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    ${mobile({ fontSize: '18px' })}
    ${lmobile({ fontSize: '20px' })}
    ${tablet({ fontSize: '24px' })}
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
    ${mobile({ fontSize: '12px', padding: '8px' })}
    ${lmobile({ fontSize: '13px', padding: '10px' })}
    ${tablet({ fontSize: '15px', padding: '10px' })}
    
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
    ${mobile({ fontSize: '12px', padding: '8px' })}
    ${lmobile({ fontSize: '13px', padding: '10px' })}
    ${tablet({ fontSize: '15px', padding: '10px' })}
`

const TopTextsContainer = styled.div`
    display: flex;
    gap: 20px;
    ${mobile({ display: 'none' })}
    ${lmobile({ display: 'none' })}
    ${tablet({ display: 'none' })}
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
    align-items: flex-start;
    gap: 15px;
    position: relative;
    ${mobile({ flexDirection: 'column', gap: '30px', alignItems: 'stretch' })}
    ${lmobile({ flexDirection: 'column', gap: '30px', alignItems: 'stretch' })}
    ${tablet({ flexDirection: 'column', gap: '30px', alignItems: 'stretch' })}
`

const ProductContainer = styled.div`
    flex: 9;
    display: flex;
    flex-direction: column;
`

const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    flex: 5;
    ${mobile({ padding: '8px 0' })}
    ${lmobile({ padding: '8px 0' })}
    ${laptop({ flex: '2' })}

`

const ImgInfo = styled.div`
    flex: 1;
    width: 180px;
    height: 180px;
    ${mobile({ width: '180px', height: '100px' })}
    ${lmobile({ width: '200px', height: '110px' })}
`

const Img = styled.img`
    width:100%;
    height: 100%;
`

const TextInfo = styled.div`
    flex: 5;
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
    ${lmobile({ flexDirection: 'column' })}
    ${laptop({ flex: 3 })}
`

const LeftTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    ${mobile({ gap: '5px' })}
    ${lmobile({ gap: '8px' })}
    ${tablet({ gap: '12px', })}
    `

const LeftText = styled.span`
    font-size: 18px;
    ${mobile({ fontSize: '14px' })}
    ${lmobile({ fontSize: '15px' })}
    ${tablet({ fontSize: '17px' })}
`

const ColorInfo = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${props => props.color};
    ${mobile({ width: '15px', height: '15px' })}
    ${lmobile({ width: '18px', height: '18px' })}
    ${tablet({ width: '19px', height: '19px' })}
`

const RightTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    align-items: flex-end;
    justify-content: center;
    gap: 25px;
    flex:1;
    text-align: center;
    ${mobile({ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '5px' })}
    ${lmobile({ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '5px' })}
    ${laptop({ paddingRight: '10px' })}
`

const RightTop = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    ${mobile({ gap: '4px' })}
    ${lmobile({ gap: '5px' })}
    ${tablet({ gap: '6px' })}
`

const RightIconHolder = styled.div`
    cursor: pointer;
    transition: .2s;

    &:hover{
        opacity: .5;
    }
${mobile({ transform: 'scale(0.6)' })}
${lmobile({ transform: 'scale(0.7)' })}
${tablet({ transform: 'scale(0.8)' })}

`

const RightAmount = styled.span`
    font-size: 18px;    
    ${mobile({ fontSize: '14px' })}
    ${lmobile({ fontSize: '15px' })}
    ${tablet({ fontSize: '16px' })}
`

const RightBottom = styled.div`
`

const RightPrice = styled.p`
    font-size: 28px;
    font-weight: 500;
    ${mobile({ fontSize: '16px' })}
    ${lmobile({ fontSize: '17px' })}
    ${tablet({ fontSize: '22px' })}
`

const Hr = styled.hr`
    border: none;
    height: 1px; 
    background: #e0e0e0;
`

const OrderContainer = styled.div`
    border: 1px solid #cfcfcf;
    box-shadow: 0 5px 10px #e0e0e0;
    border-radius: 10px;
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 38px;
    min-height: 52vh;
    padding: 20px;
    
    ${laptop({ flex: 4, position: 'sticky', top: 0, left: 0, height: '100%' })}

`

const OrderTitle = styled.h1`
    font-size: 35px;
    font-weight: 500;
    text-align: center;
    ${mobile({ fontSize: '24px' })}
    ${lmobile({ fontSize: '26px' })}
    ${laptop({ fontSize: '22px' })}
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
    ${mobile({ fontSize: '15px' })}
    ${lmobile({ fontSize: '17px' })}
    ${laptop({ fontSize: '17px' })}
`

const OrderTextLeft = styled.div`
    font-weight: 500;
`
const OrderTextLeftBig = styled.div`
    font-size: 22px;
    font-weight: 600;
    ${mobile({ fontSize: '17px' })}
    ${lmobile({ fontSize: '18px' })}
`
const OrderTextRight = styled.div``
const OrderTextRightBig = styled.div`
    font-size: 22px;
    ${mobile({ fontSize: '17px' })}
    ${lmobile({ fontSize: '18px' })}
`

const Cart = () => {
    const discount = useContext(DiscountContext)
    return (
        <>
            {discount[0] && <Discounts />}
            <NavTemplate />
            {/* <Navbar /> */}
            <MobileNavbar />
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
                            <ImgInfo>
                                <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            </ImgInfo>
                            <TextInfo>
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
                                <RightTextContainer>
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
                                </RightTextContainer>

                            </TextInfo>
                        </Product>
                        <Hr />
                        <Product>
                            <ImgInfo>
                                <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            </ImgInfo>
                            <TextInfo>
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
                                <RightTextContainer>
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
                                </RightTextContainer>

                            </TextInfo>
                        </Product>
                        <Hr />
                        <Product>
                            <ImgInfo>
                                <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                            </ImgInfo>
                            <TextInfo>
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
                                <RightTextContainer>
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
                                </RightTextContainer>

                            </TextInfo>
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