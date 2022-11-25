import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import styled from "styled-components"

const Container = styled.div`
    height: 60px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px #dfdfdf;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;    
    gap: 18px;
`

const Lang = styled.span`
    font-size: 16px;
`

const SearchContainer = styled.div`
    border: 1px solid #c0c0c0;
    width: 300px;
    display: flex;
    align-items: center;
    border-radius: 2px;
`

const SearchInput = styled.input`
    flex: 9;
    border:none;
    outline:none;
    padding: 8px 12px;
    font-size: 14px;
`

const SearchIcon = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    cursor: pointer;
    transition: .2s;

    &:hover{
        color: #aaa;
    }
`

const Center = styled.div`
    flex: 1
`

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
`

const TopLinks = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;  
    gap: 30px;
`

const TopLink = styled.li`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
    position: relative;

    &:hover{
        opacity:.6
    }
`


const Navbar = () => {
    return (
        <Container>
            <Left>
                <Lang>EN</Lang>
                <SearchContainer>
                    <SearchInput placeholder="Search..." />
                    <SearchIcon>
                        <Search />
                    </SearchIcon>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Sagor.DEV</Logo>
            </Center>
            <Right>
                <TopLinks>
                    <TopLink>Register</TopLink>
                    <TopLink>Login</TopLink>
                    <TopLink>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </TopLink>
                </TopLinks>
            </Right>
        </Container>
    )
}

export default Navbar