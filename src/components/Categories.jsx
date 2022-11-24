import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    margin: 40px 30px;
    display: flex;
    gap: 18px;
    border-radius: 10px;
    overflow: hidden;
`

const Categories = () => {
    return (
        <Container>
            {categories.map(category => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </Container>
    )
}

export default Categories