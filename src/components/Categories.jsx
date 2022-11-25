import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    margin: 40px 30px;
    display: flex;
    gap: 18px;
    border-radius: 10px;
    overflow: hidden;

    ${mobile({ flexDirection: 'column' })};
    ${lmobile({ flexDirection: 'column' })};
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