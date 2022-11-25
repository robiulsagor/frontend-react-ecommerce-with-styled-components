import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from "@mui/material"
import { useContext } from "react";
import styled from "styled-components"
import { NavigationContext } from "../contextAPI/NavContext";
import { mobile, lmobile, tablet, laptop, desktop } from "../responsive"

const Container = styled.div`
    height: 60px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px #dfdfdf;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 55;

    ${mobile({ padding: '0 20px', position: 'fixed', background: '#fff', height: '50px' })};
    ${lmobile({ padding: '0 22px', position: 'fixed', background: '#fff', height: '50px' })};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;    
    gap: 18px;
`

const Lang = styled.span`
    font-size: 16px;
    ${mobile({ display: 'none' })};
    ${lmobile({ display: 'none' })};
    ${tablet({ display: 'none' })};
`

const SearchContainer = styled.div`
    border: 1px solid #c0c0c0;
    width: 300px;
    display: flex;
    align-items: center;
    border-radius: 2px;
    ${mobile({ width: '80%', minWidth: '60px' })};
    ${lmobile({ width: '80%', maxWidth: '120px' })};
    ${tablet({ width: '80%', maxWidth: '150px' })};
    ${laptop({ width: '70%', })};
`

const SearchInput = styled.input`
    flex: 4;
    border:none;

    outline:none;
    padding: 8px 12px;
    font-size: 14px;
    ${mobile({ width: '40%', fontSize: '12px', padding: '5px' })};
    ${lmobile({ width: '60%', fontSize: '12px', padding: '5px' })};
    ${tablet({ width: '70%', fontSize: '15px', padding: '5px' })};
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

    ${mobile({ transform: 'scale(.7)' })};
    ${lmobile({ transform: 'scale(.7)' })};
`

const Center = styled.div`
    flex: 1
`

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    ${mobile({ fontSize: '20px' })};
    ${lmobile({ fontSize: '22px' })};
    ${tablet({ fontSize: '25px' })};
`
const Right = styled.div`
    flex: 1;
    position: relative;
`

const TopLinks = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;  
    gap: 30px;
    ${mobile({ display: 'none' })};
    ${lmobile({ display: 'none' })};
    ${tablet({ display: 'none' })};
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
    ${tablet({ fontSize: '15px' })}
    ${laptop({ fontSize: '16px' })}

`

const TopMenu = styled.div`
    display: none;

    ${mobile({ display: 'block', textAlign: 'right', transform: 'scale(1.1)' })};
    ${lmobile({ display: 'block', marginRight: '4%', textAlign: 'right', transform: 'scale(1.3)' })};
    ${tablet({ display: 'block', marginRight: '15%', textAlign: 'right', transform: 'scale(1.4)' })};
`

const Navbar = () => {
    const { showNav, setShowNav } = useContext(NavigationContext)


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
                <TopMenu onClick={() => setShowNav(true)}>
                    <MenuIcon />
                </TopMenu>
            </Right>
        </Container>
    )
}

export default Navbar