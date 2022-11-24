import styled from "styled-components"
import { popularProducts } from '../data'
import ProductItem from "./ProductItem"

const Container = styled.div`
    margin: 50px 0px;
    padding: 50px 30px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    border-radius: 10px;
    overflow: hidden;
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