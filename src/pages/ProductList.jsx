import { useContext } from "react"
import styled from "styled-components"
import { DiscountContext } from "../App"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    padding: 50px 30px;
    ${mobile({ padding: '20px 12px' })}
    ${lmobile({ padding: '20px 12px' })}
    ${tablet({ padding: '20px 15px' })}
`

const Title = styled.h1`
    font-size: 34px;
    font-weight: 500;
    ${mobile({ fontSize: '22px' })}
    ${lmobile({ fontSize: '23px' })}
    ${tablet({ fontSize: '25px' })}
    ${laptop({ fontSize: '30px' })}
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    ${mobile({ alignItems: 'flex-start' })}
    ${lmobile({ alignItems: 'flex-start' })}
    ${tablet({ alignItems: 'flex-start' })}
`

const FilterLeft = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    ${mobile({ flexDirection: 'column', gap: 0, alignItems: 'flex-start' })}
    ${lmobile({ flexDirection: 'column', gap: 0, alignItems: 'flex-start' })}
    ${tablet({ flexDirection: 'column', gap: 0, alignItems: 'flex-start' })}

`

const FilterTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
    ${mobile({ fontSize: '15px' })}
    ${lmobile({ fontSize: '16px' })}
    ${tablet({ fontSize: '17px' })}
    ${laptop({ fontSize: '19px' })}

`

const FilterSelect = styled.select`
    font-size: 17px;
    font-weight: 500;
    padding: 10px;
    ${mobile({ fontSize: '13px', padding: '4px' })}
    ${lmobile({ fontSize: '14px', padding: '4px' })}
    ${tablet({ fontSize: '15px', padding: '4px' })}
    ${laptop({ fontSize: '16px', padding: '6px' })}
`

const FilterOption = styled.option`
`


const FilterRight = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    ${mobile({ flexDirection: 'column', gap: 0 })}
    ${lmobile({ flexDirection: 'column', gap: 0 })}
    ${tablet({ flexDirection: 'column', gap: 0 })}
`

const ProductList = () => {
    const discount = useContext(DiscountContext)
    return (
        <>
            {discount[0] && <Discounts />}
            <Navbar />
            <Container>
                <Title>Dresses</Title>
                <FilterContainer>
                    <FilterLeft>
                        <FilterTitle>Filter Products:</FilterTitle>
                        <FilterSelect>
                            <FilterOption>Yellow</FilterOption>
                            <FilterOption>Black</FilterOption>
                            <FilterOption>Red</FilterOption>
                            <FilterOption>Brown</FilterOption>
                            <FilterOption>White</FilterOption>
                        </FilterSelect>
                        <FilterSelect>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                        </FilterSelect>

                    </FilterLeft>
                    <FilterRight>
                        <FilterTitle>Sort Products:</FilterTitle>
                        <FilterSelect>
                            <FilterOption>Newest</FilterOption>
                            <FilterOption>Price (asc)</FilterOption>
                            <FilterOption>Price (desc)</FilterOption>
                        </FilterSelect>
                    </FilterRight>
                </FilterContainer>
            </Container>
            <Products />
            <Footer />
        </>
    )
}

export default ProductList