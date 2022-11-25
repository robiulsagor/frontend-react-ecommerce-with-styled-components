import styled from "styled-components"
import { popularProducts } from '../data'
import ProductItem from "./ProductItem"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"


const Container = styled.div`
    padding: 50px 30px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    border-radius: 10px;
    overflow: hidden;
    ${mobile({ padding: '20px 12px' })}
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(product => (
                <ProductItem product={product} key={product.id} />
            ))}
        </Container>
    )
}

export default Products