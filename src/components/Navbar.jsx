import React from 'react'
import { menuLinks } from '../data/Links'
import {
    NavContainer,
    HamburgerIcon,
    CloseIcon,
    NavIconToogle,
    NavMenuLinks,
    Links,
    ContainerBtn,
    NavLogo,
    ContainerLinks
} from '../styled/Navbarstyle'
import Button from '../components/Button'
import Logo from './Logo'
import DropDownNav from './DropDownNav'

const Navbar = (props) => {
    
    return (
        <NavContainer onClick={props.toogleIcon? props.toogleNavIcon : null}>
            <DropDownNav toogleIcon={props.toogleIcon}></DropDownNav>
            <NavLogo>
                <Logo color='#2D314D'></Logo>
            </NavLogo>
            <NavIconToogle onClick={props.toogleNavIcon}>
                {props.toogleIcon? 
                <CloseIcon></CloseIcon>
                :
                <HamburgerIcon></HamburgerIcon>}
            </NavIconToogle>
            <NavMenuLinks>
                    {menuLinks.map((items,index) => (
                        <ContainerLinks key={index}>
                            <Links href={items.route}>{items.tittle}</Links>
                        </ContainerLinks>
                    ))}
            </NavMenuLinks>
            <ContainerBtn>
                <Button></Button>
            </ContainerBtn>
        </NavContainer>
    )
}

export default Navbar
