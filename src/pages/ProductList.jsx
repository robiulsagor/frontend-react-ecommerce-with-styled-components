import { useContext } from "react"
import styled from "styled-components"
import { DiscountContext } from "../App"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"

const Container = styled.div`
    padding: 50px 30px;
`

const Title = styled.h1`
    font-size: 34px;
    font-weight: 500;
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
`

const FilterLeft = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`

const FilterTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
`

const FilterSelect = styled.select`
    font-size: 17px;
    font-weight: 500;
    padding: 10px;
`

const FilterOption = styled.option`
`


const FilterRight = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
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