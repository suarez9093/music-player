import React, { useContext } from 'react';
import LoadMusicButton from '../Buttons/LoadMusicButton'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { AppContext } from '../../context';

function NavbarComponent() {
    const { navisOpen, toggleNavbar } = useContext(AppContext);

    return (
        <div>
            <Navbar color="faded" expand="md">
                <NavbarBrand href="https://suarez9093.github.io/music-player/">Ill-Lyrical</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={navisOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/suarez9093/music-player">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <LoadMusicButton />
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;